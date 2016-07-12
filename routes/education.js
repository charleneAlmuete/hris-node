var express		= require( 'express')
,	service		= require( '../models/education.js' )
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

router.post('/addEducation', function ( req, res )
{
	service.addNewEducation( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE EDUCATION
================================================*/

router.post('/updateEducation', function ( req, res )
{
	service.updateEducation( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE EDUCATION
================================================*/

router.get('/getAllEducation', function ( req, res )
{
	service.selectAllEducation( function ( result )
	{
		res.json( result );
	});
});

module.experts = router;