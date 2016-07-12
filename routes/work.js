var express		= require( 'express')
,	service		= require( '../models/work.js' )
,	router		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next)
{
	res.render('index', { title : 'Express'});
});*/

/*==============================================
				ADD WORK
================================================*/

router.post('/addWork', function ( req, res )
{
	service.addNewWork( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE WORK
================================================*/

router.post('/updateWork', function ( req, res )
{
	service.updateWork( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE WORK
================================================*/

router.get('/getAllWork', function ( req, res )
{
	service.selectAllWork( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;