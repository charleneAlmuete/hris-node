var mysql 	= require( 'mysql' )
,	pool	= mysql.createPool(
{
	connectionLimit	: 10,
	host			: 'localhost',
	user			: 'root',
	password		: '',
	database		: 'hris'	
})

pool.getConnection( function ( err, connection )
{
	if ( err ) throw err;
	console.log( "connected" );
});

module.exports = {
	/*========================================================================================================
                                        DISPLAY LIST OF WORK EXPERIENCE
    ===========================================================================================================*/

    "selectAllWork" 	: function selectAllWork ( callback )
    {
    	var sql = "SELECT * FROM works";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                            SAVE WORK EXPERIENCE
    ===========================================================================================================*/

    "addNewWork"		: function selectAllWork ( callback, param )
    {
    	var sql = "INSERT INTO works SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE WORK EXPERIENCE
    ===========================================================================================================*/

    "updateWork" 	: function selectAllWork ( callback, param )
    {
    	var sql = "UPDATE works SET employee_id = ?, position = ?, company = ?, durFrom = ?, durTo = ?, \
    				 status = ?, salary = ?, reason = ? WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};