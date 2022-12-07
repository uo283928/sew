class Tiempo {
    constructor( ciudad ){
        this.ciudad=ciudad;
        this.url="http://api.openweathermap.org/data/2.5/weather?q=" +
            ciudad + "," + this.codigoPais + this.unidades + this.idioma +
            "&APPID=" + this.apiKey;
        this.cargarDatos(this.ciudad);

    }
    ciudad="ASD"
    apiKey="884dd013161c68a95884d082e53c93a5";
    codigoPais="ES";
    unidades="&units=metric";
    idioma="&lang=es";
    ok="Todo correcto"
    error="No se pudo obtener archivo .JSON"

    cargarDatos(ciudad){
        $.ajax({
            dataType: "json",
            url: this.url,
            method:"GET",
            success: function(datos){
                var stringDatos = "<ul><li>Ciudad: " + datos.name +"</li>";
                    stringDatos +=  '<picture><img src=" http://openweathermap.org/img/wn/' + datos.weather[0].icon+ 
                    '@2x.png" alt=' + datos.weather[0].description + ' /> </picture>';
                    stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                    stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                    stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                $('p[name="datos' + ciudad + '"]').html(stringDatos);
                return stringDatos;
                
            },
            error: function() {
                $('p[name="errorP"]').html(this.error);

            }
        });
    }
}
class TiempoManager {
    constructor(){}
    todosDatos = [];
    cargarTodosDatos() {
        var sitios = ["Gijón", "Oviedo", "Pola de Lena", "Mieres", "Llanes"];
        
        for (let index = 0; index < sitios.length; index++) {
            new Tiempo( sitios[index] );
        } 
    }
}
var tm = new TiempoManager();