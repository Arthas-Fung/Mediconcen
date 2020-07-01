<?php
include 'settings.php';

$conn = connect();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT doctor_name, patient_name, diagnosis, medication, consultation_fee, date_time, follow_up_consultation
FROM consultation_records";
$result = mysqli_query($conn, $sql);

$output = array();
$output["response"] = array();
if ($result->num_rows > 0) {
	$code = 200;
	$message = "Success";
	
	$row = $result->fetch_assoc();
	mysqli_data_seek($result, 0);
	while($row = $result->fetch_assoc()) {
	$output["response"]["records"][] = array(
	"doctor_name" => $row["doctor_name"], "patient_name" => $row["patient_name"]
	, "diagnosis" => $row["diagnosis"], "medication" => $row["medication"], "consultation_fee" => $row["consultation_fee"]
	, "date_time" => $row["date_time"], "follow_up_consultation" => $row["follow_up_consultation"]);
	}
} else {
	$code = 201;
	$message = "No record found";
	
	$output["response"]["records"] = (array) array();
}
$output["meta"] = array(
	"code" => $code,
	"message" => $message
);

echo json_encode($output);

$conn->close();
?>

