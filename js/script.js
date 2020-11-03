function checkloveper(){

  var name = document.getElementById('name').value;
  var pname = document.getElementById('pname').value;

  if(name == ""){
   alert('Please enter your name');
  }else if (name.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(name)){
   alert('Numbers are not allowed');
  }

  else if(pname == ""){
   alert('Please enter your love name');
  }else if (pname.length <=2 ) {
   alert('Min lenght is 3')
  }else if(!isNaN(pname)){
   alert('Numbers are not allowed');
  }
  else{
  var lovdata = Math.random() * 100;
  lovdata = Math.floor(lovdata);
  document.getElementById('lovevalue').value = lovdata + "%"; 
  }
  
 }