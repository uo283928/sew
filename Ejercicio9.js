class Tiempo {
    constructor( ciudad ){
        this.ciudad=ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.ciudad + this.tipo + this.unidades + this.idioma + 
            "&APPID=" + this.apiKey;
        this.cargarDatos(this.ciudad);

    }
    tipo = "&mode=xml";
    ciudad="";
    apiKey="884dd013161c68a95884d082e53c93a5";
    codigoPais="ES";
    unidades="&units=metric";
    idioma="&lang=es";
    ok="Todo correcto"
    error="No se pudo obtener archivo .JSON"

    cargarDatos(ciudad){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method:"GET",
            success: function(datos){
                
                var ciudad = $('city',datos).attr("name");
                var longitud = $('coord',datos).attr("lon");
                var latitud = $('coord',datos).attr("lat");
                var pais = $('country',datos).text();
                var amanecer = $('sun',datos).attr("rise");
                var minutosZonaHoraria = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var oscurecer = $('sun',datos).attr("set");
                              
                
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var temperatura = $('temperature',datos).attr("value");
                var temperaturaMin = $('temperature',datos).attr("min");
                var temperaturaMax = $('temperature',datos).attr("max");
                var temperaturaUnit = $('temperature',datos).attr("unit");
                var humedad = $('humidity',datos).attr("value");
                var humedadUnit = $('humidity',datos).attr("unit");
                var presion = $('pressure',datos).attr("value");
                var presionUnit = $('pressure',datos).attr("unit");
                var velocidadViento = $('speed',datos).attr("value");
                var nombreViento = $('speed',datos).attr("name");
                var direccionViento = $('direction',datos).attr("value");
                var codigoViento = $('direction',datos).attr("code");
                var nombreDireccionViento = $('direction',datos).attr("name");
                var nubosidad = $('clouds',datos).attr("value");
                var nombreNubosidad = $('clouds',datos).attr("name");
                var visibilidad = $('visibility',datos).attr("value");
                var precipitacionValue = $('precipitation',datos).attr("value");
                var precipitacionMode = $('precipitation',datos).attr("mode");
                var descripcion = $('weather',datos).attr("value");
                var icon = $('weather',datos).attr("icon");
                var horaMedida = $('lastupdate',datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");

                var stringDatos = "<li>Ciudad: " + ciudad + "</li>";
                    stringDatos +=  '<picture><img src=" http://openweathermap.org/img/wn/' + icon + 
                        '@2x.png" alt=' + descripcion + ' /> </picture>';
                    stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                    stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                    stringDatos += "<li>País: " + pais + "</li>";
                    stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                    stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                    stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                    stringDatos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                    stringDatos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                    stringDatos += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                    stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                    stringDatos += "<li>Nombre del viento: " + nombreViento + "</li>";
                    stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                    stringDatos += "<li>Código del viento: " + codigoViento + "</li>";
                    stringDatos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                    stringDatos += "<li>Nubosidad: " + nubosidad + "</li>";
                    stringDatos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                    stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                    stringDatos += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                    stringDatos += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                    stringDatos += "<li>Descripción: " + descripcion + "</li>";
                    stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>"
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