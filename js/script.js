/* SELECT */
;(function ( $, window, document, undefined ) {
    var isbEasySelectFunc = function(el, options){
        var defaults = {
            debug: false,                                       // debug messages in console
            hideEl: true,                                       // hide default element
            theme: false,
            iconHtml: false,                                    // insert HTML in icon place - text only!
            changingUpdate: false,                              // each changed selected options re-create text and option list
            openSide: false,
            classes : {
                main:           "isb-easySelect",
                button:         "isb-easySelect-button",
                drop:           "isb-easySelect-drop",
                list:           "isb-easySelect-list",
                group:          "isb-easySelect-group",
                groupTitle:     "isb-easySelect-group-title",
                groupList:      "isb-easySelect-group-list",
                point:          "isb-easySelect-point",
                open:           "isb-open",
                selected:       "isb-selected",
                disabled:       "isb-disabled",
                icon:           "isb-icon",
                text:           "isb-text",
                dropUp:         "isb-drop-up"
            }
        };
        var _this = this;
        _this.$el = $(el);
        _this.defOptions = defaults;
        _this.userOptions = options;
        _this.options = $.extend(true, {}, defaults, options);
        $.each(_this.options.classes, function(index,value){
            _this.options.classes[index] = _this.toStr(value);
        });
        _this.init();
    };
    isbEasySelectFunc.prototype = {
        init: function(){
            var _this = this;
            if ( this.options.debug ) {
                _this.cLog = function(el){console.log(el)};
            }
            _this.$el.after( _this.createSelect() );
            _this.cLog('isbEasySelect: Custom select created');
            if ( _this.options.hideEl ){
                _this.$el.hide();
            }
            _this.$select = _this.$el.next();
            _this.$text = _this.$select.find('.'+_this.options.classes.text);
            _this.$list= _this.$select.find('.'+_this.options.classes.list);
            _this.$points = _this.$select.find('.'+_this.options.classes.point);
            _this.checkSelectDisabled();
            _this.addHandlers();
        },
        update: function(){
            var _this = this;
            _this.cLog('isbEasySelect: Update selected text and options list' );
            _this.$text.html( _this.getSelectedText() );
            _this.$list.html( _this.createList() );
            _this.$points = _this.$select.find('.'+_this.options.classes.point);
            _this.checkSelectDisabled();
        },
        createSelect: function(){
            var _this = this,
                iconHtml = '',
                theme = '';
            if (_this.options.iconHtml && typeof _this.options.iconHtml == "string"){
                iconHtml = _this.options.iconHtml;
            }
            if ( _this.options.theme && typeof _this.options.theme == "string"){
                theme = _this.options.theme;
            }
            var	newSelect = '<div class="' + _this.options.classes.main + ' ' + theme + '">' +
                '<div class="' + _this.options.classes.button + '">' +
                '<div class="' + _this.options.classes.text + '">' + _this.getSelectedText() + '</div>' +
                '<div class="' + _this.options.classes.icon + '">' + iconHtml +'</div>' +
                '</div>' +
                '<div class="' + _this.options.classes.drop + '">' +
                '<div class="' + _this.options.classes.list + '">' + _this.createList() + '</div>' +
                '</div>' +
                '</div>';
            return newSelect;
        },
        createList: function(){
            var _this = this,
                list = '';
            _this.$el.find('>*').each(function(){
                if (this.tagName === 'OPTGROUP' ) {
                    list += _this.createGroupOption(this);
                } else if (this.tagName === 'OPTION' ) {
                    list += _this.createOption(this);
                }
            });
            return list;
        },
        createGroupOption: function(obj){
            var _this = this,
                group = ' ';
            group += '<div class="' + _this.options.classes.group + '">' +
            '<div class="' + _this.options.classes.groupTitle + '">' + $(obj).attr('label') + '</div>' +
            '<div class="' + _this.options.classes.groupList + '">';
            $(obj).find('>*').each(function(){
                if (this.tagName === 'OPTION' ) {
                    group += _this.createOption(this);
                }
            });
            group += '</div></div>';
            return group;
        },
        createOption: function(obj){
            var _this = this,
                attrValue = $(obj).attr('value'),
                classSelected = '',
                classDisabled = '',
                option = '';
            if ($(obj).is(':selected')){
                classSelected = _this.options.classes.selected;
                _this.cLog('isbEasySelect: set "' + $(obj).html() + '" option selected');
            }
            if ($(obj).is(':disabled')){
                classDisabled = _this.options.classes.disabled;
            }
            option += '<div class="'+_this.options.classes.point+' '+classSelected+' '+classDisabled+'"><a data-value="'+attrValue+'">'+$(obj).html()+'</a></div>';
            return option;
        },
        addHandlers: function(){
            var _this = this;
            _this.$el.change(function(){
                _this.cLog('isbEasySelect: State changed');
                if (_this.options.changingUpdate ){
                    _this.update();
                } else {
                    _this.$text.html(_this.getSelectedText());
                    _this.$points
                        .removeClass(_this.options.classes.selected)
                        .find('a[data-value="' + _this.getSelectedValue() + '"]')
                        .parents('.' + _this.options.classes.point + ':first')
                        .addClass(_this.options.classes.selected)
                }
            });
            _this.$select.on('click', '.' + _this.options.classes.button , function(e){
                e.stopPropagation();
                if(_this.$select.data('selectOpen') === true ){
                    _this.closeList();
                } else {
                    if(!_this.$select.hasClass(_this.options.classes.disabled)){
                        _this.closeAllList();
                        _this.openList();
                        if ( _this.options.openSide ){
                            _this.openSide();
                        }
                    }
                }
            });
            _this.$list.on('click', 'a', function(e){
                e.stopPropagation();
                if (!$(this).parent().hasClass(_this.options.classes.disabled) && !$(this).parent().hasClass(_this.options.classes.selected) ){
                    _this.cLog('isbEasySelect: Click options \"' + $(this).html() + '\"' );
                    _this.optionSelect($(this).data('value'));
                    _this.closeList();
                } else if ( $(this).parent().hasClass(_this.options.classes.selected) ){
                    _this.closeList();
                }
            });
            $('body').click(function(){
                _this.closeAllList();
            });
        },
        openSide: function(){
            var _this = this,
                windowHeight = $(window).height(),
                selectHeight = _this.$select.outerHeight(),
                listHeight = _this.$list.outerHeight(),
                selectWindowTop = _this.$select.offset().top - $(document).scrollTop(),
                selectWindowBottom = windowHeight - selectWindowTop - selectHeight;
            if ( selectWindowBottom < listHeight && selectWindowTop >= listHeight) {
                _this.cLog('isbEasySelect: drop up');
                _this.$select.addClass(_this.options.classes.dropUp);
            } else {
                _this.cLog('isbEasySelect: drop down');
                _this.$select.removeClass(_this.options.classes.dropUp);
            }
        },
        optionSelect: function(optValue){
            var _this = this;
            _this.$el.find('option[value="' + optValue + '"]').prop('selected',true);
            _this.$el.change();
        },
        checkSelectDisabled: function(){
            var _this = this;
            if ( _this.$el.is(':disabled') ){
                _this.$select.addClass(_this.options.classes.disabled);
            } else {
                _this.$select.removeClass(_this.options.classes.disabled);
            }
        },
        getSelectedValue: function(){
            return this.$el.find('option:selected').attr('value');
        },
        getSelectedText: function(){
            return this.$el.find('option:selected').html();
        },
        openList: function(){
            this.$select.addClass(this.options.classes.open).data('selectOpen', true);
        },
        closeList: function(){
            this.$select.removeClass(this.options.classes.open).data('selectOpen', false);
        },
        closeAllList: function(){
            $('.' + this.options.classes.main).removeClass(this.options.classes.open).data('selectOpen', false);
        },
        cLog: function(el){},
        toStr: function(str){
            if(str.substr(0,1) == '.'){
                return str.substr(1);
            }
            return str;
        }
    };
    $.fn.isbEasySelect = function(options) {
        return this.each(function(){
            if(!$.data(this, 'isbEasySelect')){
                $.data(this, 'isbEasySelect', new isbEasySelectFunc(this, options));
            }
        });
    };
})( jQuery, window, document );

