var div1=document.getElementById("list");
var div3=document.getElementById("limit"); 
var cartList=[];
cartList=local(); 
total=0;
addArry(total);
finalList=[]
//generate "break"
function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
} 
//
//
var user=[];
var user=local1();
//

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
//
//store in browser history
function store(products)
{
		localStorage.cart = JSON.stringify(products);
}

function local()
{
if (!localStorage.products)
{
//default to empty array
localStorage.products = JSON.stringify([]);
}
return JSON.parse(localStorage.cart);
} 

//add array's data to dom
function addArry(total){
 for(var i=0;i<cartList.length;i++){
		var object=new Object();
		object.id=cartList[i].id;
		object.name=cartList[i].name;
		object.desc=cartList[i].desc;
		object.price=cartList[i].price;
		total=total+parseInt(object.price);
		object.quantity=cartList[i].quantity;
		productId=object.id;
		addToDOM(object);
}
}

//return the index of valid entry
function getArrayIndex(index){
	var i;
	for(i=0;i<cartList.length;i++){
		if(cartList[i].id==index)
				return i;
	}
}

//delete particular entry from array having passed "id"
function removeFromArray(id){
  		cartList.splice(id,1);
		localStorage.cart = JSON.stringify([]);
		store(cartList);
}

//add object to DOM
function addToDOM(object){
	var i;
	var total=0;

		  var dv=document.createElement("div");
     dv.setAttribute("id",object.id);
	 
	 var Name=document.createElement("label");
		Name.innerHTML="Name: ";
		dv.appendChild(Name);

     var name=document.createElement("label");
     name.setAttribute("id","nm");
     name.innerHTML=object.name;
     dv.appendChild(name);

    break1(dv);
     	var Desc=document.createElement("label");
		Desc.innerHTML="Description: ";
		dv.appendChild(Desc);
		
     var name1=document.createElement("label");
	  name1.setAttribute("id","dsc");
     name1.innerHTML=object.desc;
     dv.appendChild(name1);

     break1(dv);

		var Price=document.createElement("label");
		Price.innerHTML="Price: ";
		dv.appendChild(Price);
		
	   var name2=document.createElement("label");
	name2.setAttribute("id","prc");
     name2.innerHTML=object.price;
     dv.appendChild(name2);
		
     break1(dv);

	var btn1=document.createElement("button");
		btn1.innerHTML="ADD";
		dv.appendChild(btn1);
	 btn1.addEventListener("click",function(){
		 finalList.push(object);
		 	var target=event.target.parentNode;
			var index=getArrayIndex(object.id);
			removeFromArray(index);
			target.parentNode.removeChild(target);
	 });
	 
	 var btn2=document.createElement("button");
		btn2.innerHTML="Remove";
		dv.appendChild(btn2);
		btn2.addEventListener("click",function(){
			var target=event.target.parentNode;
			var index=getArrayIndex(object.id);
			removeFromArray(index);
			target.parentNode.removeChild(target);
	 });
	
     break1(dv);
   div1.append(dv);
 
	
}
function store1(finalList){
	localStorage.finallist=JSON.stringify(finalList);
}
break1(div1);
var anchr=document.createElement("a");
anchr.setAttribute("href","showFinalList.html");
anchr.innerHTML="CHECKOUT";
div1.append(anchr);
	 anchr.addEventListener("click",function(){
		 store1(finalList);
	 });