class ObtenerInfo {
    constructor() {
        this.nombre = navigator.appName;
        this.idioma = navigator.language;
        this.version = navigator.appVersion;
        this.plataforma = navigator.platform;
        this.vendedor = navigator.vendor;
        this.agente = navigator.userAgent;
        this.javaActivo = navigator.javaEnabled();
    }
}

var info = new ObtenerInfo();