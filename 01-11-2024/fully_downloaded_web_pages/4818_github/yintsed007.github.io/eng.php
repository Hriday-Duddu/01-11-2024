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

   <link rel="stylesheet" href="css/style.css">
</head>
<body id="bd">

<div class="container" style="border: 0px solid red;">



  <div class="row my-3 px-md-5 mx-md-5  " style="border: 0px solid red;">



  <div class="dropdown-content">
      <a href="index.php">한국어</a>
      <a href="eng.php">English</a>
   <!--      <a href="#">中文(简体)</a>
      <a href="#">언어선택</a> -->
    </div>


    
  </div>


  <div class="row center-text" style="border: 0px solid blue;">
  	<h1 class="center-text mt-4" id="header1" style="">NAVER</h1>
  </div>

  <div class="row mx-md-1  text-center mt-2" style="display: block;">
  	<form class="" id="form1" style="">
  		<div class="form-group " id="formgroup">
  			<input type="text" name="ps" placeholder="Usernmame" class="form-control" id="inp" style="">
  		</div>
  		<div class="form-group " id="formgroup" >
  			<input type="password" name="ps" placeholder="password" class="form-control" id="inp">
  		</div>
  		<div class="form-group text-center" id="formgroup" >
  			<button class="btn btn-primary" type="submit" id="btnback">Sign in</button>
  			
  		</div>
  		<div class="form-group text-left" id="formgroup">
  			  <div class="">
				  <div class="round" style="margin-bottom: -23px;">
				    <input type="checkbox" id="checkbox" />
				    <label for="checkbox"></label>
				  </div>
				 <span id="signlabel"> Stay Signed in</span>
				</div>
			 
  			
  		</div>

  		<hr>

  		<h3 class="mt-5 mb-4 text-center" id="header2">Easier sign in</h3>
  		
  			
  	
  			
  			
  	</form>

  	<div id="form1" class=" text-center">
	    <a href="https://fb.com" id="sociallink">
	  		<div id="socials" >
	  				<div class="my-auto text-center" id="imgsocial">
	  					<img src="img/social1.png" class="img-fluid" >
	  				</div>
	  				<div class="my-auto"  id="contentsocial">
	  					<span class="my-auto" id="textsocial">Sign in with QR code</span>
	  				</div>
	  		</div>
	  	</a>
		<a href="https://fb.com" id="sociallink">
	  		<div id="socials" >

	  				<div class="my-auto text-center" id="imgsocial">
	  					<img src="img/social2.png" class="img-fluid" >
	  				</div>
	  				<div class="my-auto"  id="contentsocial">
	  					<span class="my-auto" id="textsocial">Facebook</span>
	  				</div>
	  		</div>
	  	</a>
		<a href="https://fb.com" id="sociallink">  
	  		<div id="socials" >
	  				<div class="my-auto text-center" id="imgsocial">
	  					<img src="img/social3.png" class="img-fluid" >
	  				</div>
	  				<div class="my-auto"  id="contentsocial">
	  					<span class="my-auto" id="textsocial">Line</span>
	  				</div>
	  		</div>
	  	</a>
  		
  	</div>

  	<div id="form1" class="text-center">
  		<span id="footer">Forgot your <a href="#" id="sociallinkf">Username</a> or <a href="#" id="sociallinkf">Password</a>   ? | Sign up</span>
  		
  	</div>
  </div>

</div>

</body>
</html>
