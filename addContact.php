<?php 
  include_once('./db_connection.php');

 if( !(($_REQUEST['name'] == "") && ($_REQUEST['email']) && ($_REQUEST['msg'])) )
  {
       

      $name = $_REQUEST['name'];
      $email = $_REQUEST['email'];
      $msg = $_REQUEST['msg'];
     
      

      $sql = "INSERT INTO contact (contact_name,contact_email,contact_msg) VALUES ('$name','$email','$msg')";
      

      if($conn->query($sql) == TRUE)
      {
          echo json_encode(1);
      }
      else{
          echo json_encode(0);
      }
      
    }
    

   



?>
