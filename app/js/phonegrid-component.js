angular.module('phonelist').
	component('phoneGrid',{
		templateUrl:'partials/phonegrid.html',
		controller:['$http','$scope', function listPhone($http,$scope){
				var self = this;
				$scope.order= 'age';
				$http.get('phones/phones.json').then( function(response){
					self.phones=response.data;
					$scope.name=self.phones.name;
					$scope.dat=response.data;
				})
				$scope.$watch('phones', function(){}, true);
						
		}]
	});