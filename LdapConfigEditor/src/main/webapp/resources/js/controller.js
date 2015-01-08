(function() {
	'use strict';
	app.controller('SiteCtrl', function($scope) {
	});
	app
			.controller(
					'HomeCtrl',
					function($scope, $timeout, keys) {
						$scope.config = {
							_type : 'object',
							markets : {
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
									}]
						}
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
							dragDelay : 0,
							dragDistance : 0,
							lockX : false,
							lockY : false,
							boundTo : '',
							spacing : 20,
							coverage : 50,
							cancelKey : 'esc',
							copyKey : 'shift',
							selectKey : 'ctrl',
							enableExpandOnHover : true,
							expandOnHover : 500,
						};

						$scope.keys = keys;

						$scope.list = buildTree($scope.config, $scope.data);

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
									nodeData.items.push({
										title : '{..}',
										_config : nodeData._config._item,
										items : buildTree(nodeData._config._item)
									});
									break;
								case 'array' :
									nodeData.items.push({
										title : '[..]',
										_config : nodeData._config._item,
										items : buildTree(nodeData._config._item)
									});
									break;
								default :
									nodeData.items.push({
										title : '[..]',
										_config : nodeData._config._item,
										items : buildTree(nodeData._config._item)[0]
									});
									break;
							}
							nodeData.items[nodeData.items.length - 1].canBeDeleted = true;
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