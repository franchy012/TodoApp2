//Check off specific to do by clicking

$("ul").on("click","li", function(){
   $(this).toggleClass("completed");

})


//CLick on X to delete

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})



$("input[type='text']").keypress(function (e) { 
    if(event.which === 13){
        //guardamos el texto del input en una variable
        var todoText = $(this).val();
        $(this).val("");
        //creamos un nuevo li y lo agregamos al ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>")
    }
});


$(".fa-plus").click(function () { 
    $("input[type='text']").fadeToggle();
    
});