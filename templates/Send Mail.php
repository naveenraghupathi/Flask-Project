<?php
   $to = "sattenapalli7vamsi@gmail.com"; // Replace with your Gmail address
   $subject = $_POST['subject'];
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
   $headers = "From: $name <$email>";

   if (mail($to, $subject, $message, $headers)) {
      echo "Your message has been sent successfully.";
   } else {
      echo "There was an error sending your message.";
   }
?>
