var express		= require( 'express')
,	awards		= require( '../models/awards.js' )
, 	router		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next)
{
	res.render('index', { title : 'Express'});
});*/

/*==============================================
				ADD AWARDS
================================================*/

router.post('/addAward', function ( req, res )
{
	awards.addNewAward( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE AWARDS
================================================*/

router.post('/updateAward', function ( req, res )
{
	awards.updatAward( function ( result )
	{
		res.json( result );
	}, req.body);
});

/*==============================================
				RETRIEVE AWARDS
================================================*/

router.get('/getAllAward', function ( req, res )
{
	awards.selectAllAward( function ( result )
	{
		res.json( result );
	}, req.body);
});

module.exports = router;