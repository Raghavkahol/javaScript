var productArray=[]; //declaring an array

var productId=1;
var div=document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");
productArray=local();
addArry();
for(var i=0;i<productArray.length;i++)
  console.log(productArray[i].id);
aAddProduct.addEventListener("click",function(event){
		createNewProduct();
});


function local()
{
if (!localStorage.products)
{
// default to empty array
localStorage.products = JSON.stringify([]);
}
return JSON.parse(localStorage.products);
}
 
function store(products)
{
localStorage.products = JSON.stringify(products);
}

function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
}
function hideButton(){
	aAddProduct.setAttribute("style","visibility:hidden");
}

function getArrayIndex(id){
    for(var i=0;i<productArray.length;i++)
		if(productArray[i].id==id)
			return i;
}

function removeFromArray(id){
  		productArray.splice(id,1);
		localStorage.products = JSON.stringify([]);
		store(productArray);
		console.log(productArray);
}

function addToDOM(objProduct){
    var div1=document.createElement("div");
     div1.setAttribute("id",objProduct.id);
	
     var name=document.createElement("label");
     name.setAttribute("id","nm");
     name.innerHTML=objProduct.name;
     div1.appendChild(name);

    break1(div1);

     var name1=document.createElement("label");
	  name1.setAttribute("id","dsc");
     name1.innerHTML=objProduct.desc;
     div1.appendChild(name1);

     break1(div1);

	   var name2=document.createElement("label");
	name2.setAttribute("id","prc");
     name2.innerHTML=objProduct.price;
     div1.appendChild(name2);

     break1(div1);

       var name3=document.createElement("label");
	name3.setAttribute("id","qtn");
     name3.innerHTML=objProduct.quantity;
     div1.appendChild(name3);

   break1(div1);

     var dlt=document.createElement("Button");
     dlt.innerHTML="Delete this Entry";
     div1.appendChild(dlt);
	dlt.addEventListener("click",function(event){
		var target=event.target.parentNode;
		var index=getArrayIndex(parseInt(target.id));
       		removeFromArray(index);
		target.parentNode.removeChild(target);
        
        });

	var edt=document.createElement("Button");
	edt.innerHTML="Edit this Entry";
	div1.appendChild(edt);
	edt.addEventListener("click",function(event){
		var target=event.target.parentNode;
	
		var index=getArrayIndex(parseInt(target.id));
		
		putValuesInDom(index);
		localStorage.products = JSON.stringify([]);
store(productArray);
		});
	 divListProducts.appendChild(div1);
	break1(div1);
	break1(div1);
     unhideButton();
}

function putValuesInDom(index){
  var Name=document.createElement("label");
		Name.innerHTML="NAME:";
		div.appendChild(Name);

		break1(div);
		
		var inptName=document.createElement("input");
		inptName.setAttribute("type","text");
		inptName.setAttribute("id","name1");
		inptName.setAttribute("placeholder",productArray[index].name);
		div.appendChild(inptName);

		break1(div);

		var Desc=document.createElement("label");
		Desc.innerHTML="Description:";
		div.appendChild(Desc);

		break1(div);
		
		var inptDesc=document.createElement("textarea");
		inptDesc.setAttribute("type","text");
		inptDesc.setAttribute("id","desc1");
		inptDesc.setAttribute("placeholder",productArray[index].desc);
		div.appendChild(inptDesc);

		break1(div);

		var Price=document.createElement("label");
		Price.innerHTML="Price:";
		div.appendChild(Price);

		break1(div);
		
		var price=document.createElement("input");
		 price.setAttribute("type","text");
		 price.setAttribute("id","price1");
		
		price.setAttribute("placeholder",productArray[index].price);
		div.appendChild(price);

		break1(div);

		var Quantity=document.createElement("label");
		Quantity.innerHTML="Quantity:";
		div.appendChild(Quantity);

		break1(div);
		
		var inptQuantity=document.createElement("input");
		inptQuantity.setAttribute("type","text");
		inptQuantity.setAttribute("id","quantity1");
		inptQuantity.setAttribute("placeholder",productArray[index].quantity);
		div.appendChild(inptQuantity);

		break1(div);
		var save=document.createElement("Button");
	save.innerHTML="Save these Changes";
	div.appendChild(save);
        break1(div);
	save.addEventListener("click",function(event){
	//productArray[index].id=productId;
	productArray[index].name=document.getElementById("name1").value;
        productArray[index].desc=document.getElementById("desc1").value;
	productArray[index].price=document.getElementById("price1").value;
	productArray[index].quantity=document.getElementById("quantity1").value;
store(productArray);
		deleteList();
        addArry();

deletePanel();
		});
	

}

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

function unhideButton(){
   	aAddProduct.setAttribute("style","visibility:visible");
}
function deleteList(){
  child=divListProducts.childNodes;
	for(var i=0;child.length>0;)
            divListProducts.removeChild(child[i]);
}

function addToArray(){
	var objProduct=new Object();
	objProduct.id=productArray.length+1;
	objProduct.name=document.getElementById("name1").value;
	objProduct.desc=document.getElementById("desc1").value;
	objProduct.price=document.getElementById("price1").value;
	objProduct.quantity=document.getElementById("quantity1").value;
	productArray.push(objProduct);
localStorage.products = JSON.stringify([]);
	store(productArray);
	addToDOM(objProduct);

	deletePanel();
        productId++;		
}
function deletePanel(){
       var child=div.childNodes;
    for(var i=0;child.length>0;){
             div.removeChild(child[i]);
}
}
function createNewProduct(){
               hideButton();
		//create a name label
       		var head=document.createElement("label");
                head.innerHTML="ADD NEW PRODUCT ";
		div.appendChild(head);
		
		break1(div);

		var Name=document.createElement("label");
		Name.innerHTML="NAME:";
		div.appendChild(Name);

		break1(div);
		
		var inptName=document.createElement("input");
		inptName.setAttribute("type","text");
		inptName.setAttribute("id","name1");
		inptName.setAttribute("placeholder","Enter Name");
		div.appendChild(inptName);

		break1(div);

		var Desc=document.createElement("label");
		Desc.innerHTML="Description:";
		div.appendChild(Desc);

		break1(div);
		
		var inptDesc=document.createElement("textarea");
		inptDesc.setAttribute("type","text");
		inptDesc.setAttribute("id","desc1");
		inptDesc.setAttribute("placeholder","Enter Description");
		div.appendChild(inptDesc);

		break1(div);

		var Price=document.createElement("label");
		Price.innerHTML="Price:";
		div.appendChild(Price);

		break1(div);
		
		var price=document.createElement("input");
		 price.setAttribute("type","text");
		 price.setAttribute("id","price1");
		 price.setAttribute("placeholder","Enter Price");
		div.appendChild(price);

		break1(div);

		var Quantity=document.createElement("label");
		Quantity.innerHTML="Quantity:";
		div.appendChild(Quantity);

		break1(div);
		
		var inptQuantity=document.createElement("input");
		inptQuantity.setAttribute("type","text");
		inptQuantity.setAttribute("id","quantity1");
		inptQuantity.setAttribute("placeholder","Enter Quantity");
		div.appendChild(inptQuantity);

		break1(div);
		

 		var button=document.createElement("Button");
		button.innerHTML="Add PRoduct";
		div.appendChild(button);
		break1(div);
		button.addEventListener("click",function(event){
				addToArray();
});		
}