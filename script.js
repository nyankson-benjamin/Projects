function caps(){
    // alert("Hey");

    var me=document.getElementsByClassName("qwe");
    var caps=document.getElementById("caps").style.display="none";
    var capsL=document.getElementById("capsL").style.visibility="visible";
    
    var caps1=document.getElementById("caps1").style.display="inline";
    for(var i=0; i<me.length; i++){
 me[i].style.textTransform="uppercase";
   
    }
    
}

function caps1(){
    

    var me=document.getElementsByClassName("qwe");
    var caps=document.getElementById("caps").style.display="inline";
    var caps1=document.getElementById("caps1").style.display="none";
    var capsL=document.getElementById("capsL").style.visibility="hidden";
    
    for(var i=0; i<me.length; i++){
        me[i].style.textTransform="lowercase";
 
   
    }
    
}

function one(){
    var change=document.getElementById("body").style.display="none";;
    var change2=document.getElementById("white").style.display="inline";
    var one=document.getElementById("one").style.display="none";
    var two=document.getElementById("two").style.display="inline";
     
}

function two(){
    var change=document.getElementById("body").style.display="inline";;
    var change2=document.getElementById("white").style.display="none";
    var one=document.getElementById("one").style.display="inline";
    var two=document.getElementById("two").style.display="none";
     
}
