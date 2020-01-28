class tiempo {

    constructor(tiempo) {
        
        //this.tiempo_p = tiempo
        //this.set_cambiar_formato_hora()

        var tiempo = this.get_zona_horaria()

        this.segundos = tiempo.getSeconds()
        this.minutos  = tiempo.getMinutes()
        this.hora     = tiempo.getHours()

        this.div_hora     = document.querySelector('.hora'),
        this.div_minutos  = document.querySelector('.minutos'),
        this.div_segundos = document.querySelector('.segundos')
        this.div_tipo = document.querySelector('.tipo')


        if (this.hora === 0 || this.hora === 24 || ( this.hora < 12) ) {
            this.div_tipo.innerHTML = 'a.m.'
        }else{
            this.div_tipo.innerHTML = 'p.m.'
        }

            if (this.hora === 0 || this.hora === 24) {
                this.div_hora.innerHTML = '00'
            }else{
                if( this.hora < 10 ){
                    this.div_hora.innerHTML = '0'+this.hora
                }else{
                    this.div_hora.innerHTML = this.hora
                }
            }

                if( this.minutos < 10 ){
                    this.div_minutos.innerHTML  = ':0'+this.minutos
                }else{
                    this.div_minutos.innerHTML  = ':'+this.minutos
                }

                    if( this.segundos < 10 ){
                        this.div_segundos.innerHTML = ':0'+this.segundos
                    }else{
                        this.div_segundos.innerHTML = ':'+this.segundos
                    }

        //this.evento_boton()

    }

    get_zona_horaria = () => {
        var tiempo = new Date();
        return tiempo;
    }

    //geter
    get hora_actual(){
        this.get_segundos();
    }

    //Método
    get_segundos = () => {

        setInterval(() => {

            this.segundos++

            if( this.segundos < 60 ){

                if( this.segundos < 10 ){
                    this.div_segundos.innerHTML  = ':0'+this.segundos
                }else{
                    this.div_segundos.innerHTML  = ':'+this.segundos
                }

            }else{
                this.set_cambio_minutos()
                this.segundos = 0
                this.div_segundos.innerHTML = ':0'+this.segundos
            }
            
        }, 1000)

        //console.log( this.tiempo_p )

    }

    set_cambio_minutos = () => {
        
        var minuto_actuales = this.get_zona_horaria().getMinutes();

        if( minuto_actuales < 10 ){
            this.div_minutos.innerHTML = ':0'+minuto_actuales
        }else{
            this.div_minutos.innerHTML = ':'+minuto_actuales
        }

            //minuto_actuales = 60;

            if( minuto_actuales == 0 ){
                this.set_cambio_hora()
            }

                console.log( 1,  minuto_actuales)

    }

    set_cambio_hora = () => {

        var hora = this.get_zona_horaria().getHours()

        if( hora < 10 ){
            this.div_hora.innerHTML = '0'+hora
        }else{
            this.div_hora.innerHTML = hora
        }

            if (hora === 0 || hora === 24 || ( hora < 12) ) {
                this.div_tipo.innerHTML = 'a.m.'
            }else{
                this.div_tipo.innerHTML = 'p.m.'
            }

    }

    get formato_12_horas(){
        this.set_cambiar_formato_12_horas();
    }

    set_cambiar_formato_12_horas = () => {
        
        var hora_actual = this.get_zona_horaria().getHours()
        
        if (hora_actual > 12) {

            var hora_formato_12_horas = 12 - (parseInt(24 - hora_actual))

            if( hora_formato_12_horas < 12 ){
                this.div_hora.innerHTML = '0'+hora_formato_12_horas
            }else{
                this.div_hora.innerHTML = hora_formato_12_horas
            }

            //console.log(hora_formato_12_horas)
        }else {
            if (hora_actual === 0 || hora_actual === 24) {
                this.div_hora.innerHTML = 12
            }else{
                alert('El formato ya es de 12 horas')
            }
        }
        

    }

    get formato_24_horas(){
        this.set_cambiar_formato_24_horas();
    }

    set_cambiar_formato_24_horas = () => {

        var hora_actual = this.get_zona_horaria().getHours()

        if (hora_actual === 0 || hora_actual === 24) {
            this.div_hora.innerHTML = '00'
        }else{
            if( hora_actual > 12 ){
                this.div_hora.innerHTML = hora_actual
            }else{
                alert('Imposible convertir a formato de 24 horas.');
            }
        }
       
        //console.log( this.get_zona_horaria().getHours() )

    }
    

}

var btn_f_12_horas = document.querySelector('#f_12_horas'),
    btn_f_24_horas = document.querySelector('#f_24_horas')

const newLocal = 100;
var hora = new tiempo(newLocal);
hora.hora_actual


btn_f_12_horas.onclick = function(e){
    hora.formato_12_horas
}

    btn_f_24_horas.onclick = function(e){
        hora.formato_24_horas
    }