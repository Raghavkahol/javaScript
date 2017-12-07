var div1=document.getElementById("list"); 
var div2=document.getElementById("bton"); 
var productId=1; 
var cartArray=[];
var productArray=[] ;
productArray=local(); //store local storage's data in array
addArry();        //add array's value to dom
console.log(productArray.length);
//load data from browser history
function local()
{
/*if (!localStorage.products)
{
//default to empty array
localStorage.products = JSON.stringify([]);
}*/
return JSON.parse(localStorage.products);
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

    var butn=document.createElement("button");
	butn.setAttribute("id","btn");
	butn.innerHTML="Add to cart";
	dv.appendChild(butn); 
	
	butn.addEventListener("click",function(event){
		var target=event.target.parentNode; 
		var index=getArrayIndex(parseInt(target.id)); 
	
		
		if(productArray[index].quantity==0)
			alert("Not available");
		else{
		productArray[index].quantity=productArray[index].quantity-1;
		}
			var obj=new Object();
		obj.id=productArray[index].id;
		obj.name=productArray[index].name;
		obj.desc=productArray[index].desc;
		obj.price=productArray[index].price;
		obj.quantity=productArray[index].quantity;
		cartArray.push(obj);
		
		//localStorage.products = JSON.stringify([]);
		store(productArray); 
		deleteList(); //delete all enteries from dom
        addArry(); //store edited values to dom
		
	});
	
	break1(dv);
	break1(dv);
	div1.appendChild(dv);
	break1(div1);
}
