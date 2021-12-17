$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else{
            $("#container").hide();
        }
    }
    display(false)
    window.addEventListener("message", function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true){
                display(true)
            } else {
                display(false)
            }    
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27){
            $.post("http://nui/exit", JSON.stringify({}));    
        }
    }

    /* TÖRLÉS BUTTON CLICK*/ 
    $("#clear").click(function() {
        for (let i = 1; i < 30; i++){
            /*  CALLBACK ='(
            $(`#counter-${i}`)*/
        }
    })

    $("#submit").click(function(){
        document.getElementById('1c').innerHTML = 'TEST_SUB';
        $.post("http://nui/exit", JSON.stringify({}));
    })

    $("#box-item-1").click(function(){
        increment(1);
    })

    $("#box-item-2").click(function(){
        increment(2);
    })

    $("#box-item-3").click(function(){
        increment(3);
    })

    $("#box-item-4").click(function(){
        increment(4);
    })

    $("#box-item-5").click(function(){
        increment(5);
    })

    $("#box-item-6").click(function(){
        increment(6);
    })

    $("#box-item-7").click(function(){
        increment(7);
    })

    $("#box-item-8").click(function(){
        increment(8);
    })

    $("#box-item-9").click(function(){
        increment(9);
    })

    function increment(boxvalue){
        var value = parseInt(document.getElementById(`counter-${boxvalue}`).innerHTML);
        $(`#counter-${boxvalue}`).html(parseInt(value + 1));

        var pointvalue = parseInt(document.getElementById('point').innerHTML);
        $("#point").html(parseInt(pointvalue - 1));
    }
})