var mysql   = require ( 'mysql' )
,   pool    = mysql.createPool(
{
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'hris'
});

pool.getConnection( function ( err, connection )
{
    if ( err ) throw err;
    console.log( "connected" );
});


module.exports = {

    /*========================================================================================================
                                            DISPLAY LIST OF EMPLOYEES
    ===========================================================================================================*/

    "selectAllEmployee" : function selectAllEmployee ( callback )
    {
        var sql = "SELECT * FROM employees";
        pool.query( sql, function ( err, results )
        {
            callback( results );
        });
    },

    /*========================================================================================================
                                                SAVE EMPLOYEES
    ===========================================================================================================*/

    "addNewEmployee"    : function addNewEmployee ( callback, param )
    {
        var sql     = "INSERT INTO employees SET ?";
        pool.query( sql , param, function ( err, results )
        {
            if (err) throw err;
            callback( results.insert );
        });
    },

    /*========================================================================================================
                                            UPDATE PERSONAL INFO
    ===========================================================================================================*/

    "updateEmployee"    : function updateEmployee ( callback, param )
    {
        var sql = "UPDATE employees SET fName = ?, lName = ?,placeBirth = ?, dateBirth = ?, gender = ?, \
                    civilStatus = ?, citizenship = ?, religion = ?,language = ?, height = ?, weight = ?, \
                    bloodType = ?, hair = ?, complexion = ?, image= ? WHERE id = ?";
        pool.query( sql, [ param.id ], function ( err, results )
        {
            if ( err ) throw err;
            callback( results );
        });
    },

    /*========================================================================================================
                                            UPDATE BASIC CONTACT INFO
    ===========================================================================================================*/

    "updateBasicContact"    : function updateBasicContact ( callback, param )
    {
        var sql = "UPDATE employees SET resAdd = ?, resCity = ?, resTel = ?, resMobile1 = ?, resMobile2 = ?, \
                    resEmail = ?, perAdd = ?, perCity = ?, perTel = ?, perMobile1 = ?, perMobile1 = ?, \
                    perEmail = ?, proAdd = ?, proCity = ?, proTel = ?, proMobile1 = ?, proMobile2 = ?, \
                    proEmail = ? WHERE id= ?";
        pool.query( sql, [ param.id ], function( err, results )
        {
            if ( err ) throw err;
            callback( results );
        });
    },

    /*========================================================================================================
                                            UPDATE EMERGENCY CONTACT INFO
    ===========================================================================================================*/

    "updateEmergencyContact"    : function updateEmergencyContact ( callback, param )
    {
        var sql = "UPDATE employees SET resAdd = ?, resCity = ?, resTel = ?, resMobile1 = ?, resMobile2 = ?, \
                    resEmail = ?, perAdd = ?, perCity = ?, perTel = ?, perMobile1 = ?, perMobile1 = ?, \
                    perEmail = ?, proAdd = ?, proCity = ?, proTel = ?, proMobile1 = ?, proMobile2 = ?, \
                    proEmail = ? WHERE id= ?";
        pool.query( sql, [ param.id ], function( err, results )
        {
            if ( err ) throw err;
            callback( results );
        });
    }

};