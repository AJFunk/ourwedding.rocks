<?php
    
	$email_to =   'sjpoloske@gmail.com';
	$name     =   $_POST['rsvp-name'];  
	$email    =   $_POST['rsvp-email'];
    $song    =   $_POST['rsvp-song'];
    $meal    =   $_POST['rsvp-meal'];
	$extra    =   $_POST['rsvp-extra'];
    $message  =   $_POST['rsvp-message'];
    $event = $_POST['event'];
    $events_string = implode(",", $event);


    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $subject = $name." sent you an RSVP message";

    $finalmessage = "$name sent you the following message: \n 
                    -------------------------------------------------------\n 
                    $message \n 
                    -------------------------------------------------------\n
                    Events Attending: $events_string
                    -------------------------------------------------------\n
                    Meal Choice: $meal\n 
                    -------------------------------------------------------\n
                    Extra Requirements: $extra\n 
                    -------------------------------------------------------\n
                    Song Request: $song\n ";

    
    if(mail($email_to, $subject, $finalmessage, $headers)){
        echo 'sent';    
    }else{
        echo 'failed';
    }
?>