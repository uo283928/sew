class ButtonState {
    constructor(){}
    isShowing = true;

    applyChange(){
        if(this.isShowing){
            $('p[name="parrafo"]').show();
            $("h3").show();
        } else {
            $('p[name="parrafo"]').hide();
            $("h3").hide();
        }
    }

    changeState(){
        this.isShowing = !this.isShowing;
        
        this.applyChange();
    }

    changeTextParrafo(){
        $('p[name="parrafo"]').text("Me has cambiado");

    }

    addTextParrafo(){
        var code = $('<p name="borrar"></p>').text("Hola :)");
        $('p[name="parrafo"]').append(code);
    }

    removeTextParrafo(){
        $('p[name="borrar"]').remove();
    }

    recorrerDom() {
        $("*", document.body).each( function() {
                $(this).append(document.createTextNode("Padre: " + $(this).get(0).tagName + ", elemento del padre " + $(this).get(0)));
            }
        );
    }

    sumatorio() {
        var text = "";
        $("table tr td").each(function() {
            text += $.trim($(this).text());

        });
        var code = $('<p name="sumTabla"></p>').text(text);
        $('table[name="table"]').append(code);
    }
}
var bs = new ButtonState();