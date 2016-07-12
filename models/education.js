var mysql 	= require( 'mysql' )
,	pool	= mysql.createPool(
{
	connectionLimit	: 10,
	host			: 'localhost',
	user			: 'root',
	password		: '',
	database		: 'hris'	
});

pool.getConnection( function ( err, connection )
{
	if ( err ) throw err;
	console.log( "connected" );
});

module.exports = {
	/*========================================================================================================
                                           DISPLAY LIST OF EDUCATION
    ===========================================================================================================*/

    "selectAllEducation" 	: function selectAllEducation ( callback )
    {
    	var sql = "SELECT * FROM educations";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE EDUCATION
    ===========================================================================================================*/

    "addNewEducation"		: function addNewEducation ( callback, param )
    {
    	var sql = "INSERT INTO educations SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE EDUCATION
    ===========================================================================================================*/

    "updateEducation" 	: function updateEducation ( callback, param )
    {
    	var sql = "UPDATE educations SET employee_id = ?, levelType = ?, course = ?, school = ?, yearGrad = ? \
    				 WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};