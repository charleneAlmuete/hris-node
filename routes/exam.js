var express		= require( 'express' )
, 	exam		= require( '../models/exam.js' )
, 	router		= express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next)
{
	res.render('index', { title : 'Express'});
});*/

/*==============================================
					ADD EXAM
================================================*/

router.post('/addExam', function ( req, res )
{
	exam.addNewExam( function ( result )
	{
		res.json( result );
	}, req.body);
});

/*==============================================
				UPDATE EXAM
================================================*/

router.post('/updateExam', function ( req, res )
{
	exam.updateExam( function ( result)
	{
		res.json( result );
	}, req.body);
});

/*==============================================
				RETRIEVE EXAM
================================================*/

router.get('getAllExam', function ( req, res)
{
	exam.selectAllExam( function ( result ){
		res.json( result );
	} );
});

module.exports= router;
