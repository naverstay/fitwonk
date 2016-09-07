
;(function ( $, window, document, undefined ) {

/* RADIO CHECKBOX */

	var isbEasySwitchesFunc = function(el, options){
		var defaults = {
			htmlRadio:          false,
			htmlCheckbox:       false,
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
			_this.$el.hide();
			if ( _this.$el.attr('type') === 'radio' ){
				_this.$el.after(_this.createRadio());
			} else {
				_this.$el.after(_this.createCheckbox());
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
			return(newSelect);
		},
		createCheckbox: function(){
			var _this = this,
				newSelect = '<span class="'+_this.options.classes.main+' '+_this.options.classes.checkbox+'">';
			if (_this.options.htmlCheckbox){
				newSelect += _this.options.htmlCheckbox;
			} else {
				newSelect += '<span class="'+_this.options.classes.icon+'"></span>';
			}
			newSelect += '</span>';
			return(newSelect);
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