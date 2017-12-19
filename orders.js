var div1=document.getElementById("ordrs");
var div5=document.getElementById("panel");

var ord=[];
ord=localOrders();

//load data from browser history
function localOrders()
{
	if (!localStorage.detail)
	{
		//default to empty array
		localStorage.detail = JSON.stringify([]);
	}
return JSON.parse(localStorage.detail);
}
//load order data detail
function localdt()
{
	if (!localStorage.head)
	{
		//default to empty array
		localStorage.head = JSON.stringify([]);
	}
return JSON.parse(localStorage.head);
}

//add everything on array to dom
var l=ord.length;
for(var i=0;i<l;i++){
	var ob=new Object();
	ob.name=ord[i].name;
	ob.id=ord[i].Uid;
	ob.price=ord[i].price;
	addToDom(ob);
	
}
 
 
 //delete panel
function deletePanel(){
       var child=div1.childNodes;
    for(var i=0;child.length>0;){
             div1.removeChild(child[i]);
}
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
	
	var pswrdD=document.createElement("label");
	pswrdD.innerHTML="Price: ";
	dv.appendChild(pswrdD);
	
	var ps=document.createElement("label");
	ps.innerHTML=ob.price;
	dv.appendChild(ps);
	var br=document.createElement("br");
	dv.appendChild(br);
	
	
	
		var dt=[];
		dt=localdt();
		console.log(dt);
		var l=dt.length;
		for(var i=0;i<l;i++){
			if(dt[i].id==ob.id){
				var pswrdD=document.createElement("label");
				pswrdD.innerHTML="Email: ";
				dv.appendChild(pswrdD);
	
				var ps=document.createElement("label");
				ps.innerHTML=dt[i].email;
				dv.appendChild(ps);
				var br=document.createElement("br");
				dv.appendChild(br);
	
				var date=document.createElement("label");
				date.innerHTML="Date: ";
				dv.appendChild(date);
	
				var dt1=document.createElement("label");
				dt1.innerHTML=dt[i].date;
				dv.appendChild(dt1);
				var br=document.createElement("br");
				dv.appendChild(br);
		
		}}
	
	var radioB=document.createElement("label");
	radioB.innerHTML="Status: ";
	dv.appendChild(radioB);
	
		
	var radioBt=document.createElement("input");
	radioBt.setAttribute("type","checkbox");
	radioBt.setAttribute("name","ob.id");
	dv.appendChild(radioBt);
	
	div1.appendChild(dv);
	var br=document.createElement("br");
	div1.appendChild(br);
	div1.appendChild(dv);
	var br=document.createElement("br");
	div1.appendChild(br);
	
	div1.appendChild(dv);
	var br=document.createElement("br");
	div1.appendChild(br);
	
	div1.appendChild(dv);
	var br=document.createElement("br");
	div1.appendChild(br);
}