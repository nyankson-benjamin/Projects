var  myNav= document.getElementById('nav');

function menu(){
  if(myNav.style.display="none"){
    myNav.style.display='block';
  }

  else {
    myNav.style.display='none';

  }
}

function me(){
 var confirmation=window.confirm("Are You sure You want to attempt the quiz");

 if (confirmation==true){
  window.location.href="Attempt_Quiz.html";
 }
 else {
  window.location.href="Quiz.html";
 }
}


function you(){
  // window.location=document.getElementById("me").value;
}
function cal(){

    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=document.getElementById('c').value;
    var answer=document.getElementById('ans');
    
    var D=(b*b)-4*(a*c);
    var x1=Math.round(((-b + Math.sqrt(D)) / (2*a)+Number.EPSILON)*1000)/1000;
    var x2=Math.round(((-b - Math.sqrt(D)) / (2*a)+Number.EPSILON)*1000)/1000;
    // var x=-b/(2*a);


    var real= (-b) / (2*a);
    var real=Math.round((real + Number.EPSILON)*1000)/1000;
    var D1=Math.sqrt(4*a*c -(b*b));
    var D1= (D1) / (2*a);
    var D1=Math.round((D1 + Number.EPSILON)*1000)/1000;
    

    var x3=real + " <i>&PlusMinus;</i> " + D1 + "<i>i</i>";

    
    if (a==0 && b==0 && c==0){
      answer.innerHTML="The textboxes cannot be empty";
      document.getElementById('a').style="border:1px solid red";
      document.getElementById('b').style="border:1px solid red";
      document.getElementById('c').style="border:1px solid red";
    
    }
    
    else if(D>0){
      answer.innerHTML="X1 = " + x1 + " or X2 = " + x2 ;
    
    }
    
    else if (D==0){
      answer.innerHTML="X = " +x ;
    
    }
    
    else if (D<0){
      answer.innerHTML="X = " + x3;

      
    }
    
    }
    
    
    
    function reset1(){
    
      var a=document.getElementById('a').value=null;
    var b=document.getElementById('b').value=null;
    var c=document.getElementById('c').value=null;
    var answer=document.getElementById('ans').innerHTML=" ";
    
    document.getElementById('a').style="border:none";
      document.getElementById('b').style="border:none";
      document.getElementById('c').style="border:none";
    }


