var div1=document.getElementById("list"); 
var div2=document.getElementById("bton"); 
var div3=document.getElementById("limit"); 
var productId=1; 
var cartArray=[];
var productArray=[];
productArray=local(); //store local storage's data in array
addArry();        //add array's value to dom

cartArray=localCart();
//
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
var guest=[];
guest=localGuest();

if(guest.length>0){
	var obje=new Object();
		obje.id=guest[0].id;
		
		obje.email=user[0].emailVal;
	//	console.log(obje.email);
		obje.name=guest[0].name;
		//obj.desc=productArray[index].desc;
		
		obje.price=guest[0].price;
	cartArray.push(obje);
}

//will check wether user is signed in or not
function localGuest()
{
	if (!sessionStorage.guestData)
	{
		//default to empty array
		sessionStorage.guestData = JSON.stringify([]);
	}
	return JSON.parse(sessionStorage.guestData);
} 

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

//load data from browser history
function local()
{
if (!localStorage.products)
{
//default to empty array
localStorage.products = JSON.stringify([]);
}
return JSON.parse(localStorage.products);
} 

//load cart data from browser
//load data from browser history
function localCart()
{
if (!localStorage.cart)
{
//default to empty array
localStorage.cart = JSON.stringify([]);
}
return JSON.parse(localStorage.cart);
} 

//generate "break"
function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
} 

//store cartArray in local storage 
div2.addEventListener("click",function(event){
	localStorage.cart=JSON.stringify(cartArray); 
});
//add array's data to dom
function addArry(){
 for(var i=0;i<productArray.length;i++){
		var object=new Object();
		object.id=productArray[i].id;
		object.name=productArray[i].name;
		object.desc=productArray[i].desc;
		object.price=productArray[i].price;
		object.quantity=productArray[i].quantity;
		productId=object.id;
		addToDOM(object);
}
productId++;
}

//delete entire product's list
function deleteList(){
	 child=div1.childNodes;
	for(var i=0;child.length>0;)
            div1.removeChild(child[i]);
}
//store in browser history
function store(products)
{
		localStorage.products = JSON.stringify(products);
}

//return the index of valid entry
function getArrayIndex(index){
	var i;
	for(i=0;i<productArray.length;i++){
		if(productArray[i].id==index)
				return i;
	}
}


function store3(ar){
	sessionStorage.guestData=JSON.stringify(ar);
}
//store and show added product in dom
function addToDOM(objProduct){
    var dv=document.createElement("div");
     dv.setAttribute("id",objProduct.id);
	 
	 var Name=document.createElement("label");
		Name.innerHTML="Name: ";
		dv.appendChild(Name);

		//break1(div);
     var name=document.createElement("label");
     name.setAttribute("id","nm");
     name.innerHTML=objProduct.name;
     dv.appendChild(name);

    break1(dv);
     	var Desc=document.createElement("label");
		Desc.innerHTML="Description: ";
		dv.appendChild(Desc);
		
     var name1=document.createElement("label");
	  name1.setAttribute("id","dsc");
     name1.innerHTML=objProduct.desc;
     dv.appendChild(name1);

     break1(dv);

		var Price=document.createElement("label");
		Price.innerHTML="Price: ";
		dv.appendChild(Price);
		
	   var name2=document.createElement("label");
	name2.setAttribute("id","prc");
     name2.innerHTML=objProduct.price;
     dv.appendChild(name2);

     break1(dv);

	 var Quantity=document.createElement("label");
		Quantity.innerHTML="Quantity:";
		dv.appendChild(Quantity);
		
       var name3=document.createElement("label");
	name3.setAttribute("id","qtn");
     name3.innerHTML=objProduct.quantity;
     dv.appendChild(name3);

   break1(dv);

    var butn1=document.createElement("button");
	butn1.setAttribute("id","btn");
	butn1.innerHTML="Add to cart";
	dv.appendChild(butn1); 
	
	butn1.addEventListener("click",function(event){
	if(valid==1){
		var target=event.target.parentNode; 
		var index=getArrayIndex(parseInt(target.id)); 
	
		
		if(productArray[index].quantity==0)
			alert("Not available");
		else{
		productArray[index].quantity=productArray[index].quantity-1;
		}
			var obje=new Object();
		obje.id=productArray[index].id;
		
		obje.email=user[0].emailVal;
		console.log(obje.email);
		obje.name=productArray[index].name;
		//obj.desc=productArray[index].desc;
		
		obje.price=productArray[index].price;
		//obj.quantity=productArray[index].quantity;
		cartArray.push(obje);
		
		//localStorage.products = JSON.stringify([]);
		store(productArray); 
		deleteList(); //delete all enteries from dom
        addArry(); //store edited values to dom
	}else{
			var ar=[];
			var obj=new Object();
			var target=event.target.parentNode; 
		var index=getArrayIndex(parseInt(target.id)); 
	
		obj.id=productArray[index].id;
		obj.name=productArray[index].name;
		obj.desc=productArray[index].desc;
		obj.price=productArray[index].price;
		obj.quantity=productArray[index].quantity;
		ar.push(obj);
		store3(ar);
			alert("You Need to login first");
			document.location.assign("login.html");
	}
	});
	
	break1(dv);
	break1(dv);
	div1.appendChild(dv);
	break1(div1);
}