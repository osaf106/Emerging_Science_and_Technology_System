<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];  


$email_form = 'abcd@gmail.com';
$email_subject = 'new form submition';
$email_body = "UserName: $name.\n".
              "User Email: $email.\n".
              "Subject: $subject.\n".
              "User Message: $message.\n";

$to = 'osafahmed6723@gmail.com';
$headers = "Form: $email_form \r\n";
$headers .= "Reply-To: $email \r\n";

mail($to,$subject,$message,$headers);

header("Location: Contact.html");












?>