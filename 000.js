var app= angular.module("HelloApp",['ngRoute'])

app.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'index.html',
            controller: 'HomeController1'
          }).
          when('/:singer', {
            template: '<h1>{{name}}</h1>',
            controller: 'HomeController2'
          }).
          otherwise({
            redirectTo: '/'
          });
      });

      app.controller('HomeController1', function ($scope){
        
          $scope.videos = 
		  [
		{"singer":"OneDirection","imglink":"http://www.mbmusic.it/wp-content/uploads/2012/02/One-Direction-up-all-night-cd-cover.jpg","price":"50"},
		{"singer":"OneDirection","imglink":"https://fanart.tv/fanart/music/0ab49580-c84f-44d4-875f-d83760ea2cfe/albumcover/call-and-response-the-remix-album-4e4363c396cd6.jpg","price":"45"},
		{"singer":"Taylor","imglink":"http://www.josepvinaixa.com/blog/wp-content/uploads/2013/07/Taylor-Swift-Red-Single-2012-1200x1200.png","price":"60"},
		{"singer":"Taylor","imglink":"http://images4.fanpop.com/image/photos/14800000/Fearless-FanMade-Album-Cover-fearless-taylor-swift-album-14878366-500-500.jpg","price":"40"},
		{"singer":"OneDirection","imglink":"http://www.mbmusic.it/wp-content/uploads/2012/02/One-Direction-up-all-night-cd-cover.jpg","price":"50"},
		{"singer":"OneDirection","imglink":"https://fanart.tv/fanart/music/0ab49580-c84f-44d4-875f-d83760ea2cfe/albumcover/call-and-response-the-remix-album-4e4363c396cd6.jpg","price":"45"},
		{"singer":"Taylor","imglink":"http://www.josepvinaixa.com/blog/wp-content/uploads/2013/07/Taylor-Swift-Red-Single-2012-1200x1200.png","price":"60"},
		{"singer":"Taylor","imglink":"http://images4.fanpop.com/image/photos/14800000/Fearless-FanMade-Album-Cover-fearless-taylor-swift-album-14878366-500-500.jpg","price":"40"}
];
        
      });

      app.controller('HomeController2', function ($scope,$routeParams){
        $scope.name = $routeParams.singer;
      });
		
		


      
