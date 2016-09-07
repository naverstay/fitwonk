var config = {};
var result = {};

var beepTick = new Audio('/uploads/sound/beep_tick.mp3');
var beepEnd = new Audio('/uploads/sound/beep_end.mp3');
var beepOn = true;

function time() {
	var d = new Date();
    return Math.floor(d.getTime() / 1000);
}

function sec2time(seconds) {
	var h = Math.floor(seconds / 3600);
	var m = Math.floor((seconds - h * 3600) / 60);
	var s = seconds - h * 3600 - m * 60;

	return (h > 0 ? ((h > 9 ? "" : "0") + h + ":") : "") +
        (m > 9 ? "" : "0") + m + ":" +
        (s > 9 ? "" : "0") + s;
}

function changeCounterPercent(name, perc){
    $obj = null;
    if (name === 'general'){
        $obj = $("#generalCounter");
    } else if (name === 'step'){
        $obj = $("#stepCounter");
    }
    if($.fn.knob instanceof Function && $obj != null) {
        $obj.find('.round-count').val(perc).trigger('change');
    }
    if ($obj != null){
        $obj.find('.stat .perc span').html(perc);
    }
}

var _cache = {};
function _(selector) {
    if (typeof _cache[selector] == "undefined") {
        _cache[selector] = $(selector);
    }

    return _cache[selector];
}

function resetResult() {
	result = {
        program_workout_id: workout,
        fact: [],
        startedAt: 0,
        finishedAt: 0,
        pulse: 0,
        rate: 0,
        comment: ''
	};
    $.cookie('workout_progress', null);
	widgetInit();
}

function widgetInit() {
	// init config
	config = {
        timer: 0,
        action: 'rest',
		totalTime: 0,
        countTime: 0,
        workTime: 0,
		setIndex: 0, //data.length - 1,
        setTime: 0
	};

	// init result
	result = db_result;

    var progress = $.cookie('workout_progress'), restored_rest = false;
    if (progress) {
        progress = progress.split('__', 3);
        if ((progress.length == 3) && (progress[0] == result.program_workout_id)) {
            var p = JSON.parse(progress[1]);
            if ((typeof p == 'object') && (p.action)) {
                config = p;
                if ((config.action == 'rest') && ((config.countTime > 0) || (config.setTime > 0) || (config.setIndex > 0))) {
                    restored_rest = true;
                }
            }
            p = JSON.parse(progress[2]);
            if (typeof p == 'object') {
                result = p;
            }
        }
    }
    if (config.totalTime <= 0) {
        // calculate totals
        for (var i = 0; i < data.length; i++) {
            if (data[i].duration) config.totalTime += data[i].duration;
            if (data[i].resttime) config.totalTime += data[i].resttime;
        }
    }

    _('.widget .widget-body .help-layer').removeClass('text');
    _(".widget .widget-step-comment").hide();
    _('.widget .widget-step-rate').hide();
    _(".widget .widget-step-pulse").hide();
	_(".widget-navigate .main-button-start").show();
    _('.widget-bottom .desc-title').html('Следующее упражнение');
    _('.widget-bottom .title').show();
    _(".widget .widget-step-work").show();
	if (data.length > 0) {
		_('.widget-body .countdown .desc').html('Приготовьтесь, тренировка<br/>скоро начнется');

		widgetExercise();
		widgetTimers();

        if (restored_rest) {
            widgetRest(true, true);
            changeVideo(config.setIndex + 1);
        } else {
            changeVideo(config.setIndex);
        }
	}
	else {
		_(".widget-body .countdown").hide();
		_(".widget-body .counters").hide();
		_('.widget-body .help-layer .practice').hide();
		_(".widget-navigate .main-button-start").hide();
		_(".widget-navigate .main-button-pause").hide();
		_('.widget-bottom .title').hide();

		widgetRate();
	}
}

function widgetExercise() {
    _('.widget-body .desc-title').html('Подход ' + (config.setIndex + 1));
    _('.widget-body .title').html(data[config.setIndex].name);
    _('.widget-bottom .title').html(config.setIndex + 1 < data.length ? data[config.setIndex + 1].name : 'Замер пульса');
}

