<?php
if (isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "mofopeojosh@gmail.com";
  $email_subject = "New contact on your website";

  function problem($error)
  {
    echo "We are very sorry, but there were error(s) found with the form you submitted. ";
    echo "These errors appear below.<br><br>";
    echo $error . "<br><br>";
    echo "Please go back and fix these errors.<br><br>";
    die();
  }

  // validation expected data exists
  if (
    !isset($_POST['name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['phone']) ||
    !isset($_POST['company']) ||
    !isset($_POST['message'])
  ) {
    problem('We are sorry, but there appears to be a problem with the form you submitted.');
  }

  $name = $_POST['name']; // required
  $email = $_POST['email']; // required
  $phone = $_POST['phone']; // required
  $company = $_POST['company']; // required
  $requirements = $_POST['message']; // required

  $email_message = "Contact details below.\n\n";

  function clean_string($string)
  {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Name: " . clean_string($name) . "\n";
  $email_message .= "Email: " . clean_string($email) . "\n";
  $email_message .= "Phone number: " . clean_string($phone) . "\n";
  $email_message .= "Company  : " . clean_string($company) . "\n";
  $email_message .= "Message  : " . clean_string($requirements) . "\n";

  // create email headers
  $headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
  ?>

  <!-- include your success message below -->

  Thank you for contacting us. We will be in touch with you very soon.

  <?php
}
?>
