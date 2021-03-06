/* *************************************************************************************************** 
											ROUTING APP
****************************************************************************************************** */

var hris= angular.module( "hris", [ "ui.router", "ngDialog", "ui.bootstrap"])

	.config ([
		"$stateProvider",
		"$urlRouterProvider",

		function ( $stateProvider, $urlRouterProvider ) {
			$stateProvider


			.state( "main", {
				url: "/main",	
				templateUrl : "./public/javascripts/main/main.html" 
			})

			.state( "main.menuNav", {
				url: "/menu",
				templateUrl: "./public/javascripts/navbar/navbar.html"
			})

			.state( "main.search", {
				url: "/search",
				templateUrl : "./public/javascripts/employee/search/search.html",
				controller : "personalCtrl"
			})

			.state( "main.menuNav.personal", {
				url: "/personal",
				templateUrl : "./public/javascripts/employee/personal/personal.html",
				controller : "personalCtrl"
			})


			.state( "main.menuNav.basic_contact", {
				url: "/basic_contact",
				templateUrl : "./public/javascripts/employee/contact/basic_contact.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.emergency_contact", {
				url: "/emergency_contact",
				templateUrl : "./public/javascripts/employee/contact/emergency_contact.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.education", {
				url: "/education",
				templateUrl : "./public/javascripts/employee/education/education.html",
				controller : "personalCtrl"
			})

			.state( "main.menuNav.exam", {
				url: "/exam",
				templateUrl : "./public/javascripts/employee/exam/exam.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.awards", {
				url: "/awards",
				templateUrl : "./public/javascripts/employee/awards/awards.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.work", {
				url: "/work",
				templateUrl : "./public/javascripts/employee/work/work.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.skills", {
				url: "/skills",
				templateUrl : "./public/javascripts/employee/skills/skills.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.organization", {
				url: "/organization",
				templateUrl : "./public/javascripts/employee/organization/organization.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.training", {
				url: "/training",
				templateUrl : "./public/javascripts/employee/training/training.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.medical", {
				url: "/medical",
				templateUrl : "./public/javascripts/employee/medical/medical.html",
				controller : "personalCtrl" 
			})

			.state( "main.menuNav.service", {
				url: "/service",
				templateUrl : "./public/javascripts/employee/service/service.html",
				controller : "personalCtrl" 
			});


			/* **************************************************************************** 
										SERVICE HISTORY ROUTING
			******************************************************************************* */

			/*.state( "main.serviceHistory", {
				url: "/serviceHistory",
				templateUrl : "./public/javascripts/service_history/history.html" 
			})*/


			$urlRouterProvider.otherwise("/main/menu/personal");
			
		}	
	]);



	