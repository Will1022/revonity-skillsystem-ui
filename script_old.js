$(function(){
    window.onload = function(e) {
        window.addEventListener("message", (event) => {
            var item = event.data;
            if(item !== undefined && item.type === "ui") {
                if (item.display === true) {
                    $('#container').show();
                    SetNuiFocus(true, true)
                    SetNuiFocusKeepInput(true)
                } else {
                    $('#container').hide();
                    SetNuiFocus(false, false)
                    SetNuiFocusKeepInput(false)
                }
            }
        })
    }  
})