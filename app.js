(function(){
	var app = angular.module('gemStore', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){

		this.tab = 1; //ng-init= "tab = 1"

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function (product) {
			product.reviews.push(this.review);
			this.review = {}; //clear form
		};
	});

	var gems = [
		{
			name: 'Gem_1',
			price: 10.10,
			description: 'It good gem, lets buy it!',
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