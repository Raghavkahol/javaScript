var div1=document.getElementById("users");

var usr=[];
usr=localUser();

//load data from browser history
function localUser()
{
	if (!localStorage.userslist)
	{
		//default to empty array
		localStorage.userslist = JSON.stringify([]);
	}
return JSON.parse(localStorage.userslist);
}
 
  
//store in browser history
function store(products)
{
localStorage.userslist = JSON.stringify(products);
}

var l=usr.length;
for(var i=0;i<l;i++){
	var ob=new Object();
	ob.name=usr[i].name;
	ob.email=usr[i].emailVal;
	ob.pswrd=usr[i].pswrdVal;
	addToDom(ob);
	
}
 //return index of particular dom entery from array
function getArrayIndex(email){
    for(var i=0;i<usr.length;i++)
		if(usr[i].emailVal==email)
			return i;
}

//delete particular entry from array having passed "id"
function removeFromArray(id){
  		usr.splice(id,1);
		//localStorage.userslist = JSON.stringify([]);
		store(usr);
}

 
function addToDom(ob){
	var dv=document.createElement("div");
	dv.setAttribute("id","usrs");
	var br=document.createElement("br");
	dv.appendChild(br);
	
	var nameD=document.createElement("label");
	nameD.innerHTML="Name: ";
	dv.appendChild(nameD);
	var nm=document.createElement("label");
	nm.innerHTML=ob.name;
	dv.appendChild(nm);
	var br=document.createElement("br");
	dv.appendChild(br);
	
	
	var emailD=document.createElement("label");
	emailD.innerHTML="Email: ";
	dv.appendChild(emailD);
	
	var emal=document.createElement("label");
	emal.innerHTML=ob.email;
	dv.appendChild(emal);
	var br=document.createElement("br");
	dv.appendChild(br);
	
	
	var pswrdD=document.createElement("label");
	pswrdD.innerHTML="Password: ";
	dv.appendChild(pswrdD);
	
	var ps=document.createElement("label");
	ps.innerHTML=ob.pswrd;
	dv.appendChild(ps);
	var br=document.createElement("br");
	dv.appendChild(br);
	
		
	var dlt=document.createElement("Button");
	dlt.innerHTML="Delete";
	dv.appendChild(dlt);
	
	dlt.addEventListener("click",function(event){
		var target=event.target.parentNode;
		var index=getArrayIndex(parseInt(target.id));
       	removeFromArray(index);  //remove from array
		target.parentNode.removeChild(target);  //remove from dom
        
	});
	

	div1.appendChild(dv);
	var br=document.createElement("br");
	div1.appendChild(br);
	
}