class PropiedadesArchivos {
    constructor(  ){
                
    }
    
    calcularTamañoArchivos(files) {
        var archivo = document.getElementsByName("archivoTexto")[0].files[0];
        var archivo = files[0];
        var nombre = document.getElementsByName("nombreArchivo")[0];
        var tamaño = document.getElementsByName("tamañoArchivo")[0];
        var tipo = document.getElementsByName("tipoArchivo")[0];
        var ultima = document.getElementsByName("ultimaModificacion")[0];
        
        document.write("<p>" + "Nombre del archivo: " + archivo.name + "</p>")
        document.write("<p>" + "Tamaño del archivo: " + archivo.size + " bytes" + "</p>")
        document.write("<p>" + "Tipo del archivo: " + archivo.type + "</p>")
        document.write("<p>" + "Fecha de la última modificación: " + archivo.lastModifiedDate + "</p>")
        
      }
}

var pa = new PropiedadesArchivos();