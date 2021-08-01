<?php
echo '<pre>';
print_r($_POST);
echo '<pre>';
$sent_message =  mail('s2100147@edu.bc.fi', 'Sent from contact form', $_POST['message'] . ' sent by ' . $_POST['username']);
if ($sent_message) {
	echo "Mail was delivered";
} else {
	"Mail was not delivered";
};

?>