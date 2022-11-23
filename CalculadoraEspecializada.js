class Stack{
    pila;
    constructor(){
        this.pila = new Array();
    }
    push(val){
        this.pila.push(val);
    }
    pop() {
        return this.pila.pop();
    }
    peek(){
        var ret = this.pila.pop();
        this.pila.push(ret);
        return ret;
        
    }

}
class Calculadora {
    constructor() {
        this.stack = new Stack();
        this.pulsarTecla();
    }
    pantalla = "";
    shiftActive = false;
    stack;


    numero (n) {
        this.pantalla = this.pantalla + n;
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    
    punto() {
        if (! this.pantalla.includes(".")) {
            if (this.pantalla == "") this.pantalla = "0";
            this.pantalla = this.pantalla + ".";
            document.querySelector('input[type="text"]').value = this.pantalla;
        }
     }
     suma () {
        var first = this.stack.pop();
        var second = this.stack.pop();
        this.push(first + second);
        this.pantalla = "";
        document.querySelector('input[type="text"]').value = this.pantalla;
        console.log(this.stack.peek() + "");
    }
     resta () {
        var first = this.stack.pop();
        var second = this.stack.pop();
        this.push(first - second);
        this.pantalla = "";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     multiplicacion () {
        var first = this.stack.pop();
        var second = this.stack.pop();
        this.push(first * second);
        this.pantalla = "";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
     division () {
        var first = this.stack.pop();
        var second = this.stack.pop();
        this.push(first / second);
        this.pantalla = "";
        document.querySelector('input[type="text"]').value = this.pantalla;
    }
    enter() {
        this.push(Number(this.pantalla));
        this.pantalla = "";
        document.querySelector('input[type="text"]').value = this.pantalla;
        
    }

     // Exp

    square(){
        this.stack.push(  );
    }
    powerOf(){
        this.stack.push(  );
    }

    borrar() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length-1);
        document.querySelector('input[type="text"]').value = this.pantalla;
    }

    raíz () {
        this.stack.push(Math.sqrt(this.stack.pop()));
    }
     cambioSigno () {
        this.stack.push(-1*(this.stack.pop()));
    }

    // Trig
    shift(){
        this.shiftActive = !this.shiftActive;
    }
    sinButton() {
        if(shiftActive) sin();
        else arcsin();
    }
    sin() {
        this.stack.push( Math.sin( this.stack.pop() ) );
    }
    arcsin() {
        this.stack.push( Math.asin( this.stack.pop() ) );
    }

    cosButton() {
        if(shiftActive) cos();
        else arccos();
    }
    cos() {
        this.stack.push( Math.cos( this.stack.pop() ) );
    }
    arccos() {
        this.stack.push( Math.acos( this.stack.pop() ) );
    }

    tanButton() {
        if(shiftActive) tan();
        else arctan();
    }
    tan() {
        this.stack.push( Math.tan( this.stack.pop() ) );
    }
    arctan() {
        this.stack.push( Math.atan( this.stack.pop() ) );
    }

    see(){
        console.log(this.stack.peek());
    }

    stackString() {
        var ret = "";
        this.stack.pila.forEach(element => {
            ret += element + ", " 
        });
        return ret.substring(0, ret.length-2);
    }

    push(value){
        this.stack.push( value );
        document.querySelector('input[type="textarea"]').value = 
            this.stackString(); 
       
    }

    calcularPotenciaCalorifica(){
        var first = this.stack.pop();
        var second = this.stack.pop();
        var third = this.stack.pop();
        var fourth = this.stack.pop();
        var res = first * second * third * fourth * 116;
        this.push(res);

        this.pantalla = "";
        document.querySelector('input[type="text"]').value = this.pantalla;
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
                    this.enter();
            }




        });
    }

}
var calculadora = new Calculadora();