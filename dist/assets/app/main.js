"use strict";var app=angular.module("descontador",["core.routes","ui.bootstrap","ui.utils.masks","pathgather.popeye","ngAnimate","ngCookies"]),socket={},API={HOST:"http://api.descontador.com.br/",KEY:"348caba53c1234487714035965ad49fb",VERSION:"v1",FORMAT:"json"},GSTATIC={HOST:"https://maps.googleapis.com/maps/api/staticmap?",KEY:"AIzaSyCM0KLxQhBdC92YGTY0E8wp3GlpyXCtpSc",ZOOM:"14",SIZE:"360x320",TYPE:"roadmap"};!function(){function fetchData(){var initInjector=angular.injector(["ng"]);initInjector.get("$http");return bootstrapApplication()}function bootstrapApplication(){angular.element(document).ready(function(){angular.bootstrap(document,["descontador"])})}fetchData()}(),app.config(["$httpProvider",function($httpProvider){$httpProvider.defaults.useXDomain=!0}]),app.run(["$rootScope","$location",function($rootScope,$location){$rootScope.path=$location.path(),$rootScope._=_,$rootScope.$on("$routeChangeStart",function(){$rootScope.path=$location.path()})}]),window.app.Session={},app.controller("footer.controller",["$scope","$rootScope","$location","$routeParams","$route",function($scope,$rootScope,$location,$routeParams,$route){console.log("Fotter")}]),app.controller("forgot.controller",["$scope","$location","$routeParams","$route","$timeout","$filter","$window","$http","Popeye",function($scope,$location,$routeParams,$route,$timeout,$filter,$window,$http,Popeye){console.log("Forgot Password");angular.element(".forgot");$scope.forgot={close:function(){Popeye.closeCurrentModal()}}}]),app.controller("header.controller",["$scope","$rootScope","$location","$window","$routeParams","$route","$filter","$httpParamSerializer","auth","Popeye",function($scope,$rootScope,$location,$window,$routeParams,$route,$filter,$httpParamSerializer,auth,Popeye){console.log("Header"),$scope.login={open:function(){this.modal()},modal:function(){Popeye.openModal({templateUrl:"views/login/login.html",controller:"login.controller",modalClass:"login-modal",resolve:{target:function(){return!1}}})}},$scope.logout={die:function(){auth.logout()&&$window.location.reload()}},$scope.register={open:function(){this.modal()},modal:function(){Popeye.openModal({templateUrl:"views/register/register.html",controller:"register.controller",modalClass:"register-modal"})}},$scope.forgot={open:function(){this.modal()},modal:function(){Popeye.openModal({templateUrl:"views/forgot/forgot.html",controller:"forgot.controller",modalClass:"forgot-modal"})}},$scope.search={fields:{q:null,place:null},submit:function(){$location.path("/search").search($httpParamSerializer(this.fields))}}}]),app.controller("home.controller",["$scope","$location","$routeParams","$route","$timeout","$filter","$window","$http","$httpParamSerializer",function($scope,$location,$routeParams,$route,$timeout,$filter,$window,$http,$httpParamSerializer){console.log("Home");angular.element("#home")}]),app.controller("login.controller",["$scope","$location","$routeParams","$route","$timeout","$filter","$window","$http","auth","Popeye","target",function($scope,$location,$routeParams,$route,$timeout,$filter,$window,$http,auth,Popeye,target){console.log("Login");angular.element(".login");$scope.login={auth:function(){var user={user:"Leonardo Moreira",email:"eu@leonardomoreira.com.br",picture:"https://graph.facebook.com/1636057229/picture?width=64&amp;height=64",session:{token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjczMSwiaXNzIjoiaHR0cDpcL1wvYXBpLndlYXJlc3BvcnRzLmNvbS5iclwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDYxNzE2MjM5LCJleHAiOjE0NjE3MTk4MzksIm5iZiI6MTQ2MTcxNjIzOSwianRpIjoiNDBhZWQ0MDI5MTRhNDMzYWY4MGM3YWFjMGMwNzdiMjQifQ.7la5D9LzAnvCeIHYmZc-5hFMpMSd85VlEJdKhLqLqB0"}};auth.set(user)&&(target?$window.location.href=target:$window.location.reload())},close:function(){Popeye.closeCurrentModal()}}}]),app.controller("register.controller",["$scope","$location","$routeParams","$route","$timeout","$filter","$window","$http","Popeye",function($scope,$location,$routeParams,$route,$timeout,$filter,$window,$http,Popeye){console.log("Register");angular.element(".register");$scope.register={close:function(){Popeye.closeCurrentModal()}}}]),angular.module("core.routes",["ngRoute"]).config(["$routeProvider","$compileProvider","$locationProvider",function($routeProvider,$compileProvider,$locationProvider){$locationProvider.html5Mode(!0),$routeProvider.when("/",{templateUrl:"views/home/home.html",controller:"home.controller"}).otherwise({redirectTo:"/"})}]),app.directive("footerView",function(){return{controller:"footer.controller",restrict:"AE",replace:!0,templateUrl:"views/footer/footer.html"}}),app.directive("headerView",["auth",function(auth){var isLogged=function(){return auth.check()?"views/header/header.logged.html":"views/header/header.html"};return{controller:"header.controller",restrict:"AE",replace:!0,templateUrl:isLogged()}}]),app.factory("auth",function($http,$cookies,$location,Popeye){var service="auth",factory={};return factory.open=function($path){$location.path("/"),Popeye.openModal({templateUrl:"views/login/login.html",controller:"login.controller",modalClass:"login-modal",resolve:{target:function(){return $path}}})},factory.data=function(){return factory.cookie()},factory.set=function(data){return!_.isEmpty(data.session)&&($cookies.put("_session.descontador.com.br",data.session.token),!!factory.check())},factory.get=function(id){var req={url:API.HOST+service+"/session/"+API.FORMAT,method:"GET",params:{api_key:API.KEY,id:id}};return $http(req).then(function(response){200==response.status&&factory.set(response.data)}),factory.data()},factory.update=function(){},factory.check=function(){return!!factory.cookie()},factory.cookie=function(){return $cookies.get("_session.descontador.com.br")},factory.delete=function(){return $cookies.remove("_session.descontador.com.br")},factory.logout=function(){return!!_.isUndefined(factory.delete())},factory});