/* RADIO CHECKBOX */
;(function ( $, window, document, undefined ) {
    var isbEasySwitchesFunc = function(el, options){
        var defaults = {
            htmlRadio:          false,
            htmlCheckbox:       false,
            checkboxLight:      true,
            debug: false,                                       // debug messages in console
            hideEl: true,                                       // hide default element
            classes : {
                main:           "isb-easySwitches",
                radio:          "isb-easySwitches-radio",
                checkbox:       "isb-easySwitches-checkbox",
                icon:           "isb-icon",
                inputChecked:   "isb-checked",
                inputDisabled:  "isb-disabled"
            }
        };
        var _this = this;
        _this.$el = $(el);
        _this.defOptions = defaults;
        _this.userOptions = options;
        _this.options = $.extend(true, {}, defaults, options);
        $.each(_this.options.classes, function(index,value){
            _this.options.classes[index] = _this.toStr(value);
        });
        _this.init();
    };
    isbEasySwitchesFunc.prototype = {
        init: function(){
            var _this = this;
            if ( this.options.debug ) {
                _this.cLog = function(el){console.log(el)};
            }
            if ( _this.$el.attr('type') === 'radio' ){
                _this.$el.after(_this.createRadio());
            } else if ( _this.$el.attr('type') === 'checkbox' ){
                _this.$el.after(_this.createCheckbox());
            }
            if ( _this.options.hideEl ){
                _this.$el.hide();
            }
            _this.$customEl = _this.$el.next();
            _this.update();
            _this.addEvent();

        },
        update: function(){
            var _this = this;
            if ( _this.$el.is(':checked') ){
                _this.checkedEl();
            } else {
                _this.uncheckedEl();
            }
            if ( _this.$el.is(':disabled') ){
                _this.disabledEl();
            } else {
                _this.enabledEl();
            }
        },
        createRadio: function(){
            var _this = this,
                newSelect = '<span class="'+_this.options.classes.main+' '+_this.options.classes.radio+'">';
            if (_this.options.htmlRadio){
                newSelect += _this.options.htmlRadio;
            } else {
                newSelect += '<span class="'+_this.options.classes.icon+'"></span>';
            }
            newSelect += '</span>';
            return newSelect;
        },
        createCheckbox: function(){
            var _this = this,
                newSelect = '<span class="'+_this.options.classes.main+' '+_this.options.classes.checkbox+'">';
            if (_this.options.htmlCheckbox){
                newSelect += _this.options.htmlCheckbox;
            } else {
                newSelect += '<img class="'+_this.options.classes.icon+'" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUU1NEZCM0U3NDBDMTFFNUIwREU5QzIzOUUzOUJEMUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUU1NEZCM0Y3NDBDMTFFNUIwREU5QzIzOUUzOUJEMUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTU0RkIzQzc0MEMxMUU1QjBERTlDMjM5RTM5QkQxQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRTU0RkIzRDc0MEMxMUU1QjBERTlDMjM5RTM5QkQxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi4VpLQAAAaYSURBVHja7J1ZqFVV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"/>' +
                '<img class="'+_this.options.classes.icon+' light" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjYxNkE3NTI3NDBDMTFFNTkzNUJGNjBCOEQ1MDREOUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjYxNkE3NTM3NDBDMTFFNTkzNUJGNjBCOEQ1MDREOUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjE2QTc1MDc0MEMxMUU1OTM1QkY2MEI4RDUwNEQ5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjE2QTc1MTc0MEMxMUU1OTM1QkY2MEI4RDUwNEQ5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjSsrd0AAAaJSURBVHja7J15qFVV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"/>';
            }
            newSelect += '</span>';
            return newSelect;
        },
        addEvent: function(){
            var _this = this;
            _this.$el.on('change', function(){
                _this.handleChange();
            });
            _this.$customEl.on('click', function(e){
                e.preventDefault();
                if ( !_this.$el.is(':disabled') ){
                    if (_this.$el.is(':checked') && _this.$el.attr('type') === 'checkbox') {
                        _this.$el.prop( "checked", false );
                    } else {
                        _this.$el.prop( "checked", true );
                    }
                    _this.$el.change();
                }
            });
        },
        handleChange: function(){
            var _this = this,
                newEl = _this.$customEl;
            if ( _this.$el.attr('type') === 'radio' ){
                newEl = $('input[name="'+_this.$el.attr('name')+'"]');
                newEl.each(function(){
                    if($(this).data('isbEasySwitches')){
                        $(this).data('isbEasySwitches').uncheckedEl();
                    }
                });
            }
            if (_this.$el.is(':checked')) {
                _this.checkedEl();
            } else {
                _this.uncheckedEl();
            }
        },
        checkedEl: function(){
            var _this = this;
            _this.$customEl.addClass(_this.options.classes.inputChecked);
        },
        uncheckedEl: function(){
            var _this = this;
            _this.$customEl.removeClass(_this.options.classes.inputChecked);
        },
        disabledEl: function(){
            var _this = this;
            _this.$customEl.addClass(_this.options.classes.inputDisabled);
        },
        enabledEl: function(){
            var _this = this;
            _this.$customEl.removeClass(_this.options.classes.inputDisabled);
        },
        cLog: function(el){},
        toStr: function(str){
            if(str.substr(0,1) == '.'){
                return str.substr(1);
            }
            return str;
        }
    };
    $.fn.isbEasySwitches = function(options) {
        return this.each(function(){
            if(!$.data(this, 'isbEasySwitches') && ($(this).attr('type') === 'radio' || $(this).attr('type') === 'checkbox')){
                $.data(this, 'isbEasySwitches', new isbEasySwitchesFunc(this, options));
            }
        });
    };
})( jQuery, window, document );



