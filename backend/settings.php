<?php

function connect() {
	$servername = "localhost";
	$username = "id14246893_admin";
	$password = "JxU\#_b(9s}xZkyj";
	$dbname = "id14246893_mediconcen";
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	return $conn;
	$conn->close();
}

?>
