<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=contact, initial-scale=1.0">
	<title>Contact Form</title>
</head>
<body>
	<form method="POST" id="submission-form" action="contact.php">
	<input type="text" name="username" id="username" placeholder="Enter your username">	
	<input type="password" name="password" id="password" placeholder="Pick a password">
	<input type="email" name="email" id="email" placeholder="Your e-mail">
	<textarea name="message" id="message" cols="30" rows="10" placeholder="Message here"></textarea>
	<button type="submit">Send e-mail</button>
	</form>
</body>
</html>