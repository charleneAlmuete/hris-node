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
                                           DISPLAY LIST OF ORGANIZATION
    ===========================================================================================================*/

    "selectAllOrganization" 	: function selectAllOrganization ( callback )
    {
    	var sql = "SELECT * FROM organizations";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE ORGANIZATION
    ===========================================================================================================*/

    "addNewOrganization"		: function addNewOrganization ( callback, param )
    {
    	var sql = "INSERT INTO organizations SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE ORGANIZATION
    ===========================================================================================================*/

    "updateOrganization" 	: function updateOrganization ( callback, param )
    {
    	var sql = "UPDATE organizations SET employee_id = ?, institution = ?, title = ?, started = ?, ended = ? \
    				 WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};