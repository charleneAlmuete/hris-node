var mysql 	= require( 'mysql' )
,	pool 	= mysql.createPool(
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
                                           DISPLAY LIST OF AWARDS
    ===========================================================================================================*/

    "selectAllAward" 	: function selectAllAward ( callback )
    {
    	var sql = "SELECT * FROM awards";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE AWARDS
    ===========================================================================================================*/

    "addNewAward"		: function addNewAward ( callback, param )
    {
    	var sql = "INSERT INTO awards SET ?";
    	pool.query ( sql, param, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE AWARDS
    ===========================================================================================================*/

    "updateAward" 	: function updateAward ( callback, param )
    {
    	var sql = "UPDATE awards SET employee_id = ?, name = ?, institution = ?, dateGiven = ? \
    				 WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};