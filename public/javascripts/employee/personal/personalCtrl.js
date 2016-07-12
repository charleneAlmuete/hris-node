hris
	.controller( "personalCtrl", [
			"$scope",
			"$http",
			"$state",	
			"$timeout",
			"ngDialog",
			
			function controller( $scope, $http, $state, $timeout, ngDialog ) 
			{
				$scope.employee = {};
				$scope.add = true;
				
				$scope.openDialog = function()
				{
					ngDialog.open({
						templateUrl: "./public/javascripts/employee/search/modal.html",
						closeByDocument: true,
						showClose: false,
						className: 'ngdialog-theme-plain custom-width',
					});
				};

				/*==============================================
								SEARCH EMPLOYEE
            	================================================*/
            		$http.get( '/getAllEmployee' )
            			.success( function ( response)
            			{
            				console.log( response )
            				$scope.employee = response;
            			});

            			$scope.pages= 25;

				/*==============================================
								ADD EMPLOYEE
            	================================================*/

	       		$scope.addEmployee = function ( data ) 
	       		{
	       		 	$http.post( '/addEmployee', data )
	       		 		.success( function ( response ) 
	       		 	{
	       		 		data.id = response;
	       		 		$scope.cancel = {};
	       			});
	       		}

	       		/*==============================================
								EDIT EMPLOYEE
            	================================================*/

            	$scope.edit = function ( data )
	            {
	                $scope.add = false;
	                $scope.employee.id = data.id;
	                $scope.employee.fName = data.fName;
	                $scope.employee.lName = data.lName;
	                $scope.employee.placeBirth = data.placeBirth;
	                $scope.employee.dateBirth = data.dateBirth;
	                $scope.employee.gender = data.gender;
	                $scope.employee.civilStatus = data.civilStatus;
	                $scope.employee.religion = data.religion;
	                $scope.employee.language = data.language;
	                $scope.employee.height = data.height;
	                $scope.employee.weight = data.weight;
	                $scope.employee.bloodType = data.bloodType;
	                $scope.employee.hair = data.hair;
	                $scope.employee.complexion = data.complexion;
	                $scope.employee.image = data.image;
	            }

	       		$scope.updateEmployee = function ( data ) 
	       		{
	       		 	$http.post( '/updateEmployee', data )
	       		 		.success( function ( response ) 
	       		 	{
                        $state.go( $state.current, {}, { reload: true });
	       		 		$scope.cancel = {};
	       			});
	       		}

	       		/*==============================================
								CANCEL BUTTON
            	================================================*/

           		 $scope.cancel = function ( )
           		 {
           		 	$scope.employee = {};
           		 	$scope.add = true
           		 }
			}
		])
