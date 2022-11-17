function cal(){
    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=document.getElementById('c').value;
    var answer=document.getElementById('ans');
    
    var D=(b*b)-4*(a*c);

    if (a=="" || b=="" || c==""){
      alert("PLEASE FILL ALL THE BOXES");
      // stop();
    }

    else if(D>=0){
      alert("The equation has two real roots");
    }

    else if(D>0){
      alert("The equation has two real and different roots");
    }

    else if(D==0){
      alert("The equation has two real and equal roots");
    }

    else if(D<0){
      alert("The equation has complex or no real roots");
    }

    else{
      alert("MATH ERROR");
    }
    
  }

  function reset1(){
    a.value="";
    b.value="";
    c.value="";
  }