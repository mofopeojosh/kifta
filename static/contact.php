<?php
if (isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "info@kiftatechnologies.com";
  $email_subject = "New contact on your website";

  $status = '200';

  // validation expected data exists
  if (
    !isset($_POST['name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['phone']) ||
    !isset($_POST['company']) ||
    !isset($_POST['message'])
  ) {
    $status = '422';
  }

  $name = $_POST['name']; // required
  $email = $_POST['email']; // required
  $phone = $_POST['phone']; // required
  $company = $_POST['company']; // required
  $requirements = $_POST['message']; // required

  $email_message = "You have a new contact from your website:.\n\n";
  $email_message .= "See details below:.\n\n";

  function clean_string($string)
  {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Name: " . clean_string($name) . "\n";
  $email_message .= "Email: " . clean_string($email) . "\n";
  $email_message .= "Phone number: " . clean_string($phone) . "\n";
  $email_message .= "Company: " . clean_string($company) . "\n";
  $email_message .= "Message: " . clean_string($requirements) . "\n";

  // create email headers
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  $sendMail = @mail($email_to, $email_subject, $email_message, $headers);
  if (!$sendMail){
    $status = '400';
  }


}
header('Location: /contact?status=' . $status);
?>
