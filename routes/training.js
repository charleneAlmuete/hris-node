var express		= require( 'express')
,	service		= require( '../models/training.js' )
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

router.post('/addTraining', function ( req, res )
{
	service.addNewTraining( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE EDUCATION
================================================*/

router.post('/updateTraining', function ( req, res )
{
	service.updateTraining( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE EDUCATION
================================================*/

router.get('/getAllTraining', function ( req, res )
{
	service.selectAllTraining( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;