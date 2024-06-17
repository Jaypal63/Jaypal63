function pass(){
    let pass = document.getElementById('password')
    let checkbox=document.getElementById('check');
         if(checkbox.checked)
         {
            pass.type = 'text'
         }
         else{
             pass.type = 'password'
         }
     }
 