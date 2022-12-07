class GeoLocalizacion {
    constructor(){
        navigator.geolocation.getCurrentPosition(position => {
            this.latitude = position.coords.latitude;
            this.longitude= position.coords.longitude;
            document.write("<p>La posición del usuario es: " + this.latitude + ", " + this.longitude + "</p>");
        }, (error=>{
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    this.mensaje = "El usuario no permite la petición de geolocalización"
                    break;
                case error.POSITION_UNAVAILABLE:
                    this.mensaje = "Información de geolocalización no disponible"
                    break;
                case error.TIMEOUT:
                    this.mensaje = "La petición de geolocalización ha caducado"
                    break;
                case error.UNKNOWN_ERROR:
                    this.mensaje = "Se ha producido un error desconocido"
                    break;
                }
                
                document.write("<p>" + this.mensaje + "</p>");
          }));
        
    }
   
}

class GeoManager{
    constructor(){}

    pedirPosicion() {
        var geo = new GeoLocalizacion();
    }

}

var gm = new GeoManager;
