angular.module('phonelist').
	component('phoneList',{
		templateUrl:'partials/phonelist.html',
		controller:['$http','$scope', function listPhone($http,$scope){
				var self = this;
				$scope.order= 'age';
				$http.get('phones/phones.json').then( function(response){
					self.phones=response.data;
					$scope.name=self.phones.name;
				})
				$scope.$watch('phones', function(){}, true);
						}]
	});