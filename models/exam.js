var mysql	= require( 'mysql' )
,	pool	= mysql.createPool(
{
	connectionLimit		: 10,
	host				: 'localhost',
	user				: 'root',
	password			: '',
	database			: 'hris'
});

pool.getConnection ( function ( err, connection )
{
	if ( err ) throw err;
	console.log( "connected" );
});

module.exports = {

	/*========================================================================================================
                                    		DISPLAY LIST OF EXAMS
    ===========================================================================================================*/

    "selectAllExam"	: function selectAllExam ( callback )
    {
    	var sql = "SELECT * FROM exams";
    	pool.query ( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                            	SAVE EXAMS
    ===========================================================================================================*/

    "addNewExam"	: function addNewExam ( callback, param )
    {
    	var sql = "INSERT INTO exams SET ?";
    	pool.query (sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback( results);
    	});
    },

    /*========================================================================================================
                                         	 UPDATE EXAMS
    ===========================================================================================================*/

    "updateExam"	: function updateExam ( callback, param )
    {
    	var sql = "UPDATE exams SET employee_id = ?, name = ?, rating = ?, licenseNo = ?, image = ? WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};