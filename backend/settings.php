<?php

function connect() {
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "mediconcen";
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	return $conn;
	$conn->close();
}

?>

