(function() {
	'use strict';
	app.controller('SiteCtrl', function($scope) {
	});
	app.controller('HomeCtrl', function($scope, $timeout, keys, $modal, $http) {
		var markets = {
			asx : {
				name : 'Australian Stock Exchange',
				img : '//AU04OFFFS01/SMARTS-QA-Support/Automation-Test-Data/LDAP-Config/markets/asx.png'
			}
		};
		function getMarket(code) {
			if (code in markets) {
				return markets[code];
			}
		}
		$scope.config = {
			_type : 'object',
			markets : {
				_type : 'array',
				_item : {
					_type : 'object',
					code : {
						_type : 'string',
						_required : true,
						_change : function(item) {
							var market = getMarket(item.value);
							if (!market) {
								return;
							}
							var parent = item._parent;
							for (var i = 0; i < parent.items.length; i++) {
								if (parent.items[i].title == 'name') {
									parent.items[i].value = market.name;
								} else if (parent.items[i].title == 'img') {
									parent.items[i].value = market.img;
								}
							}
						}
					},
					name : {
						_type : 'string'
					},
					img : {
						_type : 'string'
					},
					email : {
						_type : 'email'
					},
					config : {
						_type : 'text'
					},
					skipAddIfExist : {
						_type : 'boolean'
					},
					skipEditIfExist : {
						_type : 'boolean'
					},
					removeAfterTest : {
						_type : 'boolean'
					}
				}
			},
			metamarkets : {
				_type : 'array',
				_item : {
					_type : 'object',
					code : {
						_type : 'string'
					},
					name : {
						_type : 'string'
					},
					img : {
						_type : 'string'
					},
					email : {
						_type : 'email'
					},
					config : {
						_type : 'string'
					},
					skipAddIfExist : {
						_type : 'boolean'
					},
					skipEditIfExist : {
						_type : 'boolean'
					},
					removeAfterTest : {
						_type : 'boolean'
					}
				}
			},
			persons : {
				_type : 'array',
				_item : {
					_type : 'object',
					id : {
						_type : 'string'
					},
					surname : {
						_type : 'string'
					},
					fullName : {
						_type : 'string'
					},
					email : {
						_type : 'email'
					},
					phone : {
						_type : 'string'
					},
					mobile : {
						_type : 'boolean'
					},
					skipAddIfExist : {
						_type : 'boolean'
					},
					skipEditIfExist : {
						_type : 'boolean'
					},
					removeAfterTest : {
						_type : 'boolean'
					}
				}
			},
			managers : {
				_type : 'array',
				_item : {
					_type : 'object',
					id : {
						_type : 'string'
					},
					personId : {
						_type : 'string'
					},
					timezone : {
						_type : 'string'
					},
					language : {
						_type : 'string'
					},
					comments : {
						_type : 'string'
					},
					skipAddIfExist : {
						_type : 'boolean'
					},
					skipEditIfExist : {
						_type : 'boolean'
					},
					removeAfterTest : {
						_type : 'boolean'
					},
					permissions : {
						_type : 'array',
						_item : {
							_type : 'object',
							clientId : {
								_type : 'string'
							},
							marketCode : {
								_type : 'string'
							},
							role : {
								_type : 'string'
							}
						}
					}
				}
			},
			clients : {
				_type : 'array',
				_item : {
					_type : 'object',
					id : {
						_type : 'string'
					},
					name : {
						_type : 'string'
					},
					image : {
						_type : 'string'
					},
					url : {
						_type : 'string'
					},
					ip : {
						_type : 'string'
					},
					locale : {
						_type : 'string'
					},
					timeout : {
						_type : 'string'
					},
					password : {
						_type : 'string'
					},
					loginAttempts : {
						_type : 'string'
					},
					expiryDays : {
						_type : 'string'
					},
					config : {
						_type : 'string'
					},
					broadcastMsg : {
						_type : 'string'
					},
					upload : {
						_type : 'string'
					},
					skipAddIfExist : {
						_type : 'boolean'
					},
					skipEditIfExist : {
						_type : 'boolean'
					},
					removeAfterTest : {
						_type : 'boolean'
					},
					markets : {
						_type : 'array',
						_item : {
							_type : 'object',
							code : {
								_type : 'string'
							},
							dir : {
								_type : 'string'
							},
							limit : {
								_type : 'string'
							},
							newsPermission : {
								_type : 'boolean'
							},
							iconVisible : {
								_type : 'boolean'
							},
							userManageable : {
								_type : 'boolean'
							},
							config : {
								_type : 'string'
							},
							cutoff : {
								_type : 'string'
							},
							broadcastMsg : {
								_type : 'string'
							},
							skipAddIfExist : {
								_type : 'boolean'
							},
							skipEditIfExist : {
								_type : 'boolean'
							},
							removeAfterTest : {
								_type : 'boolean'
							},
							houses : {
								_type : 'array',
								_item : {
									_type : 'object',
									code : {
										_type : 'string'
									},
									accountTypeRules : {
										_type : 'string'
									},
									dataRestrict : {
										_type : 'string'
									},
									entityTags : {
										_type : 'string'
									},
									skipAddIfExist : {
										_type : 'boolean'
									},
									skipEditIfExist : {
										_type : 'boolean'
									},
									removeAfterTest : {
										_type : 'boolean'
									}
								}
							}
						}
					},
					metamarkets : {
						_type : 'array',
						_item : {
							_type : 'object',
							code : {
								_type : 'string'
							},
							dir : {
								_type : 'string'
							},
							limit : {
								_type : 'string'
							},
							crossmarketView : {
								_type : 'boolean'
							},
							derivativesView : {
								_type : 'boolean'
							},
							iconVisible : {
								_type : 'boolean'
							},
							userManageable : {
								_type : 'boolean'
							},
							config : {
								_type : 'string'
							},
							skipAddIfExist : {
								_type : 'boolean'
							},
							skipEditIfExist : {
								_type : 'boolean'
							},
							removeAfterTest : {
								_type : 'boolean'
							},
							submarkets : {
								_type : 'array',
								_item : {
									_type : 'string'
								}
							},
							metahouses : {
								_type : 'array',
								_item : {
									_type : 'object',
									code : {
										_type : 'string'
									},
									allIncluded : {
										_type : 'string'
									},
									dataRestrict : {
										_type : 'string'
									},
									securityRestrict : {
										_type : 'boolean'
									},
									skipAddIfExist : {
										_type : 'boolean'
									},
									skipEditIfExist : {
										_type : 'boolean'
									},
									removeAfterTest : {
										_type : 'boolean'
									},
									members : {
										_type : 'array',
										_item : {
											_type : 'object',
											marketCode : {
												_type : 'string'
											},
											houseCodes : {
												_type : 'array',
												_item : {
													_type : 'string'
												}
											}
										}
									}
								}
							}
						}
					},
					users : {
						_type : 'array',
						_item : {
							_type : 'object',
							id : {
								_type : 'string'
							},
							personId : {
								_type : 'string'
							},
							internal : {
								_type : 'string'
							},
							pwdCheck : {
								_type : 'string'
							},
							timezone : {
								_type : 'string'
							},
							language : {
								_type : 'string'
							},
							comments : {
								_type : 'string'
							},
							skipAddIfExist : {
								_type : 'boolean'
							},
							skipEditIfExist : {
								_type : 'boolean'
							},
							removeAfterTest : {
								_type : 'boolean'
							},
							permission : {
								_type : 'object',
								cmssUser : {
									_type : 'boolean'
								},
								cmssManager : {
									_type : 'boolean'
								},
								cmssUpload : {
									_type : 'boolean'
								},
								cmssUserList : {
									_type : 'boolean'
								},
								cmssUserManager : {
									_type : 'boolean'
								},
								cmssParameterManager : {
									_type : 'boolean'
								},
								cmssAnalytics : {
									_type : 'boolean'
								}
							},
							marketPermissions : {
								_type : 'array',
								_item : {
									_type : 'object',
									code : {
										_type : 'string'
									},
									marketData : {
										_type : 'string'
									},
									brokerData : {
										_type : 'string'
									},
									allAlerts : {
										_type : 'string'
									},
									alertMgmt : {
										_type : 'string'
									},
									dataQuality : {
										_type : 'string'
									},
									housePermission : {
										_type : 'array',
										_item : {
											_type : 'object',
											code : {
												_type : 'string'
											},
											watchList : {
												_type : 'boolean'
											},
											brokerData : {
												_type : 'boolean'
											},
											allAlerts : {
												_type : 'boolean'
											}
										}
									}
								}
							},
							metamarketPermissions : {
								_type : 'array',
								_item : {
									_type : 'object',
									code : {
										_type : 'string'
									},
									marketData : {
										_type : 'boolean'
									}
								}
							},
							uploadPermissions : {
								_type : 'array',
								_item : {
									_type : 'object',
									id : {
										_type : 'string'
									},
									allowed : {
										_type : 'boolean'
									}
								}
							}
						}
					}
				}
			}

		};
		$scope.enter = function() {
			var modalInstance = $modal.open({
				templateUrl : utils.getUrl('/resources/html/enterParams.html'),
				controller : function($scope, $modalInstance) {
					$scope.ok = function() {
						$http({
							method : 'POST',
							url : utils.getUrl('/prefill'),
							data : $.param({
								username : $scope.username,
								password : $scope.password
							}),
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded'
							}
						}).success(function(data) {
							$modalInstance.close(data);
						}).error(function(errors) {
							$scope.errors = errors;
						});
					};
					$scope.cancel = function() {
						$modalInstance.dismiss('cancel');
					};
				}
			});
			modalInstance.result.then(function(json) {
				$scope.list = buildTree($scope.config, json);
			}, function() {
			});
		};
		$scope.data = {};
		function buildTree(config, data) {
			var result = [];
			switch (config._type) {
				case 'object' :
					for ( var i in config) {
						if (angular.isString(i) && i.indexOf('_') == 0) {
							continue;
						}
						if (data && i in data) {
							switch (config[i]._type) {
								case 'object' :
									result.push({
										title : i,
										_config : config[i],
										items : buildTree(config[i], data[i])
									});
									break;
								case 'array' :
									result.push({
										title : i,
										canAdd : true,
										_config : config[i],
										items : buildTree(config[i], data[i])
									});
									break;
								default :
									result.push({
										title : i,
										value : data[i],
										_config : config[i],
									});
									break;
							}
						} else {
							switch (config[i]._type) {
								case 'object' :
									result.push({
										title : i,
										_config : config[i],
										items : buildTree(config[i])
									});
									break;
								case 'array' :
									result.push({
										title : i,
										canAdd : true,
										_config : config[i],
										items : []
									});
									break;
								default :
									result.push({
										title : i,
										_config : config[i]
									});
									break;
							}
						}
					}
					break;
				case 'array' :
					for ( var i in data) {
						var d = data[i];
						var temp = buildTree(config._item, d);
						switch (config._item._type) {
							case 'object' :
								result.push({
									title : '{..}',
									_config : config._item,
									items : temp
								});
								break;
							case 'array' :
								result.push({
									title : '[..]',
									_config : config._item,
									items : temp
								});
								break;
							default :
								result.push(temp[0]);
								break;
						}
						result[result.length - 1].canBeDeleted = true;
					}
					break;
				default :
					result.push({
						value : data,
						_config : config
					});
					break;
			}
			return result;
		}
		// Parameters
		$scope.parameters = {
			dragEnabled : false,
			emptyPlaceholderEnabled : false,
			maxDepth : 10,
			lockX : false,
			lockY : false,
			boundTo : '',
			spacing : 20,
			coverage : 50,
			cancelKey : 'esc',
			copyKey : 'shift',
			selectKey : 'ctrl',
			enableExpandOnHover : false,
			expandOnHover : 500,
		};

		$scope.keys = keys;

		$scope.list = buildTree($scope.config, $scope.data);

		function buildParent(node, parent) {
			node._parent = parent;
			if (node.items) {
				for ( var i in node.items) {
					buildParent(node.items[i], node);
				}
			}
		}
		for (var i = 0; i < $scope.list.length; i++) {
			buildParent($scope.list[i]);
		}

		$scope.callbacks = {};

		$scope.remove = function(scope) {
			scope.remove();
		};

		$scope.toggle = function(scope) {
			scope.toggle();
		};

		$scope.newSubItem = function(scope) {
			var nodeData = scope.$modelValue;
			switch (nodeData._config._item._type) {
				case 'object' :
					nodeData.items.unshift({
						title : '{..}',
						_config : nodeData._config._item,
						items : buildTree(nodeData._config._item)
					});
					break;
				case 'array' :
					nodeData.items.unshift({
						title : '[..]',
						_config : nodeData._config._item,
						items : buildTree(nodeData._config._item)
					});
					break;
				default :
					nodeData.items.unshift({
						_config : nodeData._config._item,
						value : ''
					});
					break;
			}
			nodeData.items[0].canBeDeleted = true;
			buildParent(nodeData.items[0], nodeData);
		};
		function toJson(node) {
			switch (node._config._type) {
				case 'object' :
					var result = {};
					for ( var i in node.items) {
						result[node.items[i].title] = toJson(node.items[i]);
					}
					return result;
				case 'array' :
					var result = [];
					for ( var i in node.items) {
						result.push(toJson(node.items[i]));
					}
					return result;
				case 'boolean' :
					if (node.value != '') {
						return node.value;
					}
					break;
				default :
					return node.value;
			}
		}
		$scope.getConfig = function() {
			var result = {};
			angular.forEach($scope.list, function(node) {
				result[node.title] = toJson(node);
			});
			return result;
		};
	});
})();