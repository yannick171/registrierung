
<?php

session_start();


?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
      <script src='https://www.google.com/recaptcha/api.js'></script>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    <title>Registrierung</title>
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	  <link rel="stylesheet" href="registrierungsformular.css">
	  <script src="formulairevalidee.js"></script>
  </head>
  
  <body>
   <fieldset>
     <legend>Regisrierung</legend>
      <div id="conversation">
	   
	   <form action="registrierungstest.php" method="post" onsubmit="return verifForm(this)">
		  <label>Email:</label><br>
        <input type="text" id="email"size="27" name="email" onblur="verifMail(this)"><br>
		   <div id="emaili"></div>
		  <label>Mot de passe:</label><br>
        <input type="password" id="password" size="27" name="password" onblur="verifPassword(this)"><br>
		   <div id="passwordi"></div>
		   <label>Mot de passe repeat:</label><br>
        <input type="password" id="passwordw" size="27" name="passwordw" onblur="verifPasswordw(this)">
		   <div id="passwordwi"></div>
        <button type="submit" id="envoyer" title="Envoyer"><img width="15px"height="20px" src="envoyer.jpg"></button>

           <div class="g-recaptcha"
                data-sitekey="6Lcg53QUAAAAAN6rYqtiDdn4vbr34WBImFZhFA4l"
                data-callback="YourOnSubmitFn">
           </div>
		   <div id="ok"></div>
      </form>
	   
	   </div><br />
      
    </fieldset>
	  
  </body>
</html>