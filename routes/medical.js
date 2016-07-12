var express		= require( 'express')
,	service		= require( '../models/medical.js' )
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

router.post('/addMedical', function ( req, res )
{
	service.addNewMedical( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE EDUCATION
================================================*/

router.post('/updateMedical', function ( req, res )
{
	service.updateMedical( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE EDUCATION
================================================*/

router.get('/getAllMedical', function ( req, res )
{
	service.selectAllMedical( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;