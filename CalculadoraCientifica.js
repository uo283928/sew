class Calculadora {
    constructor() {this.pulsarTecla()}
    pantalla = "";
    number = "";
    first;
    second;
    operation = "";
    positionSecondNumber = 0;
    memoria = 0;

    numero (n) {
        this.pantalla = this.pantalla + n;
        this.number = this.number + n;
        document.querySelector('input[type="text"]').value = this.pantalla;
    }

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
        this.pantalla += "%";
        document.querySelector('input[type="text"]').value = this.pantalla;
        
    }
     raiz () {
        this.pantalla = eval( "Math.sqrt(" + eval(this.pantalla) + ")");
        document.querySelector('input[type="text"]').value = this.pantalla;

    }
     cambioSigno () {
        this.pantalla = "-1*(" + this.pantalla + ")";
        this.number = this.memoria; 
        this.igual();
    }

    pulsarTecla(){
        document.addEventListener('keydown', (event)=>{
            var keyPressed = event.key;
            switch (keyPressed){
                case "0":
                    this.numero(0);
                    break;
                case "1":
                    this.numero(1);
                    break;
                case "2":
                    this.numero(2);
                    break;
                case "3":
                    this.numero(3);
                    break;
                case "4":
                    this.numero(4);
                    break;
                case "5":
                    this.numero(5);
                    break;
                case "6":
                    this.numero(6);
                    break;
                case "7":
                    this.numero(7);
                    break;
                case "8":
                    this.numero(8);
                    break;
                case "9":
                    this.numero(9);
                    break;
                
                case "+":
                    this.suma();
                        break;
                case "-":
                    this.resta();
                        break;
                case "*":
                    this.multiplicacion();
                        break;
                case "/":
                    this.division();
                        break;
                case "\n":
                    this.igual();
            }




        });
    }


}

class CalculadoraCientifica extends Calculadora {
    shiftActive = false;
    constructor(){super();this.pulsarTecla();}
    //Trigonometry
    sinButton() {
        if(this.shiftActive) this.sin();
        else this.arcsin();
    }
    cosButton() {
        if(this.shiftActive) this.cos();
        else this.arccos();
    }
    tanButton() {
        if(this.shiftActive) this.tan();
        else this.arctan();
    }
    shift() {
        this.shift = !this.shift;
    }
    
    sin(){
        try {
            this.pantalla = eval( "Math.sin(" + eval(this.pantalla) + ")");    
        } catch(err) {
            var result = "Error: " + err;
        }
        
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    arcsin(){
        try {
            this.pantalla = eval( "Math.asin(" + eval(this.pantalla) + ")");
        } catch(err) {
            var result = "Error: " + err;
        }
        
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    cos(){
        try {
            this.pantalla = eval( "Math.cos(" + eval(this.pantalla) + ")");    
        } catch(err) {
            var result = "Error: " + err;
        }
        
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    arccos(){
        try {
            this.pantalla = eval( "Math.acos(" + eval(this.pantalla) + ")");    
        } catch(err) {
            var result = "Error: " + err;
        }
        
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    tan(){
        try {
            this.pantalla = eval( "Math.tan(" + eval(this.pantalla) + ")");    
        } catch(err) {
            var result = "Error: " + err;
        }
        
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    arctan(){
        try {
            this.pantalla = eval( "Math.atan(" + eval(this.pantalla) + ")");    
        } catch(err) {
            var result = "Error: " + err;
        }
        
        document.querySelector('input[type="text"]').value = this.pantalla;
    }

    //Exponential
    numbers= ["0","1","2","3","4","5","6","7","8","9","."]
    square() {
        var auxIndex = -1;
        for (let index = this.pantalla.length -1; index >=0 ; index--) {
            var element = this.pantalla[index];
            if (! this.numbers.includes(element)) {
                auxIndex = index; break;

            }
            
        }

        this.pantalla = this.pantalla + "*" + this.pantalla.substring(auxIndex);

    }

    powerOf(){
        var auxIndex = -1;
        for (let index = this.pantalla.length -1; index >=0 ; index--) {
            var element = this.pantalla[index];
            if (! this.numbers.includes(element)) {
                auxIndex = index; break;

            }
            
        }

        this.pantalla = this.pantalla.substring(0, auxIndex) + "Math.pow(" + this.pantalla.substring(auxIndex, this.pantalla.length) + ", ";
    }

    tenToPowerOf() {
        this.pantalla = this.pantalla + "Math.pow(10, ";

    }
    
    log() {
        this.pantalla = this.pantalla + "Math.log(10,"; 

    }

    exp() {
        this.pantalla = this.pantalla + ",+e";    
    }

    mod(){
        this.pantalla = this.pantalla + "%";
    }

    //Basic operations extended
    factorial(){
        this.pantalla = this.factorial + "Math.factorial(";
    }

    mod() {

    }

    //Constants
    pi(){
        this.pantalla += "Math.PI";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    
    fe() {
        try {
            this.pantalla = Number(eval(this.pantalla)).toExponential() ;
        } catch(err) {
            var result = "Error: " + err;
        }
        document.querySelector('input[type="text"]').value = this.pantalla;
    }

    // Memory
    mSet() {
        try {
            var res = Number(eval(this.pantalla));
            this.pantalla = res;
        } catch(err) {
            var result = "Error: " + err;
        }
        document.querySelector('input[type="text"]').value = this.pantalla;
        super.memoria = res;
    }

     // Memory
     mClear() {
        super.memoria = 0;
    }

    mRetreive() {
        super.mrc();
    }

    clearError() {
        this.pantalla = "";
    }

    clear() {
        super.borrar();
    }

    borrarChar(){
        this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
    }

    leftBr() {
        this.pantalla += "(";
    }

    
    rightBr() {
        this.pantalla += ")";
    }



    
}

var calculadora = new CalculadoraCientifica();