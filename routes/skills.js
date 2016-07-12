var express		= require( 'express')
,	service		= require( '../models/skills.js' )
,	router		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next)
{
	res.render('index', { title : 'Express'});
});*/

/*==============================================
				ADD SKILLS
================================================*/

router.post('/addSkill', function ( req, res )
{
	service.addNewSkill( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE SKILLS
================================================*/

router.post('/updateSkill', function ( req, res )
{
	service.updateSkill( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE SKILLS
================================================*/

router.get('/getAllSkill', function ( req, res )
{
	service.selectAllSkill( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;