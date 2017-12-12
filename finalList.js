var div1=document.getElementById("list");
var flist=[];
flist=local();
addToDOM();

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
     	var Desc=document.createElement("label");
		Desc.innerHTML="Description: ";
		dv.appendChild(Desc);
		
     var name1=document.createElement("label");
	  name1.setAttribute("id","dsc");
     name1.innerHTML=flist[i].desc;
     dv.appendChild(name1);

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