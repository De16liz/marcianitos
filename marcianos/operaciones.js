var sentido = 10;
var t_x = 400;
var tanque;

/*var marcianito;
var m_x = 100;
var m_y = 20;*/


/**
 * carga inicialmente el programa.
 */
window.onload = function()
{
    console.log("Hola.");

    /*marcianito = document.getElementById( "mm1" );
    marcianito.style.left = m_x;
    marcianito.style.top = m_y;*/

    tanque = document.getElementById( "tk" );
    tanque.style.left = t_x;
    setInterval( function(){ mover_particulas(); }, 1000);
    console.log( arreglo1 );
    console.log( arreglo2 );
}

/**
 * funcion para mover el tanque
 */
function mover_particulas()
{
    var i = 1;
    var marcianito = 0;
    
    for( i = 1; i <= 10; i ++ )
    {
        marcianito = document.getElementById( "mm" + i );
        console.log( arreglo1[ i ] );


        if( arreglo1[ i ] < 20 || arreglo1[ i ]  > 200 )
        {
            sentido *= -1;
            arreglo1[ i ]  += 10;
        } 

        arreglo1[ i ] += sentido;
        marcianito.style.left = arreglo1[ i ];
        marcianito.style.top = arreglo2[ i ];
    }
    
   
}


/**
 * funcion para mover el tanque
 * @param  número        Es el tipo de movimiento.
 */
function mover_defensor( des )
{
    //var tanque = document.getElementById( "tk");
    switch( des )
    {
        case -1:

            t_x -= 10;

            break;

        case 0:
            break;

        case 1:

            t_x += 10;

            break;

    }

    tanque.style.left = t_x;
}
