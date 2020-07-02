<?php
include_once("settings.php");

$loginEmail="";
$loginPassword="";
$clinicName="";
$phoneNumber="";
$address="";
if(isset($_REQUEST["loginEmail"])) {
	$loginEmail=$_REQUEST["loginEmail"];
}
if(isset($_REQUEST["loginPassword"])) {
	$loginPassword=$_REQUEST["loginPassword"];
}
if(isset($_REQUEST["clinicName"])) {
	$clinicName=$_REQUEST["clinicName"];
}
if(isset($_REQUEST["phoneNumber"])) {
	$phoneNumber=$_REQUEST["phoneNumber"];
}
if(isset($_REQUEST["address"])) {
	$address=$_REQUEST["address"];
}

$conn = connect();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT user_id 
FROM user_profile
WHERE email = '" . $loginEmail . "' ";
$result = mysqli_query($conn, $sql);
$output = array();
$output["response"] = array();
if ($result->num_rows > 0) {
	$code = 202;
	$message = "User alreadt exist";
	
	$output["response"]["user"] = (object) array();
} else {
	$sql = "INSERT INTO user_profile 
	(`user_id`, `email`, `password`, `clinic_name`, `phone_number`, `address`) 
	VALUES (NULL, '" . $loginEmail . "', '" . $loginPassword . "', '" . $clinicName . "', '" . $phoneNumber . "', '" . $address . "' )";
	mysqli_query($conn, $sql);

	$sql = "SELECT phone_number, address 
	FROM user_profile 
	WHERE email = '" . $loginEmail . "' AND password = '" . $loginPassword ."' ";
	$result = mysqli_query($conn, $sql);

	if ($result->num_rows > 0) {
		$code = 200;
		$message = "Success";
		
		$row = $result->fetch_assoc();
		$output["response"]["user"] = array("phone_number" => $row["phone_number"], "address" => $row["address"]);
	} else {
		$code = 201;
		$message = "User Name or Password incorrect";
		
		$output["response"]["user"] = (object) array();
	}
	$output["meta"] = array(
		"code" => $code,
		"message" => $message
	);

	
}
$output["meta"] = array(
	"code" => $code,
	"message" => $message
);

echo json_encode($output);

$conn->close();
?>

