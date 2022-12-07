class PrecioOro {
    constructor(  ){
        this.url = "https://commodities-api.com/api/" + this.endpoint + "?access_key=" + this.apiKey + "&base=" + this.baseCurrency + "&symbols=" + this.symbol;
            
    }
    
    apiKey="vbul8mp659xop1w6f5t1n2gdaf9d4814vdxvs5w2ph1w2nwsyh3mxqkjivgg";
    endpoint="latest"
    baseCurrency="EUR";
    symbol="XAU";
    ok="Todo correcto"
    error="No se pudo obtener archivo .JSON"

    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method:"GET",
            success: function(datos){
                var gramosPorOnza = 28.3495;
                var precioEuros = datos.data.rates.XAU * gramosPorOnza;
                document.write("<p>El precio del oro acualmente es: " + precioEuros + "€/g </p>")
                
            },
            error: function() {

            }
        });
    }
}

var tm = new PrecioOro();