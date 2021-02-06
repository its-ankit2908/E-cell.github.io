
<?php
   include_once('./db_connection.php');

  
   if( !($_REQUEST['Email'] == "" )){
      
    $email = $_REQUEST['Email'];
     
    $sql = "INSERT INTO notify (notify_email) VALUES ('$email')";
    
    if($conn->query($sql) == TRUE)
    {
       echo json_encode(1);
    }
    else{
       echo json_encode(0);
    }
   
   } 


?>