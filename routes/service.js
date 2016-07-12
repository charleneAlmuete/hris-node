var express		= require( 'express')
,	service		= require( '../models/service.js' )
,	router		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next)
{
	res.render('index', { title : 'Express'});
});*/

/*==============================================
				ADD EDUCATION
================================================*/

router.post('/addService', function ( req, res )
{
	service.addNewService( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE EDUCATION
================================================*/

router.post('/updateService', function ( req, res )
{
	service.updateService( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE EDUCATION
================================================*/

router.get('/getAllService', function ( req, res )
{
	service.selectAllService( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;