;(function ( $, window, document, undefined ) {
    var isbEasySlideBFunc = function(el, options){
        var _this = this;
        _this.$el = $(el);
        if(options.blocks){
            _this.viewBlocks = options.blocks;
        } else {
            _this.viewBlocks = 1;
        }
        _this.init();
    };

    function getSlideCount(sld) {
        var wnd = $(window).width();
        
        if (wnd < 481) {
            return 1;
        } else if (wnd < 769) {
            return 2;
        } else {
            return sld.viewBlocks;
        }

    }

    isbEasySlideBFunc.prototype = {
        init: function() {
            var _this = this;
            _this.ul = _this.$el.find('.line .ul-line');
            _this.li = _this.ul.find('.li-line');
            _this.liBlocks = _this.li.find('.li-block');
            _this.widthLi = _this.$el.find('.line .ul-line').width() / getSlideCount(_this);
            _this.li.width(_this.widthLi);
            _this.navigateButt = _this.$el.find('.nav-butt');
            _this.alignBlocks();
            _this.addEvents();
        },
        addEvents: function () {
            var _this = this;
            _this.liBlocks.click(function () {
                if (!$(this).hasClass('active')) {
                    _this.liBlocks.removeClass('active');
                    $(this).addClass('active');
                    $("#li-trainer-id").val($(this).data('id'));
                }
            });
            if (_this.liBlocks.length <= getSlideCount(_this)) {
                _this.navigateButt.hide();
            } else {
                _this.$el.data('active-li', 0);
                _this.ul.css('left', 0);
                _this.$el.find('.nav-butt.prev').addClass('disabled');
                _this.navigateButt.click(function(){
                    if(!$(this).hasClass('disabled')) {
                        var activeSlide = _this.$el.data('active-li'),
                            newActive = activeSlide;
                        if ($(this).hasClass('prev')) {
                            newActive = activeSlide - 1;
                        }
                        if ($(this).hasClass('next')) {
                            newActive = activeSlide + 1;
                        }
                        _this.ul.css('left', -(_this.widthLi * newActive));
                        _this.$el.data('active-li', newActive);
                        _this.navigateButt.removeClass('disabled');
                        if (newActive == 0 || newActive == (_this.liBlocks.length - getSlideCount(_this))) {
                            $(this).addClass('disabled');
                        }
                    }
                });
            }

        },
        alignBlocks: function(){
            var _this = this,
                h = 0;
            _this.liBlocks.each(function(){
                var thisH = $(this).height();
                if(thisH > h){
                    h = thisH;
                }
            });
            _this.liBlocks.height(h);
        }
    };
    $.fn.isbEasySlideB = function(options) {
        return this.each(function(){
            if( !$.data(this, 'isbEasySlideB') ) {
                $.data(this, 'isbEasySlideB', new isbEasySlideBFunc(this, options));
            }
        });
    };
})( jQuery, window, document );

