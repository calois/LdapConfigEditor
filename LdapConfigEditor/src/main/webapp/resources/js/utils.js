(function($) {
	String.prototype.endsWith = function(s) {
		if (!s) {
			return false;
		}
		return this.lastIndexOf(s) + s.length == this.length;
	};
	window.utils = {
		getUrl : function(url, params) {
			if (0 != url.indexOf('/')) {
				url = '/' + url;
			}
			if (-1 == url.indexOf(this.ctx)) {
				url = this.ctx + url;
			}
			if (params && params != {}) {
				for ( var i in params) {
					if (params[i] === undefined || params[i] == null) {
						continue;
					}
					if (url.indexOf('?') == -1) {
						url = url + '?';
					} else {
						url = url + '&';
					}
					url = url + i + '=' + params[i];
				}
			}
			return url;
		},
		getUuid : function() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		},
		group : function(array, size) {
			var groups = [];
			for (var i = 0; i < parseInt((array.length - 1) / size) + 1; i++) {
				var group = [];
				for (var j = i * size; j < (i + 1) * size && j < array.length; j++) {
					group.push(array[j]);
				}
				groups.push(group);
			}
			return groups;
		},
		hasScroll : function() {
			var hContent = $("body").height();
			var hWindow = $(window).height();
			if (hContent > hWindow) {
				return true;
			}
			return false;
		},
		onScrollToBottom : function(key, callback) {
			if (!this.stbListerners) {
				this.stbListerners = {};
			}
			this.stbListerners[key] = callback;
		},
		unScrollToBottom : function(key) {
			if (!this.stbListerners) {
				return;
			}
			delete this.stbListerners[key];
		}
	};
	$(window).scroll(function() {
		if ($(window).scrollTop() + $(window).height() == $(document).height() && !utils.isInBottom) {
			if (utils.stbListerners) {
				for ( var i in utils.stbListerners) {
					utils.stbListerners[i]();
				}
			}
			utils.isInBottom = true;
		} else if (utils.isInBottom && $(document).height() - $(window).scrollTop() - $(window).height() > 150) {
			utils.isInBottom = false;
		}
	});
	jQuery.fn.extend({
		showMsg : function(msgs) {
			this.clearMsg();
			return this.each(function(index) {
				if (!msgs) {
					errors = [{
						code : 'N/A',
						message : '未知错误',
						level : 'error',
						system : 'CORE'
					}];
				}
				if (jQuery.isPlainObject(msgs)) {
					msgs = [msgs];
				}
				for ( var i in msgs) {
					var msg = msgs[i];
					var text = '[' + msg.system + '.' + (msg.code ? msg.code : 'N/A') + '] ' + msg.message;
					var msgClassName = 'alert ';
					switch (msg.level) {
						default :
						case 'ERROR' :
						case 'FATAL' :
							msgClassName += 'alert-danger';
							break;
						case 'WARNING' :
							msgClassName += 'alert-warning';
							break;
						case 'INFO' :
							msgClassName += 'alert-info';
							break;
						case 'SUCCESS' :
							msgClassName += 'alert-success';
							break;
					}
					var msgText = '<div msg="true" class="' + msgClassName + '">' + text + '</div>';
					var message = $(msgText).prependTo($(this));
					if (msg.level == 'SUCCESS') {
						setTimeout(function() {
							message.remove();
						}, 2000);
					}
				}
			});
		},
		clearMsg : function() {
			return this.each(function(index) {
				$(this).find('div[msg=true]').remove();
			});
		}
	});
})(jQuery);
// Directives
(function() {
	'use strict';
	angular.module('utils', ['ui.bootstrap']);
	angular.module('utils').directive("required", function() {
		return {
			link : function(scope, element, attrs) {
				if (attrs['required']) {
					element.closest('.form-group').addClass('required');
				}
			},
			restrict : "A"
		};
	});
	angular.module('utils').directive("gfaDropdown", function() {
		return {
			link : function(scope, element, attrs) {
				element.dropdown();
			},
			restrict : "A"
		};
	});
	angular.module('utils').directive('ngEnter', function() {
		return function(scope, element, attrs) {
			element.bind("keydown keypress", function(event) {
				if (event.which === 13) {
					scope.$apply(function() {
						scope.$eval(attrs.ngEnter);
					});

					event.preventDefault();
				}
			});
		};
	});
	angular.module('utils').directive('i18n', function() {
		var i18nDirective;
		i18nDirective = {
			restrict : "A",
			updateText : function(ele, key) {
				return ele.html(utils.getMsg(key))
			},
			link : function(scope, ele, attrs) {
				scope.$on('userLanguageUpdated', function() {
					return i18nDirective.updateText(ele, attrs.i18n);
				});
				return attrs.$observe('i18n', function(value) {
					return i18nDirective.updateText(ele, value);
				});
			}
		};
		return i18nDirective;
	})
	angular.module('utils').directive("gfaMsg", function() {
		return function(scope, element, attrs) {
			scope.$watch(attrs["gfaMsg"], function(newValue, oldValue, scope) {
				element.showMsg(newValue);
			});
		};
	});
	angular.module('utils').directive("gfaPercent", function($parse) {
		return {
			require : "?ngModel",
			link : function(scope, element, attrs) {
				function format(value) {
					if (!value) {
						value = element.val();
					}
					if (value && value != '') {
						var newValue = scope.$eval('"' + value + '"|currency:""') + '%';
						if (newValue == '%' && value != '') {
							var getter = $parse(attrs.ngModel);
							var setter = getter.assign;
							setter(scope, '');
							element.val('');
						} else {
							element.val(newValue);
						}
					}
				}
				function clear() {
					element.val(element.val().replace(/[%,]/g, ''));
				}
				scope.$watch(attrs.ngModel, function(newValue, oldValue) {
					if (newValue !== undefined && !scope.focus) {
						format(newValue);
					}
				});
				element.addClass('text-right');
				element.on('blur', function() {
					format();
					scope.focus = false;
				});
				element.on('focus', function() {
					clear();
					scope.focus = true;
				});
			},
			restrict : "A"
		};
	});
	angular.module('utils').directive("gfaDollar", function($parse) {
		return {
			require : "?ngModel",
			link : function(scope, element, attrs, ngModel) {
				if (!ngModel) {
					return;
				}
				ngModel.$parsers.unshift(function(value) {
					return clear(value);
				});
				ngModel.$formatters.unshift(function(value) {
					return format(value);
				});
				function format(value) {
					return scope.$eval('"' + value + '"|currency:"$"');
				}
				function clear(value) {
					return value.replace(/[\$,]/g, '');
				}
				element.addClass('text-right');
				element.on('blur', function() {
					ngModel.$viewValue = format(ngModel.$modelValue);
					element.val(ngModel.$viewValue);
				});
				element.on('focus', function() {
					ngModel.$viewValue = ngModel.$modelValue;
					element.val(ngModel.$viewValue);
				});
			},
			restrict : "A"
		};
	});
	angular
			.module('utils')
			.directive(
					"gfaScroll",
					function($parse) {
						return {
							link : function(scope, element, attrs) {
								scope.atTheButtom = false;
								scope.gfaScroll.setContainer(element);
								$(element)
										.scroll(
												function() {
													if ($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight
															&& scope.atTheButtom == false) {
														scope.atTheButtom = true;
														scope.gfaScroll.more();
													} else if ($(this).scrollTop() + $(this).innerHeight() <= (this.scrollHeight - 20)) {
														scope.atTheButtom = false;
													}
												});
							},
							scope : {
								'gfaScroll' : '='
							},
							restrict : "A"
						};
					});
	angular.module('utils').directive("gfaOnLoading", function() {
		return {
			link : function(scope, element, attrs) {
				var loading = $('<div class="center-block loading">&nbsp;</div>');
				scope.$watch(attrs.gfaOnLoading, function(value) {
					if (value) {
						element.append(loading);
					} else {
						loading.remove();
					}
				});
			},
			restrict : "A"
		};
	});
	angular.module('utils').directive("gfaSortGrid", function() {
		return {
			link : function(scope, element, attrs) {

			},
			controller : function($scope) {
				var sorters = [];
				this.sort = function(scope) {
					for (var i = 0; i < sorters.length; i++) {
						if (sorters[i] != scope) {
							sorters[i].direction = -1;
							sorters[i].$digest();
						}
					}
					$scope.sort(angular.toJson([{
						property : scope.property,
						direction : scope.direction == 0 ? 'ASC' : 'DESC'
					}]));
				};
				this.register = function(scope) {
					sorters.push(scope);
				};
			},
			scope : {
				sort : '=gfaSortGrid'
			},
			restrict : "A"
		};
	});
	angular
			.module('utils')
			.directive(
					"gfaSortColumn",
					function($parse) {
						return {
							require : "^gfaSortGrid",
							link : function(scope, element, attrs, gfaSortGrid) {
								gfaSortGrid.register(scope);
								scope.direction = -1;
								element.on('click', function() {
									scope.$apply(function() {
										scope.direction = (scope.direction + 1) % 2;
									});
									gfaSortGrid.sort(scope);
								});
							},
							scope : {
								property : '@gfaSortColumn'
							},
							transclude : true,
							template : '<span ng-transclude></span><span ng-hide="direction==-1" ng-class="{\'glyphicon-arrow-up\':direction==0,\'glyphicon-arrow-down\':direction==1}" class="glyphicon"></span>',
							restrict : "A"
						};
					});
	angular.module('utils').directive("paging", function() {
		return {
			scope : {
				page : '=page',
				load : '=load'
			},
			templateUrl : utils.getUrl('resources/html/paging.html')
		};
	});
	angular.module('utils').directive("gfaAnimate", function() {
		return {
			link : function(scope, element, attrs, ngModel) {
				scope.animateClass = attrs.gfaAnimate;
				scope.animateDelay = attrs.gfaAnimateDelay;
				scope.animateDuration = attrs.gfaAnimateDuration;

				if (scope.animateDelay) {
					element.css({
						"-webkit-animation-delay" : scope.animateDelay,
						"-moz-animation-delay" : scope.animateDelay,
						"-o-animation-delay" : scope.animateDelay,
						"-ms-animation-delay" : scope.animateDelay,
						"animation-delay" : scope.animateDelay
					});
				}
				if (scope.animateDuration) {
					element.css({
						"-webkit-animation-duration" : scope.animateDuration,
						"-moz-animation-duration" : scope.animateDuration,
						"-o-animation-duration" : scope.animateDuration,
						"-ms-animation-duration" : scope.animateDuration,
						"animation-duration" : scope.animateDuration
					});
				}
				element.waypoint(function(direction) {
					if (direction == "down") {
						$(this).addClass("animated " + scope.animateClass);
					}
				}, {
					offset : '90%'
				}).waypoint(function(direction) {
					if (direction == "up") {
						$(this).removeClass("animated " + scope.animateClass);
					}
				}, {
					offset : $(window).height() + 1
				});
			},
			restrict : "A"
		};
	});
	angular.module('utils').directive("gfaAutoFocus", function() {
		return {
			link : function(scope, element, attrs) {
				element.focus();
			},
			restrict : "A"
		};
	});
	angular.module('utils').directive("gfaDate", function($parse) {
		return {
			require : "?ngModel",
			link : function(scope, element, attrs) {
				scope.inputId = attrs.id;
				scope.inputName = attrs.name;
				if (scope.inputId) {
					element.removeAttr('id');
				}
				if (scope.inputName) {
					element.removeAttr('name');
				}
				scope.placeholder = attrs.placeholder;
			},
			scope : {
				dt : '=ngModel',
				required : '@ngRequired'
			},
			controller : function($scope) {
				$scope.today = function() {
					$scope.dt = new Date();
				};
				$scope.clear = function() {
					$scope.dt = null;
				};
				$scope.disabled = function(date, mode) {
					return false;
				};
				$scope.open = function($event) {
					$event.preventDefault();
					$event.stopPropagation();
					$scope.opened = true;
				};
				$scope.dateOptions = {
					formatYear : 'yy',
					startingDay : 1
				};
			},
			templateUrl : utils.getUrl('/html/date.html'),
			restrict : "A"
		};
	});
	angular.module('utils').directive("gfaSameAs", function($parse) {
		return {
			require : 'ngModel',
			link : function(scope, elem, attr, ngModel) {
				var target = attr.gfaSameAs;
				var errorCode = attr.gfaSameAsErrorCode ? attr.gfaSameAsErrorCode : 'same';
				var getter = $parse(target);
				scope.$watch(target, function(value) {
					ngModel.$setValidity(errorCode, value == ngModel.$modelValue);
				});
				ngModel.$validators[errorCode] = function(modelValue, viewValue) {
					return getter(scope) == modelValue;
				};
			}
		};
	});
	angular.module('utils').directive("gfaError", function($parse) {
		return {
			require : 'ngModel',
			link : function(scope, elem, attr, ngModel) {
				function showError() {
					if (ngModel.$valid) {
						elem.qtip('destroy', true);
					} else if (ngModel.$invalid && ngModel.$dirty) {
						var errorMsg = '';
						for ( var i in ngModel.$error) {
							if (ngModel.$error[i]) {
								errorMsg = utils.getMsg('web.' + i);
								if (i != "required") {
									break;
								}
							}
						}
						elem.qtip({
							style : {
								classes : 'qtip-red'
							},
							position : {
								my : 'top left',
								at : 'bottom left'
							},
							overwrite : true,
							show : {
								ready : true
							},
							content : errorMsg
						});
					}
				}
				scope.$watchGroup([function() {
					return ngModel.$valid;
				}, function() {
					return ngModel.$viewValue;
				}], showError);
			}
		};
	});
	angular
			.module('utils')
			.directive(
					"gfaInputClear",
					function() {
						return {
							require : 'ngModel',
							link : function(scope, elem, attr, ngModel) {
								return;
								$(
										'<a tabindex="-1" class="glyphicon glyphicon-remove form-control-feedback gfaInputClear" href="javascript:;"></a>')
										.insertAfter(elem).click(function() {
											scope.$apply(function() {
												ngModel.$setViewValue('');
												ngModel.$render();
											});
										});
								$(function() {
									elem.closest('.form-group').addClass('has-feedback');
								});
							}
						};
					});
})();
//Filter
(function() {
	'use strict';
	angular.module('utils').filter("url", function() {
		return function(value) {
			return utils.getUrl(value);
		};
	});
	angular.module('utils').filter("msg", function() {
		var msgFilter = function(value) {
			return utils.getMsg.apply(utils, arguments);
		};
		msgFilter.$stateful = true;
		return msgFilter;
	});
	angular.module('utils').filter("gfaHighlight", function() {
		return function(value, key) {
			if (!key || !value) {
				return value;
			}
			return value.replace(new RegExp(key, 'gi'), '<mark>$&</mark>');
		};
	});
	angular.module('utils').filter("gfaDollar", function(currencyFilter) {
		return function(value) {
			return currencyFilter(value, '$');
		};
	});
	angular.module('utils').filter("gfaNumber", function(numberFilter) {
		return function(value) {
			return numberFilter(value, 2);
		};
	});
	angular.module('utils').filter("gfaPercent", function(numberFilter) {
		return function(value) {
			if (value) {
				return numberFilter(value, 2) + '%';
			} else {
				return value;
			}
		};
	});
	angular.module('utils').filter("gfaTimeDiff", function() {
		return function(value) {
			var days = parseInt(value / 24);
			var hours = value % 24;
			var result = '';
			if (days != 0) {
				result += days + utils.getMsg('common.day');
			}
			if (hours != 0) {
				result += hours + utils.getMsg('common.hour');
			}
			if (result == '') {
				return 0;
			}
			return result;
		};
	});
})();
//Provider
(function() {
	'use strict';
	angular.module('utils').provider('confirm', function() {
		return {
			$get : function($modal) {
				return {
					open : function(title, message, ok, cancel) {
						var modalInstance = $modal.open({
							templateUrl : utils.getUrl('/resources/html/confirm.html'),
							controller : 'ConfirmCtrl',
							size : 400,
							resolve : {
								title : function() {
									return title;
								},
								message : function() {
									return message;
								}
							}
						});
						modalInstance.result.then(function() {
							if (ok) {
								ok();
							}
						}, function() {
							if (cancel) {
								cancel();
							}
						});
						return modalInstance;
					}
				};
			}
		};
	}).controller('ConfirmCtrl', function($scope, $modalInstance, title, message) {
		$scope.title = title;
		$scope.message = message;
		$scope.ok = function() {
			$modalInstance.close();
		};
		$scope.cancel = function() {
			$modalInstance.dismiss();
		};
	});
	// Group
	function GroupManager(itemsNoPerGroup) {
		this.itemsNoPerGroup = itemsNoPerGroup;
		this.groups = [];
	}
	GroupManager.prototype.add = function(items) {
		if (!angular.isArray(items)) {
			items = [items];
		}
		if (this.groups.length != 0) {
			var currentGroup = this.groups[this.groups.length - 1];
			while (currentGroup.length < this.itemsNoPerGroup && items.length != 0) {
				currentGroup.push(items.shift());
			}
		}
		if (items.length != 0) {
			var groups = utils.group(items, this.itemsNoPerGroup);
			for (var i = 0; i < groups.length; i++) {
				this.groups.push(groups[i]);
			}
		}
		return this;
	};
	GroupManager.prototype.push = GroupManager.prototype.add;
	GroupManager.prototype.getGroups = function() {
		return this.groups;
	};
	GroupManager.prototype.clear = function() {
		this.groups = [];
		return this;
	};
	angular.module('utils').provider('group', function() {
		return {
			$get : function() {
				return {
					create : function(itemsNoPerGroup) {
						return new GroupManager(itemsNoPerGroup);
					}
				};
			}
		};
	});
	angular.module('utils').provider('$infinityPaging', function() {
		var DEFAULT_MAX = 30;
		var DEFAULT_NO = 1;
		return {
			$get : function($http) {
				// Infinity Paging
				function InfinityPagingResource(config) {
					config = config || {};
					this.callBacks = {};
					this.url = config.url;
					this.max = config.max || DEFAULT_MAX;
					this.params = config.params || {};
					this.no = DEFAULT_NO;
					this.loading = false;
					this.hasMore = true;
				}
				InfinityPagingResource.prototype.more = function(reset) {
					if (!this.hasMore) {
						return;
					}
					this.loading = true;
					var me = this;
					me.fire('beforeLoad');
					var params = {
						max : this.max,
						no : this.no
					};
					angular.extend(params, this.params);
					$http.get(this.url, {
						params : params
					}).success(function(data) {
						if (reset) {
							me.fire('init');
						}
						me.loading = false;
						me.fire('load', data.contentList || []);
						me.no++;
						if (data.totalPages >= me.no) {
							me.hasMore = true;
						} else {
							me.hasMore = false;
						}
						me.fire('afterLoad');
					}).error(function(data) {
						me.fire('error', data);
						me.loading = false;
						me.fire('afterLoad');
					});
				};
				InfinityPagingResource.prototype.refresh = function(params) {
					var me = this;
					for ( var i in params) {
						if (params[i] === undefined) {
							delete params[i];
						}
					}
					angular.extend(this.params, params);
					this.no = DEFAULT_NO;
					this.loading = false;
					this.hasMore = true;
					this.fire('init');
					this.more(true);
					/*
					 * function callBack() { if (me.hasMore &&
					 * me.container &&
					 * (me.container.innerHeight() ==
					 * me.container .get()[0].scrollHeight)) {
					 * me.more(); } else { me.un('afterLoad',
					 * callBack); } } me.on('afterLoad',
					 * callBack);
					 */
				};
				InfinityPagingResource.prototype.setContainer = function(container) {
					this.container = container;
				};
				InfinityPagingResource.prototype.on = function(name, callBack) {
					if (!this.callBacks[name]) {
						this.callBacks[name] = $.Callbacks();
					}
					this.callBacks[name].add(callBack);
				};
				InfinityPagingResource.prototype.un = function(name, callBack) {
					if (!this.callBacks[name]) {
						return;
					}
					this.callBacks[name].remove(callBack);
				};
				InfinityPagingResource.prototype.fire = function(name, data) {
					if (!this.callBacks[name]) {
						return;
					}
					this.callBacks[name].fire(data);
				};

				return {
					create : function(config) {
						return new InfinityPagingResource(config);
					},
					createWin : function(config) {
						var resource = new InfinityPagingResource(config);
						resource.setContainer($(window));
						utils.onScrollToBottom('infinityScroll', function() {
							resource.more();
						});
						return resource;
					}
				};
			}
		};
	});
	angular.module('utils').factory('logger', [function() {
		var logIt;
		toastr.options = {
			"closeButton" : true,
			"positionClass" : "toast-top-right",
			"timeOut" : "2000"
		};
		logIt = function(message, type, callback) {
			toastr.options.onHidden = callback;
			return toastr[type](message);
		};
		return {
			log : function(type, message, callback) {
				logIt(message, type, callback);
			},
			info : function(message, callback) {
				logIt(message, 'info', callback);
			},
			warning : function(message, callback) {
				logIt(message, 'warning', callback);
			},
			success : function(message, callback) {
				logIt(message, 'success', callback);
			},
			error : function(message, callback) {
				logIt(message, 'error', callback);
			}
		};
	}])
})();