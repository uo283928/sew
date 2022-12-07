class geoJSONProcessor {
    constructor( file ){
        this.file=file;
        this.cargarDatos(file);

    }

    cargarDatos(datos){
        var split = datos.split("[ [");
        var coordsStr = "[" + split[1].split("}");
        coordsStr = coordsStr.substring(0, coordsStr.length-10);
        coordsStr = coordsStr.split("], ");
        
        for (let index = 0; index < coordsStr.length; index++) {
            var text = coordsStr[index];
            if( index!=coordsStr.length -1 ) {
                text += "]";
                
            }
            document.write("<p>" + text + "</p>");

        }
    }
}
class geoJSONManager {
    constructor(){}

    loadFile(files) {
        var archivo = document.getElementsByName("archivoTexto")[0].files[0];
        var archivo = files[0];
        var contenido = document.getElementsByName("contenidoArchivo")[0];
        var texto;
        console.log(archivo)
        contenido.innerText="Contenido del archivo de texto:"
        
        var lector = new FileReader();
        lector.onload = function (evento) {
            //El evento "onload" se lleva a cabo cada vez que se completa con éxito una operación de lectura
            //La propiedad "result" es donde se almacena el contenido del archivo
            //Esta propiedad solamente es válida cuando se termina la operación de lectura
            texto = lector.result;
            new geoJSONProcessor(texto)
            
        }      
        lector.readAsText(archivo);
    }
    todosDatos = [];
    cargarTodosDatos(files) {
        this.loadFile(files);
    }
}
var manager = new geoJSONManager();