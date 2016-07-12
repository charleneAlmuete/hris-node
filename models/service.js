var mysql	= require( 'mysql' )
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

    "selectAllService" 	: function selectAllService ( callback )
    {
    	var sql = "SELECT * FROM services";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE EDUCATION
    ===========================================================================================================*/

    "addNewService"		: function addNewService ( callback, param )
    {
    	var sql = "INSERT INTO services SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE EDUCATION
    ===========================================================================================================*/

    "updateService" 	: function updateService ( callback, param )
    {
    	var sql = "UPDATE services SET employee_id = ?, levelType = ?, course = ?, school = ?, yearGrad = ? \
    				 WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};