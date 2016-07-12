var express 	= require('express')
, 	employee	= require('../models/employee.js')
,	router 		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});*/

/*==============================================
				ADD EMPLOYEE
================================================*/

router.post('/addEmployee', function ( req, res )
{
	employee.addNewEmployee( function ( result )
	{
        res.json( result ); // mag return cya ug latest ID na gigamit sa pag register sa user.
    }, req.body ); //req.body -> imu gipasa na data sa ani na URL
});

/*==============================================
				RETRIEVE EMPLOYEE
================================================*/

router.get( '/getAllEmployee', function ( req, res ) 
{
	employee.selectAllEmployee( function ( result )
	{
		res.json( result );
	})
});

/*==============================================
				UPDATE EMPLOYEE
================================================*/

router.post('/updateEmployee', function ( req, res )
{
	employee.updateEmployee( function ( result )
	{
        res.json( result );
    }, req.body ); 
});

module.exports = router;	
