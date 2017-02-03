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

        var html = "<li class='contenedorTarea'"+(listaTareas[i].isDone?"class='tachado'":"")+"><input onclick='onCheckClick("+i+")' type='checkbox' " + (listaTareas[i].isDone?"checked":"") + "> " +(listaTareas[i].nombre)+"<i onclick='onTrashClick("+i+")' class='glyphicon glyphicon-trash tacho'></i></li>";
        
        if(listaTareas.length>0){
            lista
        }
        
        //listaTareas[i].classList.add="option animated rotateInDownLeft";
        lista.innerHTML += html;
        
    }    
}

function onCheckClick(input)
{
    /*listaTareas[input].isDone = !listaTareas[input].isDone;
    drawTasksList();*/
    if(listaTareas[input].isDone==false){
        listaTareas[input].isDone=true;
        lista.getElementsByClassName("contenedorTarea")[input].classList.add("tachado");
    } else {
        listaTareas[input].isDone=false;
        lista.getElementsByClassName("contenedorTarea")[input].classList.remove("tachado");
    }
}
 
function onTrashClick(trash)
{
    //lista.removeChild(lista.children[trash]);  
    listaTareas.splice(trash,1); 
    drawTasksList();    
    
}




