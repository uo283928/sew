class GeoLocalizacion {
    constructor(){
        navigator.geolocation.getCurrentPosition(position => {
            this.latitude = position.coords.latitude;
            this.longitude= position.coords.longitude;
            document.write("<p>La posición del usuario es: " + this.latitude + ", " + this.longitude + "</p>");
          });
        
    }
   
}

class GeoManager{
    constructor(){}

    pedirPosicion() {
        var geo = new GeoLocalizacion();
    }

}

var gm = new GeoManager;
