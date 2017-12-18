 var lg=document.getElementById("rg");
 users=[];
 users=local();
 var nme=document.createElement("label");
 nme.innerHTML="Name ";
 lg.appendChild(nme);
 


 var nameVal=document.createElement("input");
 nameVal.setAttribute("id","name");
 nameVal.setAttribute("placeholder","Enter ur Name");
 lg.appendChild(nameVal);
 

 
 var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);

 var email=document.createElement("label");
 email.innerHTML="Email "
 lg.appendChild(email);
 
 var emailVal=document.createElement("input");
 emailVal.setAttribute("id","emailId");
 emailVal.setAttribute("placeholder","Enter emailId");
 lg.appendChild(emailVal);
 
 
  var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);

  var pswrd=document.createElement("label");
 pswrd.innerHTML="Password "
 lg.appendChild(pswrd);
 
 var pswrdVal=document.createElement("input");
  pswrdVal.setAttribute("type","password");
 pswrdVal.setAttribute("id","password");
 pswrdVal.setAttribute("placeholder","Enter Password");
 lg.appendChild(pswrdVal);
 
   
 var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);
 
  var conpswrd=document.createElement("label");
 conpswrd.innerHTML="Confirm Password "
 lg.appendChild(conpswrd);
 
 var conpswrdVal=document.createElement("input");
 conpswrdVal.setAttribute("type","password");
 conpswrdVal.setAttribute("id","conpswrd");
 conpswrdVal.setAttribute("placeholder","Re-enter Password");
 lg.appendChild(conpswrdVal);
 
 var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);
 
  var enter=document.createElement("button");
  enter.setAttribute("id","buttn");
 enter.innerHTML="SignUp"
 lg.appendChild(enter);
 
 
 function valid(prodcts){
	 
	 
	 for(var i=0;i<users.length;i++){
		 if(users[i].emailVal==prodcts.emailVal)
			return 0;
	 }
		return 1;
 }
 
 
 //store in browser history
function store(prodcts)
{
		localStorage.userslist = JSON.stringify(prodcts);
}
 //store in browser history
function store1(prodcts)
{
		sessionStorage.currentuser = JSON.stringify(prodcts);
} 




//load data from browser history
function local()
{
	if (!localStorage.userslist)
		{
			//default to empty array
			localStorage.userslist= JSON.stringify([]);
		}
	return JSON.parse(localStorage.userslist);
}
 
 
 
//check validation and store in local storage
document.getElementById("buttn").addEventListener("click",function(event){
	var ob=new Object();
	var count=0;
	if(!nameVal.value){
		alert("Please Enter your Name");
	}else{
		count+=1;
		ob.name=nameVal.value;
	}
	
	if(!emailVal.value&&count==1){
		alert("Please Enter your EmailId");
	}else{
		count+=1;
		ob.emailVal=emailVal.value;
	}
	
	
	
	if(!pswrdVal.value&&count==2){
		alert("Please Enter your Password");
	}else if(pswrdVal.value.length<8){
		alert("Password should be atleast 8 characters long");
	}else if(pswrdVal.value!=conpswrdVal.value){
		alert("Please re-confirm your password");
	}else{
		var l=pswrdVal.value.length;
		var cnt=0;
		for(var i=0;i<l;i++){
			if(!isNaN(pswrdVal.value[i]))
				cnt+=1;
		}
		if(cnt==0)
			alert("Password should have atleast a number");
		else{count+=1;
		ob.pswrdVal=pswrdVal.value;
		}
	}
	
	if(valid(ob)==1&&count==3){
		users.push(ob);
		store(users);
		ar=[];
		ar.push(ob);
		store1(ar);
		
		window.location.assign("homePageProduct.html");
	}else if(count==3&&valid(ob)==0){
		alert("You are already registered");
	}
	
});