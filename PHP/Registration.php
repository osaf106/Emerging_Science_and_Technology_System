<?php
// Retrieve form data
$name = $_POST['form-id-field'];
$fatherName = $_POST['form-name-field'];
$dob = $_POST['form-name-field'];
$email = $_POST['form-email-field'];
$contactNumber = $_POST['form-pass-field'];
$address = $_POST['form-repass-field'];

// Sanitize the data
$name = mysqli_real_escape_string($conn, $name);
$fatherName = mysqli_real_escape_string($conn, $fatherName);
$dob = mysqli_real_escape_string($conn, $dob);
$email = mysqli_real_escape_string($conn, $email);
$contactNumber = mysqli_real_escape_string($conn, $contactNumber);
$address = mysqli_real_escape_string($conn, $address);
?>

<?php
// Create the SQL query
$sql = "INSERT INTO students (name, father_name, dob, email, contact_number, address)
        VALUES ('$name', '$fatherName', '$dob', '$email', '$contactNumber', '$address')";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
