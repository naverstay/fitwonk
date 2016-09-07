
;(function ( $, window, document, undefined ) {

/* SELECT */

	var isbEasySelectFunc = function(el, options){
		var defaults = {
			classes : {
				main:           "isb-easySelect",
				button:         "isb-easySelect-button",
				drop:           "isb-easySelect-drop",
				list:           "isb-easySelect-list",
				group:          "isb-easySelect-group",
				groupTitle:     "isb-easySelect-group-title",
				groupList:     "isb-easySelect-group-list",
				point:          "isb-easySelect-point",
				open:           "isb-open",
                selected:       "isb-selected",
				icon:           "isb-icon",
				text:           "isb-text"
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
			_this.$el.after( _this.createSelect() );
			_this.$el.hide();
			_this.$select = _this.$el.next();
			_this.$text = _this.$select.find('.'+_this.options.classes.text);
			_this.$list= _this.$select.find('.'+_this.options.classes.list);
			_this.$points = _this.$select.find('.'+_this.options.classes.point);
			_this.addHandlers();
		},
		update: function(){
			var _this = this;
			_this.$text.html( _this.getSelectedText() );
			_this.$list.html( _this.createList() );
			_this.$points = _this.$select.find('.'+_this.options.classes.point);
		},
		createSelect: function(){
			var _this = this,
				newSelect = '<div class="' + _this.options.classes.main+'">' +
								'<div class="' + _this.options.classes.button + '">' +
									'<div class="' + _this.options.classes.text + '">'+ _this.getSelectedText() +'</div>' +
									'<div class="' + _this.options.classes.icon + '"></div>' +
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
				option = ' ';
			if ($(obj).is(':selected')){
				classSelected = _this.options.classes.selected;
			}
			option += '<div class="'+_this.options.classes.point+' '+classSelected+'"><a data-value="'+attrValue+'">'+$(obj).html()+'</a></div>';
			return option;
		},
		addHandlers: function(){
			var _this = this;
			_this.$el.change(function(){
				console.log('change');
				_this.$text.html(_this.getSelectedText());
				_this.$points.removeClass(_this.options.classes.selected);
				_this.$points.find('a[data-value="' + _this.getSelectedValue() + '"]').parents('.' + _this.options.classes.point + ':first').addClass(_this.options.classes.selected)
			});
			_this.$select.on('click', '.' + _this.options.classes.button , function(e){
                e.stopPropagation();
                if(_this.$select.data('selectOpen') === true ){
                    _this.closeList();
				} else {
                    _this.closeAllList();
                    _this.openList();
				}
			});
            _this.$list.on('click', 'a', function(e){
                e.stopPropagation();
                _this.optionSelect($(this).data('value'));
                _this.closeList();
            });
			$('body').click(function(){
                _this.closeAllList();
			});
		},
		optionSelect: function(optValue){
            var _this = this;
            _this.$el.find('option[value="' + optValue + '"]').prop('selected',true);
            _this.$el.change();
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