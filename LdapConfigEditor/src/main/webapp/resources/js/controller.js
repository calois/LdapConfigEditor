(function() {
	'use strict';
	app.controller('SiteCtrl', function($scope) {
	});
	app
			.controller(
					'HomeCtrl',
					function($scope, $timeout, keys) {
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
						$scope.data = {
							"markets" : [
									{
										"code" : "asx",
										"name" : "Australian Stock Exchange",
										"img" : "//AU04OFFFS01/SMARTS-QA-Support/Automation-Test-Data/LDAP-Config/markets/asx.png",
										"email" : "test@nasdaq.com",
										"config" : "core.market.securityFields=+CCU+CUSIP+GN+II+IR+IS+LEGS+LN+MD+MM+MU+NS+PC+PM+SG+SN+SP+TY+UI+UM+UN+UQ+SHC",
										"removeIfExisting" : "true",
										"removeAfterTest" : "true"
									},
									{
										"code" : "chixau",
										"name" : "Chi-X Australia",
										"img" : "//AU04OFFFS01/SMARTS-QA-Support/Automation-Test-Data/LDAP-Config/markets/chix_au.png",
										"email" : "test@nasdaq.com",
										"removeIfExisting" : "true",
										"removeAfterTest" : "true"
									}],
							"metamarkets" : [{
								"code" : "australia",
								"name" : "Crossmarket Australia",
								"img" : "//AU04OFFFS01/SMARTS-QA-Support/Automation-Test-Data/LDAP-Config/markets/xm_au.png",
								"alertsCode" : "australia",
								"config" : "core.metamarket.config=ldapservicedemo",
								"removeIfExisting" : "true",
								"removeAfterTest" : "true"
							}],
							"persons" : [{
								"id" : "test",
								"surname" : "Test",
								"fullName" : "Automation Test",
								"email" : "joy.chiu@nasdaq.com",
								"phone" : "02 0000 0000",
								"mobile" : "04 0000 0000"
							}],
							"managers" : [{
								"id" : "test",
								"personId" : "test",
								"timezone" : "Australia/Sydney",
								"language" : "Chinese",
								"comments" : "Only for Test - manager",
								"removeIfExisting" : "true",
								"removeAfterTest" : "true",
								"permissions" : [{
									"clientId" : "*",
									"marketCode" : "*",
									"role" : "userManager"
								}, {
									"clientId" : "*",
									"marketCode" : "*",
									"role" : "passwordResetter"
								}, {
									"clientId" : "*",
									"marketCode" : "*",
									"role" : "notifier"
								}]
							}],
							"clients" : [{
								"id" : "ldapservicedemo",
								"name" : "ldapservicedemo",
								"image" : "//AU04OFFFS01/SMARTS-QA-Support/Automation-Test-Data/LDAP-Config/brokers/nasdaq-omx_smarts.png",
								"url" : "https://ldapservicedemo.dev.smbc.nasdaqomx.com/cmss",
								"ip" : "127.0.0.1",
								"locale" : "English (energy)",
								"timeout" : "1000",
								"password" : "Password01",
								"loginAttempts" : "2",
								"expiryDays" : "90",
								"config" : "core.cache.perHouse=true\ncore.cache.daysToLeaveFree=-1",
								"broadcastMsg" : "LDAP Config Service Demo - ldapservicedemo",
								"upload" : "test_upload_01;\"DemoforExample\";.csv\ntest_upload_02;\"Demo for Example\";.csv\ntest_upload_03;\"Demo for Example\";.csv",
								"removeIfExisting" : "false",
								"removeAfterTest" : "true",
								"markets" : [{
									"code" : "asx",
									"dir" : "citigroupgm_asx",
									"limit" : "20",
									"newsPermission" : "true",
									"iconVisible" : "true",
									"userManageable" : "true",
									"config" : "client.market.config=test",
									"cutoff" : "18:00",
									"broadcastMsg" : "LDAP Config Service Demo - ASX",
									"houses" : [{
										"code" : "203",
										"accountTypeRules" : "Ctag=BTag\n.*=XYZ",
										"dataRestrict" : "20140101-",
										"entityTags" : "T,ZCHZBX,SDMA"
									}],
									"removeIfExisting" : "false",
									"removeAfterTest" : "true"
								}, {
									"code" : "chixau",
									"dir" : "citigroupgm_chixau",
									"newsPermission" : "true",
									"iconVisible" : "true",
									"userManageable" : "true",
									"houses" : [{
										"code" : "203"
									}]
								}],
								"metamarkets" : [{
									"code" : "australia",
									"dir" : "citigroupgm_australia",
									"limit" : "30",
									"crossmarketView" : "true",
									"derivativesView" : "true",
									"iconVisible" : "true",
									"userManageable" : "true",
									"config" : "client.metamarket.config=test",
									"removeIfExisting" : "false",
									"removeAfterTest" : "true",
									"submarkets" : ["asx", "chixau"],
									"metahouses" : [{
										"code" : "CITIGROUPGM",
										"allIncluded" : "true",
										"dataRestrict" : "20130101-",
										"securityRestrict" : "AAA",
										"removeIfExisting" : "false",
										"removeAfterTest" : "true",
										"members" : [{
											"marketCode" : "asx",
											"houseCodes" : ["203"]
										}, {
											"marketCode" : "chixau",
											"houseCodes" : ["203"]
										}]
									}]
								}],
								"users" : [{
									"id" : "test",
									"personId" : "test",
									"internal" : "false",
									"pwdCheck" : "true",
									"timezone" : "Asia/Shanghai",
									"language" : "Chinese (broker)",
									"comments" : "Only for test - client user",
									"removeIfExisting" : "true",
									"removeAfterTest" : "true",
									"permission" : {
										"cmssUser" : "true",
										"cmssManager" : "true",
										"cmssUpload" : "true",
										"cmssUserList" : "true",
										"cmssUserManager" : "true",
										"cmssParameterManager" : "true",
										"cmssAnalytics" : "true"
									},
									"marketPermissions" : [{
										"code" : "asx",
										"selectDefaults" : "true"
									}, {
										"code" : "chixau",
										"marketData" : "true",
										"brokerData" : "true",
										"allAlerts" : "true",
										"alertMgmt" : "true",
										"dataQuality" : "true",
										"housePermission" : [{
											"code" : "203",
											"watchList" : "true",
											"brokerData" : "true",
											"allAlerts" : "true"
										}]
									}],
									"metamarketPermissions" : [{
										"code" : "australia",
										"marketData" : "true"
									}],
									"uploadPermissions" : [{
										"id" : "test_upload_01",
										"allowed" : "true"
									}]
								}]
							}]
						};
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