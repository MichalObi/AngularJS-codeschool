    
(function(){
	
	var app = angular.module('store-products', []); // the same name of variable is OK

    app.directive('productReview', function() {
    	return {
    		restrict: 'E',
    		templateUrl:'templates/product-review.html',
    		controller:function(){
				this.review = {};
				this.addReview = function (product) {
					product.reviews.push(this.review);
					this.review = {}; //clear form
					};
				},
				controllerAs:'reviewCtrl' 
    	};
    });	

	app.directive('productTitle', function(){
		return {
			restrict: 'E', // type of directive - E for Element. Can be also A for attribute
			templateUrl: 'templates/product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E', 
			templateUrl: 'templates/product-panels.html',
			controller:function(){

			this.tab = 1; //ng-init= "tab = 1"

			this.selectTab = function(setTab) {
				this.tab = setTab;
			};

			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};

			},
			controllerAs: 'panel'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl:'templates/product-gallery.html',
			controller:function(){
		    	this.current = 0;
		    	this.setCurrent = function(imageNumber){
		      	this.current = imageNumber || 0;
		    	};
  			},
  			controllerAs:'gallery'
		};
	});

	app.directive('productSpecs', function() {
    	return {
      		restrict:"A",
      		templateUrl: "templates/product-specs.html"
    };

  });
})();