function widgetTimers() {
    _('.widget-body .counters .general .timer').html(sec2time(config.countTime));
    _('.widget-body .counters .step .timer').html(sec2time(config.setTime));
    _('.countTime').html(sec2time(config.setTime));
    _('.remainTime').html(sec2time(config.totalTime - config.countTime));

    changeCounterPercent('general', Math.round(config.countTime * 100 / config.totalTime));
    changeCounterPercent('step', Math.round(config.setTime * 100 / data[config.setIndex].duration));

    $.cookie('workout_progress', result.program_workout_id + '__' + JSON.stringify(config) + '__' + JSON.stringify(result));
}

function widgetWork(resume) {
    if ( ! resume) {
        config.setTime = 0;
        if (result.startedAt == 0) result.startedAt = time();
        if (result.fact[config.setIndex - 1]) result.fact[config.setIndex - 1].finishedAt = time();
        result.fact[config.setIndex] = {
            id: data[config.setIndex].id,
            repeats: 0,
            duration: 0,
            resttime: 0,
            startedAt: time(),
            finishedAt: 0
        };
    }
    config.action = 'work';
    _(".widget-body .countdown").hide();
    _(".widget-body .counters").show();
	_(".countSubject").html("Упражнение");
    widgetTimers();
    config.timer = setInterval(function() {
            config.countTime++;
            config.setTime++;
            widgetTimers();
            if (config.setTime >= data[config.setIndex].duration) {
				if (beepOn) beepEnd.play();
                clearInterval(config.timer);
                result.fact[config.setIndex].duration = time() - result.fact[config.setIndex].startedAt;
                widgetRest();
            }
            else if (config.setTime + 4 >= data[config.setIndex].duration) {
				if (beepOn) beepTick.play();
			}
        }, 1000);
}

function changeVideo(index) {
	_('.widget-body .help-layer .practice').html('<video id="widget-video-' + data[index].eid + '" class="video-js vjs-default-skin vjs-big-play-centered" controls preload loop poster="/img/poster-frame.jpg" width="496" height="279" style="margin: 0px auto !important;"><source data-res="720" src="' + data[index].video + '" type="video/mp4"></video>');
	videojs("widget-video-" + data[index].eid);

	//if (_(".widget-body .button.help").hasClass('open')) {
	//	//$('.widget-body .help-layer .practice .video-js').trigger('play');
	//	videojs($('.widget-body .help-layer .practice .video-js').get(0)).ready(function() {
	//		this.play();
	//	});
	//}
}

function widgetRest(resume, no_timer) {
	helpClose();
    if (config.setIndex == data.length - 1) {
        result.fact[config.setIndex].duration = time() - result.fact[config.setIndex].startedAt;
        return widgetPulse();
    }
    if ( ! resume) config.setTime = data[config.setIndex].resttime;
    config.action = 'rest';
    _('.widget-body .desc-title').html('');
    _('.widget-body .title').html('Отдых ' + data[config.setIndex].resttime + ' секунд');
    _('.widget-body .countdown .desc').html('секунд осталось');
    _(".widget-body .countdown").show();
    _(".widget-body .counters").hide();
    _(".widget-body .countdown .count").html(config.setTime);
	_(".countSubject").html("Отдых");
	// video
	if (config.setIndex + 1 < data.length && data[config.setIndex].eid != data[config.setIndex + 1].eid) {
		changeVideo(config.setIndex + 1);
	}
	if (typeof no_timer === 'undefined') {
        config.timer = setInterval(function () {
            config.countTime++;
            config.setTime--;
            widgetTimers();
            if (config.setTime <= 0) {
                if (beepOn) beepEnd.play();
                clearInterval(config.timer);
                result.fact[config.setIndex].resttime = time() - result.fact[config.setIndex].startedAt - result.fact[config.setIndex].duration;
                config.setIndex++;
                widgetExercise();
                widgetWork();
            }
            else if (config.setTime < 5) {
                if (beepOn) beepTick.play();
            }
            _(".widget-body .countdown .count").html(config.setTime);
        }, 1000);
    }
}

