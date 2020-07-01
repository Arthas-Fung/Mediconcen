<?php
include 'settings.php';

$loginEmail="";
$loginPassword="";
if(isset($_REQUEST["loginEmail"])) {
	$loginEmail=$_REQUEST["loginEmail"];
}
if(isset($_REQUEST["loginPassword"])) {
	$loginPassword=$_REQUEST["loginPassword"];
}

$conn = connect();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT phone_number, address 
FROM user_profile 
WHERE email = '" . $loginEmail . "' AND password = '" . $loginPassword ."' ";
$result = mysqli_query($conn, $sql);

$output = array();
$output["response"] = array();
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

echo json_encode($output);

$conn->close();
?>

