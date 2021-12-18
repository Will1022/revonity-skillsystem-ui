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

    // 1 SKILL

    $("#box-item-1").click(function(){
        increment(1);
    })

    // 2 SKILL

    $("#box-item-2").click(function(){
        increment(2);
    })

    // 3 SKILL

    $("#box-item-3").click(function(){
        increment(3);
    })

    // 4 SKILL


    $("#box-item-4").click(function(){
        increment(4);
    })

    // 5 SKILL


    $("#box-item-5").click(function(){
        increment(5);
    })

    // 6 SKILL


    $("#box-item-6").click(function(){
        increment(6);
    })

    // 7 SKILL


    $("#box-item-7").click(function(){
        increment(7);
    })

    // 8 SKILL


    $("#box-item-8").click(function(){
        increment(8);
    })

    // 9 SKILL


    $("#box-item-9").click(function(){
        increment(9);
    })

    // 10 SKILL


    $("#box-item-10").click(function(){
        increment(10);
    })

    // 11 SKILL


    $("#box-item-11").click(function(){
        increment(11);
    })

    // 12 SKILL


    $("#box-item-12").click(function(){
        increment(12);
    })

    // 13 SKILL


    $("#box-item-13").click(function(){
        increment(13);
    })

    // 14 SKILL


    $("#box-item-14").click(function(){
        increment(14);
    })

    // 15 SKILL


    $("#box-item-15").click(function(){
        increment(15);
    })

    // 16 SKILL


    $("#box-item-16").click(function(){
        increment(16);
    })
    
    // 17 SKILL


    $("#box-item-17").click(function(){
        increment(17);
    })

    // 18 SKILL


    $("#box-item-18").click(function(){
        increment(18);
    })

    // 19 SKILL


    $("#box-item-19").click(function(){
        increment(19);
    })

    // 20 SKILL


    $("#box-item-20").click(function(){
        increment(20);
    })

    // 21 SKILL


    $("#box-item-21").click(function(){
        increment(21);
    })

    // 22 SKILL


    $("#box-item-22").click(function(){
        increment(22);
    })

    // 23 SKILL


    $("#box-item-23").click(function(){
        increment(23);
    })

    // 24 SKILL


    $("#box-item-24").click(function(){
        increment(24);
    })
    
    // 25 SKILL


    $("#box-item-25").click(function(){
        increment(25);
    })

    // 26 SKILL


    $("#box-item-26").click(function(){
        increment(26);
    })

    // 27 SKILL


    $("#box-item-27").click(function(){
        increment(27);
    })

    // 28 SKILL


    $("#box-item-28").click(function(){
        increment(28);
    })

    // 29 SKILL


    $("#box-item-29").click(function(){
        increment(29);
    })

    // 30 SKILL


    $("#box-item-30").click(function(){
        increment(30);
    })

    function increment(boxvalue){
        var value = parseInt(document.getElementById(`counter-${boxvalue}`).innerHTML);
        $(`#counter-${boxvalue}`).html(parseInt(value + 1));

        var pointvalue = parseInt(document.getElementById('point').innerHTML);
        $("#point").html(parseInt(pointvalue - 1));
    }


    // KILÉPÉS GOMB //

    $("#logoffbutton").click(function() {
        closeSkillSystem();
    });

    function closeSkillSystem() {
        $.post("http://nui/exit", JSON.stringify({}));  
    };
})