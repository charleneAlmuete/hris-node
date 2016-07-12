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
                                           DISPLAY LIST OF SKILLS
    ===========================================================================================================*/

    "selectAllSkill" 	: function selectAllSkill ( callback )
    {
    	var sql = "SELECT * FROM skills";
    	pool.query( sql, function ( err, results )
    	{
    		callback ( results );
    	});
    },

    /*========================================================================================================
                                               SAVE SKILLS
    ===========================================================================================================*/

    "addNewSkill"		: function addNewSkill ( callback, param )
    {
    	var sql = "INSERT INTO skills SET ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results.insertId );
    	});
    },

    /*========================================================================================================
                                         	   UPDATE SKILLS
    ===========================================================================================================*/

    "updateSkill" 	: function updateSkill ( callback, param )
    {
    	var sql = "UPDATE skills SET employee_id = ?, type = ?, name = ?, level = ? \
    				 WHERE id = ?";
    	pool.query ( sql, function ( err, results )
    	{
    		if ( err ) throw err;
    		callback ( results );
    	});
    }
};