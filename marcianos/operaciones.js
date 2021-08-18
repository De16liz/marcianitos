var sentido = 10; 
var t_x = 400;
var tanque; //almacena el objeto de la parte visual
var bala_x = 0;//20210818
var bala_y = 380;//20210818
var g_puntaje = 0;
var g_velocidad = 1;
var g_contador1 = 0;
var g_marca = 20;
/**
 * carga inicialmente el programa.
 */
window.onload = function()
{
    
    tanque = document.getElementById( "tk" );
    tanque.style.left = t_x;
    setInterval( function(){ mover_particulas(); }, 50); //ejecucion autonoma.
}  

/**
 * se encarga de mover todo
 */
function mover_particulas()
{
    g_contador1 ++;

    if( g_contador1 > g_marca )
    {
        mover_marcinitos();
        mover_bala();
        comprobacion();

        g_contador1 = 0;
    }
    
    console.log( g_contador1 );
}

/**
 * mover las particulas bala.
 */
function mover_bala( )
{
    
  if( bala_y > 0 ) bala_y -= 20;
  document.getElementById( "bl" ).style.left = bala_x;
  document.getElementById( "bl" ).style.top = bala_y;
    
}
/**
 * funcion para mover los marcianitos
 */
function mover_marcinitos()
{
    var i = 1;
    var marcianito = 0;
    var avance_y = 0;


    for( i = 1; i < arreglo1.length; i ++) //ciclo decisor.
    {
        //esta es la decisión de si se devuelve en los extremos. Rebaño.
        if( arreglo1[ i ] < 20 || arreglo1[ i ]  > 700 )
        {
            //console.log(  sentido , i);
            avance_y = 10; // aumentamos avance en Y o verticalmente.
            sentido *= -1; //cambiamos el sentido del avance.
            break; // Detenemos el ciclo, no me interesa seguir avanzando si alguien tocó el borde.
        }
    }

    
    for( i = 1; i < arreglo1.length; i ++ ) // con este ciclo recorremos el total de marcianitos..
    {
        arreglo2[ i ] += avance_y; //Bajamos un paso al tocar los extremos. Antes era avance en 10.
        arreglo1[ i ] += sentido; // mueve los marcianitos de un lado a otro.
       
        //Tomamos del document los objetos como tal. Div con texto.
        marcianito = document.getElementById( "mm" + i );
        //console.log( arreglo1[ i ] );
        marcianito.style.left = arreglo1[ i ]; //asignamos las variables a los objetos graficos.
        marcianito.style.top = arreglo2[ i ];

        if( arreglo2[ i ]  > 380 / 2 ) g_marca = 10;
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

        case 0: // el disparo del usuario.

            if( bala_y <= 0) // validamos el disparo en curso.
            {
                bala_y = 380; // devolvemos bala.
                bala_x = t_x;// tomamos la posicion del tanque
            }
            
            break;

        case 1:

            t_x += 10;

            break;

    }

    tanque.style.left = t_x;
}


/**
 * comprobar colisiones.
 */
function comprobacion()
{

    let i = 1;

    for( i = 1; i <= arreglo1.length; i ++ )//coliciones balas marcianitos.
    {
        if( bala_x >= arreglo1[ i ]  && bala_x <= arreglo1[ i ] + 20 )//ancho bala
        {
            if( bala_y >= arreglo2[ i ]  && bala_y <= arreglo2[ i ] + 10 )//largo bala
            {
                document.getElementById( "mm" + i ).innerHTML = " ";
                console.log( "acertaste" );
                g_puntaje ++;
                document.getElementById( "puntaje" ).value = g_puntaje;
            }
       
        }
        
    }
}

