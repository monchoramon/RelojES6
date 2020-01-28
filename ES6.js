
const datos = () => {

    const apellidos = {
        'firstName': 'Ramón'
    }

    return apellidos

}

//datos();

//console.log( Object.assign( {}, datos(), nombres_obj ) );
//console.log( Object.values( Object.assign( {}, datos(), nombres_obj ) ) );

const nombres_obj = {
    'lastName':'Martínez Cruz',
    'firstName': 'Juan'
}

const nombres_ar = [
    'Ramón',
    'José',
    'Pablo',
    'Maria'
]

const numer_ar = [
    19
]

const elementos_arr = () =>{
    numer_ar.map((numero) => {

        //var aux = numero;

        /*while( numero/2 >= 1 ){
            numero = numero/2;
            console.log( aux+') '+numero );
        }*/

            var raiz = 0, pivote = 1;

            while( pivote <= numero ){

                if( (pivote * pivote) == numero ){
                    raiz = pivote;
                    console.log( 'Del '+numero+' su raiz cuadrada es = '+raiz );
                }

                //console.log(pivote);

                pivote++;

            }


    }); 
}

//elementos_arr();
//console.log( numer_ar );

