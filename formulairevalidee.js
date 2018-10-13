
function surligne(champ, erreur)
{
    if(erreur)
        champ.style.border="1px solid #FF0000";

    else
        champ.style.border="2px solid #00FF00";
    document.getElementById('ok').innerHTML="";
}
function verifPassword(champ)
{
    if(champ.value.length <7)
    {
        surligne(champ, true);
        document.getElementById('passwordi').innerHTML="password falsch";
        document.getElementById('passwordi').style.color="#FF0000";
        document.getElementById('passwordi').style.marginLeft="50px";
        document.getElementById('ok').innerHTML="alle falsch";
        document.getElementById('ok').style.color="#FF0000";
        document.getElementById('ok').style.marginLeft="50px";
        return false;
    }
    else
    {
        surligne(champ, false);
        document.getElementById('passwordi').innerHTML="";
        return true;
    }

}
function verifMail(champ)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
       surligne(champ, true);
       document.getElementById('emaili').innerHTML="E-mail falsch";
       document.getElementById('emaili').style.color="#FF0000";
       document.getElementById('emaili').style.marginLeft="50px";
       document.getElementById('ok').innerHTML="alle falsch";
       document.getElementById('ok').style.color="#FF0000";
       document.getElementById('ok').style.marginLeft="50px";

       return false;
   }
   else
   {
       surligne(champ, false);
       document.getElementById('emaili').innerHTML="";
       return true;
   }

}




function verifPasswordw(champ)
{    var passwordtester=verif(document.getElementById('password'),document.getElementById('passwordw'));

    if(champ.value.length < 7 || passwordtester==false)
    {    if(passwordtester==false ){
        surligne(champ, true);
        document.getElementById('passwordwi').innerHTML="passwoerter stimmen nicht uberein falsch";
        document.getElementById('passwordwi').style.color="#FF0000";
        document.getElementById('passwordwi').style.marginLeft="50px";
        document.getElementById('ok').innerHTML="alle falsch";
        document.getElementById('ok').style.color="#FF0000";
        document.getElementById('ok').style.marginLeft="50px";
        return false;
      }
       if(champ.value.length < 7){
           surligne(champ, true);
           document.getElementById('passwordwi').innerHTML="passwordw falsch";
           document.getElementById('passwordwi').style.color="#FF0000";
           document.getElementById('passwordwi').style.marginLeft="50px";
           document.getElementById('ok').innerHTML="alle falsch";
           document.getElementById('ok').style.color="#FF0000";
           document.getElementById('ok').style.marginLeft="50px";
           return false;
       }

    }
    else
    {
        surligne(champ, false);
        document.getElementById('passwordwi').innerHTML="";
        return true;
    }

}
function verif(n,m)
{
    return n.value==m.value;

}
function verifForm(f)
{
    var  pseudoOk = verifPassword(f.password);
    var  mailOk = verifMail(f.email);
    var  ageOk = verifPasswordw(f.passwordw);
    var passworts=verif(f.passwordw,f.password);
    if(pseudoOk && mailOk && ageOk && passworts){
        return true;
    }else{
        return false;

    }

}