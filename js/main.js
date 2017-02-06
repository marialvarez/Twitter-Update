var areaTexto = document.getElementById("textArea");
var boton = document.getElementById("btn");
var listaTareas = [];

boton.addEventListener("click", function(){
        
    if (areaTexto.value == null || areaTexto.value.length == 0 || /^\s*$/.test(areaTexto.value)){
    
        alert ('No agregaste ninguna tarea');
        
    }else {
        listaTareas.push({nombre:(areaTexto.value),isDone:false});
        drawTasksList();
        areaTexto.value = "";
        areaTexto.focus(); 
    }
 
}); 

function drawTasksList(){
    
    var lista = document.getElementById("lista");
    lista.innerHTML="";
    
    for(var i in listaTareas)
    {   

        var html = "<li class='contenedorTarea'"+(listaTareas[i].isDone?"style='text-decoration:line-through'":"style='text-decoration:none'")+"><input onclick='onCheckClick("+i+")' type='checkbox' " + (listaTareas[i].isDone?"checked":"") + "> " +(listaTareas[i].nombre)+"<i onclick='onTrashClick("+i+")' class='glyphicon glyphicon-trash tacho'></i></li>";
        
        /*listaTareas[i].classList.add="option animated rotateInDownLeft";*/
        lista.innerHTML += html;     
    }    
}

function onCheckClick(input) {
    listaTareas[input].isDone = !listaTareas[input].isDone;
    drawTasksList();
}
 
function onTrashClick(trash){
    //lista.removeChild(lista.children[trash]);  
    listaTareas.splice(trash,1); 
    drawTasksList();      
}




