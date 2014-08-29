var model = {
	user : "Jun Kim",
	items: [ { action: "Buy Flowers", done: false },
						{ action: "Get Shoes", done: false },
						{ action: "Collect Tickets", done: true },
						{ action: "Call James", done: false } ]
};

angular.module('AngularRails')
	.controller('HomeCtrl', function ($scope) {
		$scope.things = ['Angular', 'Rails 4.1.5', 'Working', 'Together!!'];
		$scope.todo = model;
	});
