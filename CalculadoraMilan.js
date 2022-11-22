class Calculadora {
    constructor() {}
    pantalla = "";
    number = "";
    first;
    second;
    operation = "";
    positionSecondNumber = 0;
    memoria = 0;

     uno () {
        this.pantalla = this.pantalla + "1";
        this.number = this.number + "1";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     dos () {
        this.pantalla = this.pantalla + "2";
        this.number = this.number + "2";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     tres () {
        this.pantalla = this.pantalla + "3";
        this.number = this.number + "3";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     cuatro () {
        this.pantalla = this.pantalla + "4";
        this.number = this.number + "4";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     cinco () {
        this.pantalla = this.pantalla + "5";
        this.number = this.number + "5";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     seis () {
        this.pantalla = this.pantalla + "6";
        this.number = this.number + "6";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     siete () {
        this.pantalla = this.pantalla + "7";
        this.number = this.number + "7";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     ocho () {
        this.pantalla = this.pantalla + "8";
        this.number = this.number + "8";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     nueve () {
        this.pantalla = this.pantalla + "9";
        this.number = this.number + "9";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     cero () {
        this.pantalla = this.pantalla + "0";
        this.number = this.number + "0";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     punto() {
        if (! this.number.includes(".")) {
            if (this.number == "") this.number = "0";
            this.pantalla = this.pantalla + ".";
            this.number = this.number + ".";
            document.querySelector('input[type="text"]').value = this.pantalla;
        }
    }

    borrar (res) {
        if ( res == Number(undefined) ||res == Number(NaN) || res == null ){
            this.pantalla = "";
        } else {
            this.pantalla = `${res}`;
        }
        this.number = res;
        this.operation = "";
        this.second = 0;
        this.first = Number (res);
        this.positionSecondNumber = 0;
        document.querySelector('input[type="text"]').value = res;
        this.memoria = 0;
    }

     suma () {
        this.first = Number(this.number);
        this.number = ""; this.operation = "+"; this.positionSecondNumber = this.pantalla.length;
        this.pantalla = this.pantalla + "+";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     resta () {
        this.first = Number(this.number);
        if( this.operation == "" ) {
            this.number = ""; this.operation = "-"; this.positionSecondNumber = this.pantalla.length;
        } else {
            console.log("First: " + this.first);
            this.number = "-";
            console.log("First: " + this.first);
            console.log("");
        }
        this.pantalla = this.pantalla + "-";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     multiplicacion () {
        this.first = Number(this.number);
        this.number = ""; this.operation = "*"; this.positionSecondNumber = this.pantalla.length;
        this.pantalla = this.pantalla + "*";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     division () {
        this.first = Number(this.number);
        this.number = ""; this.operation = "/"; this.positionSecondNumber = this.pantalla.length;
        this.pantalla = this.pantalla + "/";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     igual () {
        this.second = Number( this.pantalla.substring(this.positionSecondNumber + 1) );
        try {
            var result = eval (this.first +
            this.operation +
            this.second);
        } catch(err) {
            var result = "Error: " + err;
        }
        document.querySelector('input[type="text"]').value = result;
        this.pantalla = result;
        this.borrar(result);
    }



     mrc () {
        this.pantalla = this.pantalla + this.memoria;
        this.number = this.memoria; 

    }
     mMas () {
        this.memoria = Number( this.memoria + this.first );
    } 
     mMenos () {
        this.memoria += Number( this.igual() );
    }
    
     porcentaje () {
        pantalla += "";
    }
     raíz () {
        pantalla += "";
    }
     cambioSigno () {
        this.pantalla = "-1*(" + this.pantalla + ")";
        this.number = this.memoria; 
        this.igual();
    }


}
var calculadora = new Calculadora();