//start quiz
    

      const startMinute=10;
    let time=startMinute*60;
    
    const countdownEl=document.getElementById('countdown');
    
    setInterval(updateCountdown,1000);
    
    function updateCountdown(){
      const minutes=Math.floor(time/60);
      let seconds = time%60;
    
      // seconds = seconds<10 ? '0' + seconds : seconds;
      // countdownEl.innerHTML= `${minutes}:${seconds}`;
      // time--;
    
      if (minutes==0){
        
        document.getElementById('sec1').style="display:none";
        document.getElementById('sec2').style="display:none";
        document.getElementById('sec3').style="display:none";
        document.getElementById('sec4').style="display:none";
        document.getElementById('sec5').style="display:none";
        document.getElementById('sec6').style="display:list-item";
  
        var counter1=0;
        var q1=document.myform.q1.value;
        var q2=document.myform1.q2.value;
        var q3=document.myform2.q3.value;
        var q4=document.myform3.q4.value;
        var q5=document.myform5.q5.value;
        var q6=document.myform6.q6.value;
        var q7=document.myform7.q7.value;
        var q8=document.myform8.q8.value;
        var q9=document.myform9.q9.value;
        var q10=document.myform10.q10.value;
        var q11=document.myform11.q11.value;
        var q12=document.myform12.q12.value;
        var q13=document.myform13.q13.value;
        var q14=document.myform14.q14.value;
        var q15=document.myform15.q15.value;
        var q16=document.myform16.q16.value;
        var q17=document.myform17.q17.value;
        var q18=document.myform18.q18.value;
        var q19=document.myform19.q19.value;
        var q20=document.myform20.q20.value;
  
        var ans=document.getElementById('answer');
  
        if (q1=="d"){
          counter1++;
                  
        }
  
        if (q2=="b"){
          counter1++;
                  
        }
  
        if (q3=="d"){
          counter1++;
                  
        }
  
        if (q4=="d"){
          counter1++;
                  
        }
  
        if (q5=="d"){
          counter1++;
                  
        }
  
        if (q6=="a"){
          counter1++;
                  
        }
  
        if (q7=="d"){
          counter1++;
                  
        }
  
        if (q8=="d"){
          counter1++;
                  
        }
  
        if (q9=="b"){
          counter1++;
                  
        }
  
        if (q10=="b"){
          counter1++;
                  
        }
  
        if (q11=="c"){
          counter1++;
                  
        }
  
        if (q12=="c"){
          counter1++;
                  
        }
  
        if (q13=="c"){
          counter1++;
                  
        }
  
        if (q14=="b"){
          counter1++;
                  
        }
  
        if (q15=="a"){
          counter1++;
                  
        }
  
        if (q16=="c"){
          counter1++;
                  
        }
  
        if (q17=="b"){
          counter1++;
                  
        }
  
        if (q18=="c"){
          counter1++;
                  
        }
  
        if (q19=="b"){
          counter1++;
                  
        }
  
        if (q20=="b"){
          counter1++;
                  
        }
        ans.innerHTML="you scored " + counter1 +" out of 20";
       
        countdownEl.innerHTML="0:00";
        // const startMinute=1111;
        time=  0;
        
      }
    
    
    
    
    }

    function nextSec(){
      document.getElementById('sec2').style="display:list-Item";
      document.getElementById('sec1').style="display:none";
      document.getElementById('sec3').style="display:none";
      document.getElementById('sec4').style="display:none";
     
    }

    function nextSec2(){
      document.getElementById('sec1').style="display:none";
      document.getElementById('sec2').style="display:none";
      document.getElementById('sec3').style="display:list-Item";
      document.getElementById('sec4').style="display:none";
    }

    function nextSec3(){
      document.getElementById('sec1').style="display:none";
      document.getElementById('sec2').style="display:none";
      document.getElementById('sec3').style="display:none";
      document.getElementById('sec4').style="display:list-Item";
    }

    function finish(){
      document.getElementById('sec1').style="display:none";
      document.getElementById('sec2').style="display:none";
      document.getElementById('sec3').style="display:none";
      document.getElementById('sec4').style="display:none";
      document.getElementById('sec5').style="display:list-Item";

      var q1=document.myform.q1.value;
      var q2=document.myform1.q2.value;
      var q3=document.myform2.q3.value;
      var q4=document.myform3.q4.value;
      var q5=document.myform5.q5.value;
      var q6=document.myform6.q6.value;
      var q7=document.myform7.q7.value;
      var q8=document.myform8.q8.value;
      var q9=document.myform9.q9.value;
      var q10=document.myform10.q10.value;
      var q11=document.myform11.q11.value;
      var q12=document.myform12.q12.value;
      var q13=document.myform13.q13.value;
      var q14=document.myform14.q14.value;
      var q15=document.myform15.q15.value;
      var q16=document.myform16.q16.value;
      var q17=document.myform17.q17.value;
      var q18=document.myform18.q18.value;
      var q19=document.myform19.q19.value;
      var q20=document.myform20.q20.value;


      var text=document.getElementsByClassName('q');
      
      

      if(q1==""){
       text[0].innerHTML="Q1. Answer has not been saved";
       text[0].style="color:red";
      }else{
        text[0].innerHTML="Q1. Answer has been saved";
        text[0].style="color:lime";
       
      }

      if(q2==""){
        text[1].innerHTML="Q2. Answer has not been saved";
        text[1].style="color:red";
       }else{
         text[1].innerHTML="Q2. Answer has been saved";
         text[1].style="color:lime";
       }


       if(q3==""){
        text[2].innerHTML="Q.3 Answer has not been saved";
        text[2].style="color:red";
       }else{
         text[2].innerHTML="Q3. Answer has been saved";
         text[2].style="color:lime";
       }

       if(q4==""){
        text[3].innerHTML="Q4. Answer has not been saved";
        text[3].style="color:red";
       }else{
         text[3].innerHTML="Q4. Answer has been saved";
         text[3].style="color:lime";
       }


       if(q5==""){
        text[4].innerHTML="Q5. Answer has not been saved";
        text[4].style="color:red";
       }else{
         text[4].innerHTML="Q5. Answer has been saved";
         text[4].style="color:lime";
        
       }

       if(q6==""){
        text[5].innerHTML="Q6. Answer has not been saved";
        text[5].style="color:red";
       }else{
         text[5].innerHTML="Q6. Answer has been saved";
         text[5].style="color:lime";
        
       }

       if(q7==""){
        text[6].innerHTML="Q7. Answer has not been saved";
        text[6].style="color:red";
       }else{
         text[6].innerHTML="Q7. Answer has been saved";
         text[6].style="color:lime";
        
       }

       if(q8==""){
        text[7].innerHTML="Q8. Answer has not been saved";
        text[7].style="color:red";
       }else{
         text[7].innerHTML="Q8. Answer has been saved";
         text[7].style="color:lime";
        
       }


       if(q9==""){
        text[8].innerHTML="Q9. Answer has not been saved";
        text[8].style="color:red";
       }else{
         text[8].innerHTML="Q9. Answer has been saved";
         text[8].style="color:lime";
        
       }

       if(q10==""){
        text[9].innerHTML="Q10. Answer has not been saved";
        text[9].style="color:red";
       }else{
         text[9].innerHTML="Q10. Answer has been saved";
         text[9].style="color:lime";
        
       }

       if(q11==""){
        text[10].innerHTML="Q11. Answer has not been saved";
        text[10].style="color:red";
       }else{
         text[10].innerHTML="Q11. Answer has been saved";
         text[10].style="color:lime";
        
       }

       if(q12==""){
        text[11].innerHTML="Q12. Answer has not been saved";
        text[11].style="color:red";
       }else{
         text[11].innerHTML="Q12. Answer has been saved";
         text[11].style="color:lime";
        
       }

       if(q13==""){
        text[12].innerHTML="Q13. Answer has not been saved";
        text[12].style="color:red";
       }else{
         text[12].innerHTML="Q13. Answer has been saved";
         text[12].style="color:lime";
        
       }

       if(q14==""){
        text[13].innerHTML="Q14. Answer has not been saved";
        text[13].style="color:red";
       }else{
         text[13].innerHTML="Q14. Answer has been saved";
         text[13].style="color:lime";
        
       }

       if(q15==""){
        text[14].innerHTML="Q15. Answer has not been saved";
        text[14].style="color:red";
       }else{
         text[14].innerHTML="Q15. Answer has been saved";
         text[14].style="color:lime";
        
       }

       if(q16==""){
        text[15].innerHTML="Q16. Answer has not been saved";
        text[15].style="color:red";
       }else{
         text[15].innerHTML="Q16. Answer has been saved";
         text[15].style="color:lime";
        
       }

       if(q17==""){
        text[16].innerHTML="Q17. Answer has not been saved";
        text[16].style="color:red";
       }else{
         text[16].innerHTML="Q17. Answer has been saved";
         text[16].style="color:lime";
        
       }

       if(q18==""){
        text[17].innerHTML="Q18. Answer has not been saved";
        text[17].style="color:red";
       }else{
         text[17].innerHTML="Q18. Answer has been saved";
         text[17].style="color:lime";
        
       }

       if(q19==""){
        text[18].innerHTML="Q19. Answer has not been saved";
        text[18].style="color:red";
       }else{
         text[18].innerHTML="Q19. Answer has been saved";
         text[18].style="color:lime";
        
       }

       if(q20==""){
        text[19].innerHTML="Q20. Answer has not been saved";
        text[19].style="color:red";
       }else{
         text[19].innerHTML="Q20. Answer has been saved";
         text[19].style="color:lime";
        
       }
       
    }

    function submitAnswer(){
      document.getElementById('sec1').style="display:none";
      document.getElementById('sec2').style="display:none";
      document.getElementById('sec3').style="display:none";
      document.getElementById('sec4').style="display:none";
      document.getElementById('sec5').style="display:none";
      document.getElementById('sec6').style="display:list-item";

      var counter1=0;
      var q1=document.myform.q1.value;
      var q2=document.myform1.q2.value;
      var q3=document.myform2.q3.value;
      var q4=document.myform3.q4.value;
      var q5=document.myform5.q5.value;
      var q6=document.myform6.q6.value;
      var q7=document.myform7.q7.value;
      var q8=document.myform8.q8.value;
      var q9=document.myform9.q9.value;
      var q10=document.myform10.q10.value;
      var q11=document.myform11.q11.value;
      var q12=document.myform12.q12.value;
      var q13=document.myform13.q13.value;
      var q14=document.myform14.q14.value;
      var q15=document.myform15.q15.value;
      var q16=document.myform16.q16.value;
      var q17=document.myform17.q17.value;
      var q18=document.myform18.q18.value;
      var q19=document.myform19.q19.value;
      var q20=document.myform20.q20.value;

      var ans=document.getElementById('answer');

      if (q1=="d"){
        counter1++;
                
      }

      if (q2=="b"){
        counter1++;
                
      }

      if (q3=="d"){
        counter1++;
                
      }

      if (q4=="d"){
        counter1++;
                
      }

      if (q5=="d"){
        counter1++;
                
      }

      if (q6=="a"){
        counter1++;
                
      }

      if (q7=="d"){
        counter1++;
                
      }

      if (q8=="d"){
        counter1++;
                
      }

      if (q9=="b"){
        counter1++;
                
      }

      if (q10=="b"){
        counter1++;
                
      }

      if (q11=="c"){
        counter1++;
                
      }

      if (q12=="c"){
        counter1++;
                
      }

      if (q13=="c"){
        counter1++;
                
      }

      if (q14=="b"){
        counter1++;
                
      }

      if (q15=="a"){
        counter1++;
                
      }

      if (q16=="c"){
        counter1++;
                
      }

      if (q17=="b"){
        counter1++;
                
      }

      if (q18=="c"){
        counter1++;
                
      }

      if (q19=="b"){
        counter1++;
                
      }

      if (q20=="b"){
        counter1++;
                
      }
      ans.innerHTML="you scored " + counter1 +" out of 20";
      
    }

    function review(){
      document.getElementById('sec1').style="display:list-item";
      document.getElementById('sec2').style="display:none";
      document.getElementById('sec3').style="display:none";
      document.getElementById('sec4').style="display:none";
      document.getElementById('sec5').style="display:none";
      document.getElementById('sec6').style="display:none";
      var mark=document.getElementById('mark').style.display="inline";
      var mark=document.getElementById('mark1').style.display="inline";
      var mark=document.getElementById('mark2').style.display="inline";
      var mark=document.getElementById('mark3').style.display="inline";
      var mark=document.getElementById('mark4').style.display="inline";
      var mark=document.getElementById('mark5').style.display="inline";
      var mark=document.getElementById('mark7').style.display="inline";
      var mark=document.getElementById('mark8').style.display="inline";
      var mark=document.getElementById('mark9').style.display="inline";
      var mark=document.getElementById('mark10').style.display="inline";
      var mark=document.getElementById('mark11').style.display="inline";
      var mark=document.getElementById('mark12').style.display="inline";
      var mark=document.getElementById('mark13').style.display="inline";
      var mark=document.getElementById('mark14').style.display="inline";
      var mark=document.getElementById('mark15').style.display="inline";
      var mark=document.getElementById('mark16').style.display="inline";
      var mark=document.getElementById('mark17').style.display="inline";
      var mark=document.getElementById('mark18').style.display="inline";
      var mark=document.getElementById('mark19').style.display="inline";
      var mark=document.getElementById('mark20').style.display="inline";
      var mark=document.getElementById('finish').style.display="none";
      var mark=document.getElementById('back').style.display="inline";

      // mark.style="display-inline";
      // mark.style="width:40px";

      mark1.style="display-inline";
      mark1.style="width:40px";
      const startMinute=11000;

    }

    function sec1(){
      document.getElementById('sec1').style="display:list-item";
      document.getElementById('sec2').style="display:none";
      document.getElementById('sec3').style="display:none";
      document.getElementById('sec4').style="display:none";
      document.getElementById('sec5').style="display:none";
      document.getElementById('sec6').style="display:none";
    }
    
    
    
    