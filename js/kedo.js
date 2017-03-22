
(function(){
	var kdApp=angular.module("kedoApp",['ui.router']);
	
	kdApp.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.when("","/common/home");
		$stateProvider
			.state("common",{
				url:"/common",
				templateUrl:"html/common.html",
				controller: 'kedo'
			})
			.state("common.home",{
				url:"/home",
				templateUrl:"html/home.html",
				data:{
				}
			})
			.state("common.square",{
				url:"/square",
				templateUrl:"html/square.html"
			})
			.state("common.mall",{
				url:"/mall",
				templateUrl:"html/mall.html"
			})
			.state("common.rank",{
				url:"/rank",
				templateUrl:"html/rank.html"
			})
	})

	kdApp.controller('kedo',kedo);

	function kedo($scope){
		$('#hdNavL li').click(function(){
			$('#hdNavL li').removeClass("active");
			$(this).addClass('active');
		})
	}


})()