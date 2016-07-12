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
                                           DISPLAY LIST OF TRAINING
    ===========================================================================================================*/

    "selectAllTraining" 	: function selectAllTraining ( callback )
    {
    	var sql = "SELECT * FROM trainings";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE TRAINING
    ===========================================================================================================*/

    "addNewTraining"		: function addNewTraining ( callback, param )
    {
    	var sql = "INSERT INTO trainings SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE TRAINING
    ===========================================================================================================*/

    "updateTraining" 	: function updateTraining ( callback, param )
    {
    	var sql = "UPDATE trainings SET employee_id = ?, name = ?, started = ?, ended = ?, institute = ?, \
    				 venue = ?, speaker = ?, remarks = ? WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};