var div1=document.getElementById("list");
var cartList=[];
cartList=local(); 
addToDOM();

//generate "break"
function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
} 

function local()
{
/*if (!localStorage.products)
{
//default to empty array
localStorage.products = JSON.stringify([]);
}*/
return JSON.parse(localStorage.cart);
} 

function addToDOM(){
	var i;
	var total=0;
	for(i=0;i<cartList.length;i++){
		  var dv=document.createElement("div");
     dv.setAttribute("id",cartList[i].id);
	 
	 var Name=document.createElement("label");
		Name.innerHTML="Name: ";
		dv.appendChild(Name);

		//break1(div);
     var name=document.createElement("label");
     name.setAttribute("id","nm");
     name.innerHTML=cartList[i].name;
     dv.appendChild(name);

    break1(dv);
     	var Desc=document.createElement("label");
		Desc.innerHTML="Description: ";
		dv.appendChild(Desc);
		
     var name1=document.createElement("label");
	  name1.setAttribute("id","dsc");
     name1.innerHTML=cartList[i].desc;
     dv.appendChild(name1);

     break1(dv);

		var Price=document.createElement("label");
		Price.innerHTML="Price: ";
		dv.appendChild(Price);
		
	   var name2=document.createElement("label");
	name2.setAttribute("id","prc");
     name2.innerHTML=cartList[i].price;
     dv.appendChild(name2);
		total=total+parseInt(cartList[i].price);
     break1(dv);

	 var Quantity=document.createElement("label");
		Quantity.innerHTML="Quantity:";
		dv.appendChild(Quantity);
		
       var name3=document.createElement("label");
	name3.setAttribute("id","qtn");
     name3.innerHTML=cartList[i].quantity;
     dv.appendChild(name3);

   break1(dv);
   div1.append(dv);
   break1(div1);
   break1(div1);
	}
	 var Quantit=document.createElement("label");
		Quantit.innerHTML="Total:";
		div1.appendChild(Quantit);
		
       var name3=document.createElement("label");
	//name3.setAttribute("id","qtn");
     name3.innerHTML=total;
     div1.appendChild(name3);
	 break1(div1);
	
}