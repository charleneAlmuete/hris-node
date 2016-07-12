var express		= require( 'express')
,	service		= require( '../models/organization.js' )
,	router		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next)
{
	res.render('index', { title : 'Express'});
});*/

/*==============================================
				ADD ORGANIZATION
================================================*/

router.post('/addOrganization', function ( req, res )
{
	service.addNewOrganization( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE ORGANIZATION
================================================*/

router.post('/updateOrganization', function ( req, res )
{
	service.updateOrganization( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE ORGANIZATION
================================================*/

router.get('/getAllOrganization', function ( req, res )
{
	service.selectAllOrganization( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;