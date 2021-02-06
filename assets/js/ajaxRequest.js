

$(document).ready(function () {
 
    $('#submitBtn').on('click',function(){
      console.log("button clicked");
    var name = $('#contactName').val();
    var email = $('#contactEmail').val();
    var msg = $('#contactMsg').val();
    
    
    

    $.ajax({
      url:"../E-cell/addContact.php",
      method:"POST",
      data:{name:name,email:email,msg:msg},
      success:function (data) {
          if(data == 1)
          {
              document.getElementById("statusmsg").innerText = "Submitted Sucessfully";
              document.getElementById("statusmsg").setAttribute('class','alert alert-success');
               $('#statusmsg').fadeOut(6000);
               $('form')[0].reset();
          }
          if(data == 0)
          {
             
            document.getElementById("statusmsg").innerText = "Unable to submit";
            document.getElementById("statusmsg").setAttribute('class','alert alert-danger');
            $('#statusmsg').fadeOut(6000);
          }
        },

    });


    });

// notify me add email
  $('#notifyBtn').on('click',function(){
      
      btn = document.getElementById('notifyBtn');
      btn.style.background = "green";

      var notifyEmail = $('#notifyEmail').val();

      $.ajax({
        
        url:"../E-cell/addNotification.php",
        method:"POST",
        data:{Email:notifyEmail},
        success:function(data){
          // console.log(data);
          if(data == 1)
          {
              document.getElementById('msg').innerText = "Submitted Successfully";
              document.getElementById('msg').style.backgroundColor = "rgba(255,255,255,0.8)";
              $('#msg').fadeOut(3000);
              $('form')[0].reset();
           }
          if(data ==0)
          {
            document.getElementById('msg').innerText = "Unable to Submit";
            document.getElementById('msg').style.backgroundColor = "light red";
              $('#msg').fadeOut(3000);

           }
        },
      });


  });  
    


});