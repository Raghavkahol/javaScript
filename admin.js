var lg=document.getElementById("admn");

var ad=[];
ad=session();


     //load data from browser history
function session()
{
if (!localStorage.adminUser)
{
//default to empty array
localStorage.adminUser = JSON.stringify([]);
}
return JSON.parse(localStorage.adminUser);
}
 
     //store in browser history
function store(products)
{
localStorage.adminUser = JSON.stringify(products);
}

 var mail=document.createElement("label");
 mail.innerHTML="Email Id";
 lg.appendChild(mail);
 

 var email=document.createElement("input");
 email.setAttribute("id","email");
 email.setAttribute("placeholder","Enter Email Id");
 lg.appendChild(email);
 
  var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);
 
 
  var pswrd=document.createElement("label");
 pswrd.innerHTML="Password"
 lg.appendChild(pswrd);
 
 var pswrdVal=document.createElement("input");
 pswrdVal.setAttribute("id","pswrd");
 pswrdVal.setAttribute("type","password");
 pswrdVal.setAttribute("placeholder","Enter Password");
 lg.appendChild(pswrdVal);
 
   var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);
 
  var log=document.createElement("button");
 log.innerHTML="Login"
 log.setAttribute("id","signin");
 lg.appendChild(log);
 
  
 //function to check validity of account
 function chck(){

		 if(ad[0].emailVal==email.value&&ad[0].pswrdVal==pswrdVal.value){
			return 1;
	 }
	 
	 return 0;
 }
 
 
 //login button funtions
  document.getElementById("signin").addEventListener("click",function(){

	  var count=0;
	 if(!email.value){
		 alert("Enter EmailId");
	 }else if(!pswrdVal.value){
		 alert("Enter Password");
	 }
	 if(email.value&&pswrdVal.value){
		 if(chck()==1){
			 
			 window.location.assign("manage-products.html");
		 }else{
			 alert("Not a valid Account");
		 }
	 }
 });