function widgetPulse() {
    if (result.fact && result.fact[config.setIndex]) result.fact[config.setIndex].finishedAt = time();
    result.finishedAt = time();
	if (result.startedAt == 0) result.startedAt = result.finishedAt;
    _('.widget-body .desc-title').html('');
    _('.widget-body .title').html('');
    //_(".widget-body .countdown").hide();
    //_(".widget-body .counters").hide();
    _(".widget-navigate .main-button-start").hide();
    _(".widget-navigate .main-button-pause").hide();
    _(".widget .widget-step-work").hide();
    _(".widget .widget-step-pulse").show();
    //_('.widget-body .help-layer .help-content').show();
    //_(".widget-navigate .main-button-pulse").show();
    //_('.widget .widget-body .help-layer .practice').hide();
    _('.widget .widget-body .help-layer').addClass('text');
    $(".widget-navigate .ind:has(.button)").show();
    _('.widget-bottom .desc-title').html('Введите значение пульса (ударов в минуту)');
    _('.widget-bottom .title').hide();
    //_('.widget-bottom .pulse').show();
    _('.widget-bottom .pulse input[type="submit"]').click(function () {
	    _('.widget-body .help-layer').hide();
        result.pulse = parseInt(_('.widget-bottom .pulse input[type=text]').val());
		if (! result.pulse || result.pulse <= 0) {
            alert("Необходимо указать значение пульса (ударов в минуту), иначе тренировка не будет считаться завершенной.");
			_('.widget-bottom .pulse input[type=text]').focus();
			return false;
        }
        updateResult();
        widgetRate();
    });
}

function widgetRate() {
	if (result.finishedAt == 0) {
		result.finishedAt = time();
		if (result.startedAt == 0) result.startedAt = result.finishedAt;
    }
    _('.widget-body .desc-title').hide();
    _('.widget-body .title').hide();
    _(".widget .widget-step-work").hide();
    _(".widget .widget-step-pulse").hide();
    _(".widget .widget-step-rate .totals").html('Время: ' + sec2time(result.finishedAt - result.startedAt) + ' Упражнений: ' + data.length + ' Пульс: ' + result.pulse);
    _(".widget .widget-step-rate").show();
    _('.widget-body .button.volume').hide();
    _('.widget-body .button.help').hide();
    _('.rating-traning input[type="submit"]').click(function () {
		result.rate = $('.rating-traning .rating-number.active span').html();
        updateResult();
        widgetComment();
    });
}

function widgetComment() {
	if (result.finishedAt == 0) {
		result.finishedAt = time();
		if (result.startedAt == 0) result.startedAt = result.finishedAt;
    }
    _('.widget-body').addClass('small');
    _(".widget .widget-step-work").hide();
    _(".widget .widget-step-pulse").hide();
    _('.widget .widget-step-rate').hide();
    //$('.widget-body .widget-step-rate .rate').hide();
    //$('.widget-body .widget-step-rate .comment').show();
    _(".widget .widget-step-rate .totals").html('Время: ' + sec2time(result.finishedAt - result.startedAt) + ' Упражнений: ' + data.length + ' Пульс: ' + result.pulse);
    _('.rating-traning .title-rating').html('Ваша оценка');
    //_('.rating-traning .submit-button').hide();
    $('.rating-traning .rating-number.value' + (result.rate ? result.rate : 1)).addClass('active');
    $('.rating-traning .rating-number').hide();
    $('.rating-traning .rating-number.active').show();
    _('.widget .widget-step-comment').show();
    _('.new-message input[type="submit"]').click(function () {
        result.comment = _('.new-message textarea').val();
        if (result.comment != '') updateResult();
		self.location.href = "/trainee";
    });
}

function updateResult() {
	$.post("/trainee/training", result)
        .done(function(data) {
            //alert(data);
        })
        .fail(function() {
            //alert("error saving metrics");
        });
}

