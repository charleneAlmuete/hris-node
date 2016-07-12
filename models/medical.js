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

    "selectAllMedical" 	: function selectAllMedical ( callback )
    {
    	var sql = "SELECT * FROM medicals";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE EDUCATION
    ===========================================================================================================*/

    "addNewMedical"		: function addNewMedical ( callback, param )
    {
    	var sql = "INSERT INTO medicals SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE EDUCATION
    ===========================================================================================================*/

    "updateMedical" 	: function updateMedical ( callback, param )
    {
    	var sql = "UPDATE medicals SET employee_id = ?, condition = ?, started = ?, physician = ? \
    				 WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};