var div1=document.getElementById("list");
var div3=document.getElementById("limit"); 
var flist=[];
flist=local();
addToDOM();

var user=[];
var user=local1();

var valid=0;
if(user.length>0){
	valid=1;
	//log out button
 var butn11=document.createElement("button");
	butn11.setAttribute("id","logout");
	butn11.setAttribute("style","float:right");
	butn11.innerHTML="Logout";
	div3.appendChild(butn11); 
	//logout funtionality
	document.getElementById("logout").addEventListener("click",function(){
		sessionStorage.currentuser = JSON.stringify([]);
		window.location.assign("login.html");
	});

 var name11=document.createElement("label");
	name11.setAttribute("id","nm");
	name11.setAttribute("style","float:right");
	name11.innerHTML="Hi ,"+user[0].name;
	div3.appendChild(name11); 
}
// 

//will check wether user is signed in or not
function local1()
{
	if (!sessionStorage.currentuser)
	{
		//default to empty array
		sessionStorage.currentuser = JSON.stringify([]);
	}
	return JSON.parse(sessionStorage.currentuser);
} 

//generate "break"
function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
} 

function local()
{
if (!localStorage.finallist)
{
//default to empty array
localStorage.finallist = JSON.stringify([]);
}
return JSON.parse(localStorage.finallist);
} 

function addToDOM(){
	var total=0;
	var i;
	for(i=0;i<flist.length;i++){
		 var dv=document.createElement("div");
     dv.setAttribute("id",flist[i].id);
	 
	 var Name=document.createElement("label");
		Name.innerHTML="Name: ";
		dv.appendChild(Name);

		//break1(div);
     var name=document.createElement("label");
     name.setAttribute("id","nm");
     name.innerHTML=flist[i].name;
     dv.appendChild(name);

    break1(dv);
     

		var Price=document.createElement("label");
		Price.innerHTML="Price: ";
		dv.appendChild(Price);
		
	   var name2=document.createElement("label");
	name2.setAttribute("id","prc");
     name2.innerHTML=flist[i].price;
     dv.appendChild(name2);
		total=total+parseInt(flist[i].price);
     break1(dv);
	 div1.append(dv);
	 break1(dv);
	 break1(dv);
	}
	break1(div1);
	var Quantit=document.createElement("label");
		Quantit.innerHTML="Total:";
		div1.appendChild(Quantit);
		
		var name3=document.createElement("label");
     name3.innerHTML=total;
     div1.appendChild(name3);
}