$(window).load(function(){
    $('.slider').isbEasySlideB({
        blocks: 3
    });
});

// ----- DOM READY -----
$(function(){
    $(".button.disabled").unbind('click').bind('click', function() {
            return ! $(this).hasClass('disabled');
        });
    if (typeof mixpanel != "undefined") {
        $("*[data-track]").click(function() {
            mixpanel.track($(this).data('track'));

            return true;
        });
	}

    // custom select
    $("select.custom").isbEasySelect({
        iconHtml: '<img src="/img/icon_sprite_img2.png">',
        openSide: true
    });
    // custom radio, checkbox
    $("input.custom").isbEasySwitches({
        htmlCheckbox: '<img class="isb-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkwNTNCMjk3NEU1MTFFNUI4REFFMjk0OUI3OTVCNjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkwNTNCMkE3NEU1MTFFNUI4REFFMjk0OUI3OTVCNjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTA1M0IyNzc0RTUxMUU1QjhEQUUyOTQ5Qjc5NUI2NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBOTA1M0IyODc0RTUxMUU1QjhEQUUyOTQ5Qjc5NUI2NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po+SiIgAAAQXSURBVHja7JtLSBVhFMfn3kuFBtdFr4W2iAwiskVFQUToTbRCe6BGYI+V0WNRLSKj1mVtghYZUYQuxMAWqaVYVEIkRUVhLYwkCF1Utkihhz1u/5PnxjTMnTszZ+bOjM6Bw3ed+33fnN898z3Omc9IMplUppJElSkmIXAIHAKH4gspKMjPhd6G1hrVi00S2OkorkPLoZXxePzF6OjYwKR8pBm2DbqJL02jv3F9s179SMBh6Qm9Bq3S+foHdMPQ0PDdSeFhhm1OA5vydCfqJQLvYUCQ3U3QXSaqf4WWwtMPA+lhhr1gEpYkB9qFdqsD52EV7D4bzUehiaB5+LRNWJI49HI0QN5tQHFM0MUwtCYaENiTQtgRXqLeRAIAW8+PsgQ2Adh+309agD2M4pygC5qoSgD7zPfrMGD384wsgS0D7CPfbzwAW4fikqAL2mysB2yf74MHDu8uCmEr9GB952GGbRY4Yhy6URswmPYwDCiA7swSLIVzVwWwFB3VGMEaJgBgwBwU96B7EVC/Q0D93GXYNo5w7MJWA7Y9U8WYASz9Ukv4EmURBgHd7wIshW/tAtjf0D2AbTNTOaZjQB57tkgz1rcCegDQrxyG7YTOEMDuBmyL2QYxHdge6PI0E9wWo3yRRdg1KLo5fLMrdYBtstIgqjJgJsOuMqhvmC+yAEuxaZcQ9gBgr1htFGUDclF0ZIBVQ7dqUycWYFfwDxsXwB4CbKOdhlGGpXFUYqFdjl6+yARsET/GEtjjgD1vtzF5uNUirBq6I5U6MQlLM/9sAewJwDZIhlOUx5JdoaejJxM0vi/k+0hgzwD2lHSyjGHGfYKZd0yZyNrbEVpStqOPLvT1Pg3sfWi+ELbeiaXw77IEQ/tg8Hd8LBVAV6OPbvT1Qb01Zdj5AhsbAXvEqbX/3zoMQx/A4KTN8Zx6vGvQRyf6GlHBLhDYR1HTQfSnOA7M0L0wmCajtQJo2pFRaHYDWiiwrZk3Fo4eQomkmWTOojjqYaTYwlvGX053rBs8wEN3UMyDrvQAloKAWjdg0wLTmAH0LQ+gabe3A7A/3bpB2nhYBb1IEzm5JTehVYAdd/MmhicAGDo1+bgJTeHoNsB+c/tXzXjkAdBJhl4GXewSLCXdvmRjzJhO4qmOFlQ6eP/HysS727FsTRKWspYM3S7YhmphKVH+OZtLgOU0rc1wUisvaXOTbdj/Mh5mhcdaBbRXAJvwAtaWh1WezjOREtLKa/bsR6+2cLZftbCHyngsmpFBZeJ9j2ewIg+rPD2Lo6KlBtXeQtcBdkjxWMQv0wDxicYkj009GebZ2HNYRzys8vRcFHQWaqEGtpiOGig+EcdelwKKMh3FPFZJ6KhBuZ9gXRF+4/iUs5S+k0j4Xy0hcAgcAofAPpY/AgwA/dJjEgZvZkAAAAAASUVORK5CYII="/>'
    });
    // edit init
     
    $('.editMe').editable(function (value, settings) {
        console.log(this);
        console.log(value);
        console.log(settings);
        return (value);
    }, {
        placeholder: 'Пусто :(',
        width: '80px',
        height: '22px',
        cssclass: 'edit_form',
        onblur: 'ignore',
        submit: 'OK'
    });
    // trainer collapse
    $('.trainerBlock').click(function () {
        $(this).closest('.trainer-section').find('.trainer-info').slideToggle();
        return false;
    });
    // mob menu
    $('.mobMenu').click(function () {
        $('body').toggleClass('open_menu');
    });
    $('.main-menu').on ('click', function () {
        $('body').removeClass('open_menu');
    });
    // drop list
    $('body').delegate('.drop-button', 'click', function () {
        $(this).parents('.drop-block:first').toggleClass('closed');
    });
    // filter food search
    $('.search-food .filter label').click(function(){
        $(this).parents('.filter:first').find('label').removeClass('active');
        $(this).addClass('active');
    });
    // filter list of trainees
    $('.filter-user-data a.data-title').click(function(){
       $(this).toggleClass('active');
    });
    // sort direction list of trainees
    $('.list-of-trainees .list-header .sort-direction').click(function(){
        $(this).toggleClass('active');
    });
    // reward small filter
    $('.rewards-small .reward-item').click(function(){
        $(this).toggleClass('disabled');
    });
    // checked all in list of trainees
    $('.list-of-trainees .list-header .check-label').click(function(){
        var flag = false;
        if ($(this).find('input[type="checkbox"]').is(':checked')){
            flag = true;
        }
        $(this)
            .parents('.list-of-trainees:first')
            .find('.list-item input[type="checkbox"]')
            .prop( "checked", flag)
            .change();
    });

    // view help
    $('.help .label').click(function(e){
        e.stopPropagation();
        if ( $(this).parents('.help:first').hasClass('open')) {
            closeAllHelp();
        } else {
            closeAllHelp();
            $(this).parents('.help:first').addClass('open');
        }
    });
    // close all helps
    function closeAllHelp(){
        $('body').find('.help').removeClass('open');
    }
    // dont slose help if click open help description
    $('.help').click(function(e) {
        e.stopPropagation();
    });
/*
    // close help
    $('body').click(function(){
        closeAllHelp();
    });
*/
    // personal data switch
    $('.personal-data .switch').click(function(){
       $(this).toggleClass('active');
    });
    // open new message
    var globalArray = new Array;
    $('#openNewMessagePopup').click(function(){
        $('.hide-page-layer').show();
        $('#newMessagePopup').show();
        globalArray = new Array;
        $('.list-of-trainees .check-label input:checked').each(function() {
                globalArray.push($(this).val());
            })
            .promise()
            .done(function() {
                $("#newMessagePopup .info-title .sub span").html(globalArray.length);
                $("#newMessagePopup input[name=receivers]").val(globalArray.join(','));
            });
    });
    // close new message
    var newMessagePopupClose = function(){
        $('.hide-page-layer').hide();
        $('#newMessagePopup').hide();
        $(".text-title.result").html("").addClass('hide');
    };
    $('.hide-page-layer, #newMessagePopup .sub').click(newMessagePopupClose);
    // send message
    $('#newMessagePopup input[type=submit]').click(function(){
        $(".text-title.result").removeClass('error').html("").addClass('hide');
        var data = {
            receivers: $("#newMessagePopup input[name=receivers]").val(),
            theme: $("#newMessagePopup input[name=theme]").val(),
            message: $("#newMessagePopup textarea[name=message]").val()
        };

        if (data.receivers == '') {
            $(".text-title.result").addClass('error').html("Не выбраны адресаты").removeClass('hide');
		}
        /*else if (data.theme == '') {
            $(".text-title.result").addClass('error').html("Не указана тема диалога").removeClass('hide');
		}*/
        else if (data.comment == '') {
            $(".text-title.result").addClass('error').html("Не указан текст сообщения").removeClass('hide');
		}
        else {
            $("#newMessagePopup .loader").removeClass('hide');
            $.post("/ajax/dialog", data)
                .done(function(data) {
                    if (data.error != '') {
						$(".text-title.result").addClass('error').html(data.error).removeClass('hide');
					}
                    else {
                        $(".text-title.result").html("Сообщение отправлено успешно").removeClass('hide');
                        setTimeout(newMessagePopupClose, 3000);
                    }
                })
                .fail(function(error) {
                    $(".text-title.result").html("Ошибка передачи данных").removeClass('hide');
                    console.log(error);
                })
                .always(function() {
                    $("#newMessagePopup .loader").addClass('hide');
                });
        }

        return false;
    });

    // open write to us
    $('#writeToUs').click(function(){
        $(this).addClass('active');
        $('.hide-page-layer').show();
        $('.info-section.message_fitwonk').show();
    });
    // function close "write to us"
    function closeWriteToUs(){
        $('.info-section.message_fitwonk').hide();
        $('.hide-page-layer').hide();
        $('#writeToUs').removeClass('active');
    }
    // handler close "write to us"
    $('.hide-page-layer, .info-section.message_fitwonk .info-title .sub').click(function(){
        closeWriteToUs()
    });



    /*-----------------------------------------autocomplete code----------------------------------------*/
    $("#autocomplete").on("keyup",tryComplete);

    function tryComplete(){
        var str = $("#autocomplete").val().toLowerCase();
        var len = str.length;
        $("#hintcont").css("visibility","visible").empty();

        if(len>1){
            for(var i=0;i<lib_cities.length;i++){
                if(str==lib_cities[i][1].substr(0,len).toLowerCase()){
                    $("#hintcont").append('<div class="hintlabel" num="'+i+'">'+lib_cities[i][1]+'</div>')
                }
            }
        }
        $(".hintlabel")
        .on("click",function(){
            var num = $(this).attr("num");
            $("#hintcont").css("visibility","hidden");
            $("#profileform-city").val(lib_cities[num][0]);
            $("#autocomplete").val(lib_cities[num][1]);
        })

    }

    /*---------------------------------------------alert code-------------------------------------------*/
    $(".alert button.close").click(function() {
        $(this).parent().parent().remove();
    });
});
