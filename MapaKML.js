class kmlProcessor {
    constructor( file ){
        this.file=file;
        this.cargarDatos(file);

    }

    cargarDatos(datos){
        var split = datos.split("\n");

        var coords = []
        for (let index = 0; index < split.length; index++) {
            if( split[index][0] != "<" ) {
                document.write("<p>" + split[index] + "</p>");
                coords.push(split[index].trim());
            }
            
        }
        
    }
}
class kmlManager {
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
            new kmlProcessor(texto)
            
        }      
        lector.readAsText(archivo);
    }
    todosDatos = [];
    cargarTodosDatos(files) {
        this.loadFile(files);
    }
}
var manager = new kmlManager();