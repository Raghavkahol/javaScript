var div1=document.getElementById("logout");
var div2=document.getElementById("nvgtn");
var div5=document.getElementById("panel");
//get data about user
var ad=[];
ad=session();
     //load data from browser history
function session()
{
if (!localStorage.adminUser)
{
//default to empty array
localStorage.adminUser = JSON.stringify([]);
}
return JSON.parse(localStorage.adminUser);
}

function break1(div2){
	br=document.createElement("br");
	div2.append(br);
}


//delete 
function deletePanel(){
       var child=div5.childNodes;
    for(var i=0;child.length>0;){
             div5.removeChild(child[i]);
}
}	

	//log out button
 var butn113=document.createElement("button");
	butn113.setAttribute("id","logot");
	butn113.setAttribute("style","float:right");
	butn113.innerHTML="Logout";
	div1.appendChild(butn113); 
	//logout funtionality
	document.getElementById("logot").addEventListener("click",function(){
		sessionStorage.currentuser = JSON.stringify([]);
		window.location.assign("homepage.html");
	});

 var name11=document.createElement("label");
	name11.setAttribute("id","nme");
	name11.setAttribute("style","float:right");
	name11.innerHTML="Hi ,"+ad[0].name;
	div1.appendChild(name11);
	
	var btnhome=document.createElement("button");
	btnhome.setAttribute("id","home");
	btnhome.setAttribute("style","width:100px");
	btnhome.innerHTML="Home";
	div2.appendChild(btnhome);
	
	btnhome.addEventListener("click",function(event){
		window.location.assign("adminDashboard.html");
	});
	break1(div2);
	break1(div2);
	break1(div2);
	break1(div2);
	
	var btnprdct=document.createElement("button");
	btnprdct.setAttribute("id","product");
	btnprdct.innerHTML="Product";
	btnprdct.setAttribute("style","width:100px");
	
	div2.appendChild(btnprdct);
	btnprdct.addEventListener("click",function(event){
		pnl=document.createElement("iframe");
		pnl.setAttribute("src","manage-products.html");
		pnl.setAttribute("width","85%");
		pnl.setAttribute("height","85%");
		deletePanel();
		div5.appendChild(pnl);
		
	});
	break1(div2);
	break1(div2);
	break1(div2);
	break1(div2);
	
	var btnusr=document.createElement("button");
	btnusr.setAttribute("id","user");
	btnusr.innerHTML="User";
	btnusr.setAttribute("style","width:100px");
	div2.appendChild(btnusr);
		btnusr.addEventListener("click",function(event){
		pnl=document.createElement("iframe");
		pnl.setAttribute("src","usersData.html");
		pnl.setAttribute("width","85%");
		pnl.setAttribute("height","85%");
		deletePanel();
		div5.appendChild(pnl);
		
	});
	break1(div2);
	break1(div2);
	break1(div2);
	break1(div2);
	
	var btnordr=document.createElement("button");
	btnordr.setAttribute("id","ordr");
	btnordr.innerHTML="Order";
	btnordr.setAttribute("style","width:100px");
	div2.appendChild(btnordr);
		btnordr.addEventListener("click",function(event){
		pnl=document.createElement("iframe");
		pnl.setAttribute("src","orders.html");
		pnl.setAttribute("width","85%");
		pnl.setAttribute("height","85%");
		deletePanel();
		div5.appendChild(pnl);
		
	});