function helpOpen() {
	if (_(".widget-body .button.help").hasClass('open')) return true;
	if (config.timer && ! result.finishedAt) _(".widget-navigate .ind.top").show();
	_(".widget-body .button.help").addClass('open');
	_(".widget-body .help-layer").show();
	//$('.widget-body .help-layer .practice .video-js').trigger('play');
	videojs($('.widget-body .help-layer .practice .video-js').get(0)).ready(function() {
		this.play();
	});
}

function helpClose() {
	if ( ! _(".widget-body .button.help").hasClass('open')) return true;
	if (config.timer && ! result.finishedAt) _(".widget-navigate .ind.top").hide();
	_(".widget-body .button.help").removeClass('open');
	_(".widget-body .help-layer").hide();
	//$('.widget-body .help-layer .practice .video-js').trigger('pause');
	videojs($('.widget-body .help-layer .practice .video-js').get(0)).ready(function() {
		this.pause();
	});
}

// ----- DOM READY -----
jQuery(document).ready(function () {
    _(".widget-navigate .main-button-start").click(function() {
        $(".widget-navigate .ind").hide();
		_(".widget-navigate .ind.top").show();
        $(this).hide();
        _(".widget-navigate .main-button-pause").show();
        if (config.countTime > 0) {
            if (config.action == 'work') {
                widgetWork(true);
            } else {
                widgetRest(true);
            }
        }
        else {
            _(".widget-body .countdown").show();
            _(".widget-body .counters").hide();
            config.setTime = 5;
            _(".widget-body .countdown .count").html(config.setTime);
            config.timer = setInterval(function() {
                    config.setTime--;
                    if (config.setTime <= 0) {
						if (beepOn) beepEnd.play();
                        clearInterval(config.timer);
                        //alert("start");
                        widgetWork();
                    }
					else if (config.setTime < 5) {
						if (beepOn) beepTick.play();
					}
                    _(".widget-body .countdown .count").html(config.setTime);
                }, 1000);
        }
    });
    _(".widget-navigate .main-button-pause").click(function() {
        if (config.timer) clearInterval(config.timer);
		config.timer = 0;
        $(".widget-navigate .ind").show();
        $(this).hide();
        _(".widget-navigate .main-button-start").show();
    });
	_(".widget-navigate .half-left .ind .button").click(function() {
		resetResult();
		return false;
	});

    $(".widget-body .button.volume").click(function(){
        if ($(this).hasClass('no')) {
            $(this).removeClass('no');
			beepOn = true;
        } else {
            $(this).addClass('no');
			beepOn = false;
        }
    });

    $(".widget-body .button.help").click(function(){
        if ($(this).hasClass('open')) {
			return helpClose();
        } else {
			return helpOpen();
        }
    });

	// trick to speed up completion
    $(".widget .widget-body .desc-title").dblclick(function() {
        config.setIndex = data.length - 1;
		changeVideo(config.setIndex);
		widgetExercise();
    });

    $("#pulseHelp").click(function(){
        var $buttHelp = $(".widget-body .button.help");
        if ($buttHelp.hasClass('open')) {
            $buttHelp.removeClass('open');
            $(".widget-body .help-layer").hide();
        } else {
            $buttHelp.addClass('open');
            $(".widget-body .help-layer").show();
        }
    });

    $(".select-rating .rating-number").click(function(){
        $(this).parents('.select-rating:first').find('.rating-number').removeClass('active');
        $(this).addClass('active');
    });

    if($.fn.knob instanceof Function) {
        $("#generalCounter .round-count").knob({
            'readOnly': true,
            'min': 0,
            'max': 100,
            'step': 1,
            'thickness': 0.15,
            'width': '152',
            'height': '152',
            'inputcolor': '#2a75b9',
            'fgColor': "#2a75b9",
            'bgColor': "#c6c6c6"
        });
        $("#stepCounter .round-count").knob({
            'readOnly': true,
            'min': 0,
            'max': 100,
            'step': 1,
            'thickness': 0.1,
            'width': '230',
            'height': '230',
            'inputColor': '#2a75b9',
            'fgColor': '#2a75b9',
            'bgColor': '#c6c6c6'
        });
    }
});
