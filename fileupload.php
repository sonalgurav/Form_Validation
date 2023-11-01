<?php
    
	if($_SERVER["REQUEST_METHOD"]=="POST")
	{
		if(isset($_FILES['image']))
		{

			echo "<pre>";
			print_r($_POST);
			echo "</pre>";
		

			$file_name = $_FILES['image']['name'];
			$file_size = $_FILES['image']['size'];
			$file_tmp = $_FILES['image']['tmp_name'];
			$file_type = $_FILES['image']['type'];


			if(move_uploaded_file($file_tmp,"upload-images/".$file_name))
			{
				echo " success fully upload";
			}
			else
			{
				echo "could not upload";
			}

		}
	}
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<h6>File Upload SuccessFully</h6>
</body>
</html>