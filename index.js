const userName=document.getElementById("username");
const passWord=document.getElementById("password");
const subMit=document.getElementById("submitbtn");
const myTxt=document.getElementById("mypara");


let USERNAME,PASSWORD;

subMit.onclick=function(){
    USERNAME=userName.value;
    PASSWORD=passWord.value;

    if(USERNAME=="karan20" && PASSWORD=="karan@$"){
        myTxt.textContent="You Are Logged In !"
      }
      else if(USERNAME=="" || PASSWORD==""){
          myTxt.textContent="Please Enter The Required Credintials !"
      }
      else{
          myTxt.textContent="InValid Credintials Please Try Again !"
      }
}

