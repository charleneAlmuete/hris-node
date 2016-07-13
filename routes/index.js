var express 	 = require('express')
, 	employee	 = require('../models/employee.js')
,	awards		 = require( '../models/awards.js' )
,	education	 = require( '../models/education.js' )
, 	exam		 = require( '../models/exam.js' )
,	medical		 = require( '../models/medical.js' )
,	organization = require( '../models/organization.js' )
,	service		 = require( '../models/service.js' )
,	skills		 = require( '../models/skills.js' )
,	training	 = require( '../models/training.js' )
,	work		 = require( '../models/work.js' )
,	router 		 = express.Router();

/*==============================================
				GET HOMEPAGE
================================================*/

/*router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});*/

						/*========================================================================================================
						                                       		PERSONAL INFORMATION
						===========================================================================================================*/

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

						/*========================================================================================================
						                                      AWARDS AND ACHIEVEMENTS
						===========================================================================================================*/

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
	awards.updateAward( function ( result )
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

					/*========================================================================================================
					                                      EDUCATIONAL BACKGROUND
					===========================================================================================================*/

/*==============================================
				ADD EDUCATION
================================================*/

router.post('/addEducation', function ( req, res )
{
	education.addNewEducation( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE EDUCATION
================================================*/

router.post('/updateEducation', function ( req, res )
{
	education.updateEducation( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE EDUCATION
================================================*/

router.get('/getAllEducation', function ( req, res )
{
	education.selectAllEducation( function ( result )
	{
		res.json( result );
	});
});

					/*========================================================================================================
					                                      LICENSURE AND EXAMINATION
					===========================================================================================================*/

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

					/*========================================================================================================
					                                      MEDICAL INFORMATION
					===========================================================================================================*/

/*==============================================
				ADD MEDICAL
================================================*/

router.post('/addMedical', function ( req, res )
{
	medical.addNewMedical( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE MEDICAL
================================================*/

router.post('/updateMedical', function ( req, res )
{
	medical.updateMedical( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE MEDICAL
================================================*/

router.get('/getAllMedical', function ( req, res )
{
	medical.selectAllMedical( function ( result )
	{
		res.json( result );
	});
});

					/*========================================================================================================
					                                     		 ORGANIZATION
					===========================================================================================================*/

/*==============================================
				ADD ORGANIZATION
================================================*/

router.post('/addOrganization', function ( req, res )
{
	organization.addNewOrganization( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE ORGANIZATION
================================================*/

router.post('/updateOrganization', function ( req, res )
{
	organization.updateOrganization( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE ORGANIZATION
================================================*/

router.get('/getAllOrganization', function ( req, res )
{
	organization.selectAllOrganization( function ( result )
	{
		res.json( result );
	});
});

					/*========================================================================================================
					                                     		 SERVICE
					===========================================================================================================*/

/*==============================================
				ADD SERVICE
================================================*/

router.post('/addService', function ( req, res )
{
	service.addNewService( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE SERVICE
================================================*/

router.post('/updateService', function ( req, res )
{
	service.updateService( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE SERVICE
================================================*/

router.get('/getAllService', function ( req, res )
{
	service.selectAllService( function ( result )
	{
		res.json( result );
	});
});

					/*========================================================================================================
					                                     		SKILLS
					===========================================================================================================*/

/*==============================================
				ADD SKILLS
================================================*/

router.post('/addSkill', function ( req, res )
{
	skills.addNewSkill( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE SKILLS
================================================*/

router.post('/updateSkill', function ( req, res )
{
	skills.updateSkill( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE SKILLS
================================================*/

router.get('/getAllSkill', function ( req, res )
{
	skills.selectAllSkill( function ( result )
	{
		res.json( result );
	});
});

					/*========================================================================================================
					                                     	TRAINING AND SEMINARS
					===========================================================================================================*/

/*==============================================
				ADD TRAINING
================================================*/

router.post('/addTraining', function ( req, res )
{
	training.addNewTraining( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE TRAINING
================================================*/

router.post('/updateTraining', function ( req, res )
{
	training.updateTraining( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE TRAINING
================================================*/

router.get('/getAllTraining', function ( req, res )
{
	training.selectAllTraining( function ( result )
	{
		res.json( result );
	});
});

					/*========================================================================================================
					                                     		WORK EXPERIENCES
					===========================================================================================================*/

/*==============================================
				ADD WORK
================================================*/

router.post('/addWork', function ( req, res )
{
	work.addNewWork( function ( result ) 
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				UPDATE WORK
================================================*/

router.post('/updateWork', function ( req, res )
{
	work.updateWork( function ( result )
	{
		res.json( result );
	}, req.body );
});

/*==============================================
				RETRIEVE WORK
================================================*/

router.get('/getAllWork', function ( req, res )
{
	work.selectAllWork( function ( result )
	{
		res.json( result );
	});
});

module.exports = router;	
