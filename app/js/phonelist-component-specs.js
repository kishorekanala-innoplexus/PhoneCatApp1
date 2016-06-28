angular.module('phonelist').component('phoneDetail'
	,{
		templateUrl:'partials/phonedetail.html',
		controller:['$http','$scope','$routeParams',function detailphone($http,$scope,$routeParams){
			var det = this;
			det.setImage = function setImage(imageUrl) {
			      det.mainImageUrl = imageUrl;
			    };
			det.detail = $routeParams.phoneId;
			$http.get('phones/'+det.detail+'.json').then(function(response){
				det.phonedetail=response.data;
				det.setImage(det.phonedetail.images[0]);
			})
		}]
	});