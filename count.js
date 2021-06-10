       function mycalculator()
       {    
       let acc = document.getElementById('main').value.length;
       let acw=document.getElementById('main').value;
       acw=acw.match(/\w+/g);
       acw=acw.length;

      document.getElementById('function').innerHTML="The total alphabet=" + acc;
      document.getElementById('function1').innerHTML="The total words=" + acw;
    }