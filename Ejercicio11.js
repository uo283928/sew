class GeoLocalizacion {
    
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
        
    }
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la peticiÃ³n de geolocalizaciÃ³n";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la peticiÃ³n de geolocalizaciÃ³n"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "InformaciÃ³n de geolocalizaciÃ³n no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La peticiÃ³n de geolocalizaciÃ³n ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    
    }
    map;
    initialize() {
        var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng( 43.3661,  -5.8425 )
      };
      this.map = new google.maps.Map($("main"), mapOptions);
      return this.map;
      //google.maps.event.addDomListener(window, 'load', initialize);
      
    }

    seeMap() {
        console.log(google.maps.event.addDomListener(window, 'load', this.initialize()));
    }
   
   
}

var miMapa = new GeoLocalizacion;
