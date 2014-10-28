(function(){
	var app = angular.module('gemStore', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

    app.directive('productReview', function() {
    	return {
    		restrict: 'E',
    		templateUrl:'product-review.html',
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
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E', 
			templateUrl: 'product-panels.html',
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
			templateUrl:'product-gallery.html',
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
      		templateUrl: "product-specs.html"
    };

  });

	var gems = [
		{
			name: 'Gem_1',
			price: 10.10,
			description: 'It good gem, lets buy it!',
			shine: 8,
			faces: 14,
			rarity: 7,
			color: '#CCC',
			canPurchase: true,
			soldOut:false,
			images: [],
			reviews: [
			{
				stars: 5,
				body: 'Its nice. I like it ! :)',
				author: 'nick@wp.pl'
			},
			{
				stars: 1,
				body: 'Its bad. I dont like it ! :(',
				author: 'dog@wp.pl'
			}

			]
		},

		{
			name: 'Gem_2',
			price: 90,
			description: 'It the best gem, lets buy it!',
			shine: 8,
			faces: 14,
			rarity: 7,
			color: '#CCC',
			canPurchase: true,
			soldOut:false,
			images: [
				
					'images/gem_2_thumb_1.jpg',
					'images/gem_2_thumb_2.jpg',
					'images/gem_2_thumb_3.jpg'
				
			],
			reviews: [
			{
				stars: 6,
				body: 'Its nice. I like it ! :)',
				author: 'kcin@wp.pl'
			},
			{
				stars: 2,
				body: 'Its bad. I dont like it ! :(',
				author: 'catg@wp.pl'
			}

			]
		},

		{
			name: 'Gem_3',
			price: 100,
			description: 'It beautifull gem, lets buy it!',
			shine: 8,
			faces: 14,
			rarity: 7,
			color: '#CCC',
			canPurchase: true,
			soldOut:false,
			images: [
				
					'images/gem_3_thumb_1.jpg',
					'images/gem_3_thumb_2.jpg',
					'images/gem_3_thumb_3.jpg'
				
		]
	}
	];
})();