<?php
include 'settings.php';

$doctorName="";
$patientName="";
$diagnosis="";
$medication="";
$consultationFee="";
$dateTime="";
$followUpConsultation="";
if(isset($_REQUEST["doctorName"])) {
	$doctorName=$_REQUEST["doctorName"];
}
if(isset($_REQUEST["patientName"])) {
	$patientName=$_REQUEST["patientName"];
}
if(isset($_REQUEST["diagnosis"])) {
	$diagnosis=$_REQUEST["diagnosis"];
}
if(isset($_REQUEST["medication"])) {
	$medication=$_REQUEST["medication"];
}
if(isset($_REQUEST["consultationFee"])) {
	$consultationFee=$_REQUEST["consultationFee"];
}
if(isset($_REQUEST["dateTime"])) {
	$dateTime=$_REQUEST["dateTime"];
}
if(isset($_REQUEST["followUpConsultation"])) {
	$followUpConsultation=$_REQUEST["followUpConsultation"];
}

$conn = connect();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO consultation_records
(`record_id`, `doctor_name`, `patient_name`, `diagnosis`, `medication`, `consultation_fee`, `date_time`, `follow_up_consultation`) 
VALUES (NULL, '" . $doctorName . "', '" . $patientName . "', '" . $diagnosis . "', '" . $medication . "', '" . $consultationFee . "', " . $dateTime . ", '" . $followUpConsultation . "' )";
mysqli_query($conn, $sql);

$sql = "SELECT doctor_name, patient_name, date_time
FROM consultation_records 
WHERE doctor_name = '" . $doctorName . "' AND patient_name = '" . $patientName ."' AND date_time = '" . $dateTime ."' ";
$result = mysqli_query($conn, $sql);

if ($result->num_rows > 0) {
	$code = 200;
	$message = "Success";
		
	$row = $result->fetch_assoc();
	$output["response"]["user"] = array("doctorName" => $row["doctor_name"], "patientName" => $row["patient_name"], "dateTime" => $row["date_time"]);
} else {
	$code = 201;
	$message = "Cannot insert record";
		
	$output["response"]["user"] = (object) array();
}
$output["meta"] = array(
	"code" => $code,
	"message" => $message
);


$output["meta"] = array(
	"code" => $code,
	"message" => $message
);

echo json_encode($output);

$conn->close();
?>

