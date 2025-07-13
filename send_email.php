<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $userName = $_POST['userName'];
    $userEmail = $_POST['userEmail'];
    $message = $_POST['message'];

    // Set the recipient email (change this to your email address)
    $to = "zh1872811@gmail.com";  // Replace with your email address

    // Set the subject of the email
    $subject = "New message from: $userName";

    // Set the message body
    $body = "You have received a new message from the contact form:\n\n";
    $body .= "Name: $userName\n";
    $body .= "Email: $userEmail\n\n";
    $body .= "Message:\n$message\n";

    // Set the headers for the email (e.g., from email)
    $headers = "From: $userEmail";

    // Send the email using PHP's mail function
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "There was an error sending the email.";
    }
}
?>
