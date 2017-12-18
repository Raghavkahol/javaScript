var lg=document.getElementById("log");
var users=[];
users=local();
curuser=local1();
//load data from browser history
console.log(curuser.length);
function local()
{
	if (!localStorage.userslist)
		{
			//default to empty array
			localStorage.userslist= JSON.stringify([]);
		}
	return JSON.parse(localStorage.userslist);
}
 
 function local1()
{
	if (!sessionStorage.currentuser)
		{
			//default to empty array
			sessionStorage.currentuser= JSON.stringify([]);
		}
	return JSON.parse(sessionStorage.currentuser);
}
  //store in browser history
function store1(prodcts)
{
		sessionStorage.currentuser = JSON.stringify(prodcts);
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
 
  var rgstr=document.createElement("button");
 rgstr.innerHTML="Register"
 rgstr.setAttribute("id","rgst");
 lg.appendChild(rgstr);
 
 document.getElementById("rgst").addEventListener("click",function(){
	 window.location.assign("register.html");
 });
 
 //function to check validity of account
 function chck(){
	 for(var i=0;i<users.length;i++){
		 if(users[i].emailVal==email.value&&users[i].pswrdVal==pswrdVal.value){
			var ob=new Object();
			ob.name=users[i].name;
			ob.emailVal=email.value;
			curuser.push(ob);
			store1(curuser);
			return 1;
	 }
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
			 
			 window.location.assign("homePageProduct.html");
		 }else{
			 alert("Not a valid Account");
		 }
	 }
 });
 