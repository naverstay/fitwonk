$(function(){
    /**
     * сохранение метрик выполненного упражнения
     */
    $('body').on('click', '.save', function(e){
        e.preventDefault();
        clearTimeout(t);
        var request = $(this).parents('.input-group').serialize();

        $.post('/trainee/save-exercise/?id='+$(this).data('model'),request,function(resp){
            if (resp == 1) {
                alert('Сохранено');
                $('.finish').prop('disabled',false);
            } else {
                alert('Сохранено');
            }
        });
    });
    /**
     * перезапуск тренировки
     */
    $('.restart').on('click',function(e){
        e.preventDefault();
        if (confirm('Вы уверены что хотите перезапустить тренировку?')) {
            $.post('/trainee/restart-exercise/?id='+$(this).data('program'));
        }
    });

    var t;
    /**
     * Включение таймера и сохранение начала упражнения
     */
    $('body').on('click','.start',function(){

        var request = $(this).parents('.input-group').serialize();

        $.post('/trainee/start-exercise/?id='+$(this).data('model'),request);

        var el = $(this).parent().siblings('.form-control'),
            start = $(this),
            seconds = 0, minutes = 0, hours = 0;

        function add() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }

            el.val((hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));

            timer();
        }
        function timer() {
            t = setTimeout(add, 1000);
        }
        timer();

        start.onclick = timer;

        /* Stop button */
        //stop.onclick = function() {
        //    clearTimeout(t);
        //}

        /* Clear button */
        //clear.onclick = function() {
        //    el.textContent = "00:00:00";
        //    seconds = 0; minutes = 0; hours = 0;
        //}

        $(this).removeClass('start btn-primary');
        $(this).addClass('save btn-success');
        $(this).text('Сохранить');
    });





});