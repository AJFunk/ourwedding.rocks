<?php

    
	$email_to =   'aj.funk@onmego.com'; 
	$contact_name     =   $_POST['contactname'];  
	$contact_email    =   $_POST['contactemail'];
    $contact_message  =   $_POST['contactmessage'];


    $headers  = "From: $contact_email\r\n";
    $headers .= "Reply-To: $contact_email\r\n";

    $subject = "$contact_name sent you a message:";

    $finalmessage = "$contact_name sent you this message: \n 
                    -------------------------------------------------------\n 
                    $contact_message \n 
                    -------------------------------------------------------\n";

    
    if(mail($email_to, $subject, $finalmessage, $headers)){
        echo 'sent';     
    }else{
        echo 'failed';   
    }
?>