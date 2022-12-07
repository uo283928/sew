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
        
        nombre.innerText = "Nombre del archivo: " + archivo.name;
        tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
        tipo.innerText = "Tipo del archivo: " + archivo.type;
        ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;
       
      }
}

class FullScreen{
  constructor(){}
  changeStatus(){
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

class OfflineManager{
  constructor(){
    window.addEventListener('offline', (event) => {
      console.log("The network connection has been lost.");
    });
  }
}

var fs = new FullScreen();
var pa = new PropiedadesArchivos();
var offlineEvent = new OfflineManager();