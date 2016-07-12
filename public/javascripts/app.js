/* *************************************************************************************************** 
											ROUTING APP
****************************************************************************************************** */

var hris= angular.module( "hris", [ "ui.router", "angularUtils.directives.dirPagination", "ngDialog", "ui.bootstrap"])

hris
	.config ([
		"$stateProvider",
		"$urlRouterProvider",

		function ( $stateProvider, $urlRouterProvider ) {
			$stateProvider

			/* **************************************************************************** 
											EMPOLOYEE ROUTING
			******************************************************************************* */

			.state( "main", {
				url: "/main",	
				templateUrl : "./public/javascripts/main/main.html" 
			})

			.state( "main.search", {
				url: "/search",
				templateUrl : "./public/javascripts/employee/search/search.html",
				controller : "personalCtrl"
			})

			.state( "main.personal", {
				url: "/personal",
				templateUrl : "./public/javascripts/employee/personal/personal.html",
				controller : "personalCtrl"
			})

			.state( "main.basic_contact", {
				url: "/basic_contact",
				templateUrl : "./public/javascripts/employee/contact/basic_contact.html",
				controller : "personalCtrl" 
			})

			.state( "main.emergency_contact", {
				url: "/emergency_contact",
				templateUrl : "./public/javascripts/employee/contact/emergency_contact.html",
				controller : "personalCtrl" 
			})

			.state( "main.education", {
				url: "/education",
				templateUrl : "./public/javascripts/employee/education/education.html",
				controller : "personalCtrl"
			})

			.state( "main.exam", {
				url: "/exam",
				templateUrl : "./public/javascripts/employee/exam/exam.html",
				controller : "personalCtrl" 
			})

			.state( "main.awards", {
				url: "/awards",
				templateUrl : "./public/javascripts/employee/awards/awards.html",
				controller : "personalCtrl" 
			})

			.state( "main.work", {
				url: "/work",
				templateUrl : "./public/javascripts/employee/work/work.html",
				controller : "personalCtrl" 
			})

			.state( "main.skills", {
				url: "/skills",
				templateUrl : "./public/javascripts/employee/skills/skills.html",
				controller : "personalCtrl" 
			})

			.state( "main.organization", {
				url: "/organization",
				templateUrl : "./public/javascripts/employee/organization/organization.html",
				controller : "personalCtrl" 
			})

			.state( "main.training", {
				url: "/training",
				templateUrl : "./public/javascripts/employee/training/training.html",
				controller : "personalCtrl" 
			})

			.state( "main.medical", {
				url: "/medical",
				templateUrl : "./public/javascripts/employee/medical/medical.html",
				controller : "personalCtrl" 
			})

			.state( "main.service", {
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


			$urlRouterProvider.otherwise("/main/personal");
			
		}	
	]);



	