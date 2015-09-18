<?php
    
    $email_to =   'aj.funk@onmego.com';
    $guest_name     =   $_POST['guest-name'];  
    $guest_email    =   $_POST['guest-email'];
    $guest_message  =   $_POST['guest-message'];

    echo $guest_name.'<br>';
    echo $guest_email.'<br>';
    echo $guest_message.'<br>';
    

    $headers  = "From: $guest_email\r\n";
    $headers .= "Reply-To: $guest_email\r\n";

    $subject = $guest_name." signed your Guest Book";

    $finalmessage = "$guest_name sent you the following message: \n 
                    -------------------------------------------------------\n 
                    $guest_message \n 
                    -------------------------------------------------------\n
                    ";

    echo $headers.'<br>';
    echo $subject.'<br>';
     echo $finalmessage.'<br>';
    if(mail($email_to, $subject, $finalmessage, $headers)){
        echo 'sent';     
    }else{
        echo 'sent';   
    }
?>