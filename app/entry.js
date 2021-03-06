'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('brewBuddy', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/signup', {
    template: require('./view/signup/signup.html'),
    controller: 'SignupController',
    controllerAs: 'signupCtrl'
  })
  .when('/signin', {
    template: require('./view/signin/signin.html'),
    controller: 'SigninController',
    controllerAs: 'signinCtrl'
  })
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .when('/user', {
    template: require('./view/user/user.html')
  })
  .when('/user/countryoforigin', {
    template: require('./view/country-of-origin/country-of-origin.html'),
    controller: 'CountryOfOriginController',
    controllerAs: 'countryOfOriginCtrl'
  })
  .when('/user/method', {
    template: require('./view/rec-brew-method/rec-brew-method.html'),
    controller: 'RecBrewMethodController',
    controllerAs: 'recBrewMethodCtrl'
  })
  .when('/user/brewguide', {
    template: require('./view/brew-method-guide/brew-method-guide.html'),
    controller: 'BrewMethodGuideController',
    controllerAs: 'brewGuideCtrl'
  })
  .when('/user/aroma', {
    template: require('./view/aroma/aroma.html'),
    controller: 'AromaController',
    controllerAs: 'aromaCtrl'
  })
  .when('/user/acidity', {
    template: require('./view/acidity/acidity.html'),
    controller: 'AcidityController',
    controllerAs: 'acidityCtrl'
  })
  .when('/user/flavor', {
    template: require('./view/flavor/flavor.html'),
    controller: 'FlavorPageController',
    controllerAs: 'flavPageCtrl'
  })
  .when('/user/experience', {
    template: require('./view/experience/experience.html'),
    controller: 'ExperienceController',
    controllerAs: 'expCtrl'
  })
  .when('/user/finish', {
    template: require('./view/finish/finish.html'),
    controller: 'FinishController',
    controllerAs: 'finishCtrl'
  })
  .when('/user/finishedbrew', {
    template: require('./view/finished-brew/finished-brew.html'),
    controller: 'FinishedBrewController',
    controllerAs: 'finishedBrewCtrl'
  })
  .when('/user/pastbrews', {
    template: require('./view/past-brews/past-brews.html'),
    controller: 'PastBrewsController',
    controllerAs: 'pastBrewsCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

// angular services
// angular components

require('./service/auth-service');
require('./service/origin-service');
require('./service/method-service');
require('./service/flavor-service');
require('./service/entry-service');
require('./service/app-flavor-service');
require('./service/user-selections-service');
require('./service/aroma-service');
require('./service/acidity-service');
require('./service/brew-method-gallery-service');

// angular controllers
require('./view/user');
require('./view/country-of-origin/country-of-origin-controller.js');
require('./view/finish/finish-controller.js');
require('./view/rec-brew-method/rec-brew-method-controller.js');
require('./view/brew-method-guide/brew-method-guide-controller');
require('./view/experience/experience-controller');
require('./view/past-brews/past-brews-controller');
require('./view/signup');
require('./view/signin');
require('./view/home');
require('./view/aroma');
require('./view/acidity');
require('./view/flavor');
require('./view/finished-brew/finished-brew.js');
require('./component/app-nav');
require('./component/app-flavor-el');
require('./component/app-brew-method-guide-gallery');
require('./component/finished-brew-el');
