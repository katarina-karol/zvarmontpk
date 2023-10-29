dc_Ns = (navigator.appName.indexOf("Netscape") !=-1);
document.onmousemove = mmPos;

function mmPos(ev){
	mX = ((dc_Ns) ? ev.layerX : window.event.offsetX+70);
	mY = ((dc_Ns) ? ev.layerY : window.event.offsetY+250);
	
}

function showInfoPopUp(elm){

document.getElementById(elm).style.top = mY + "px";
document.getElementById(elm).style.left = mX + "px";
document.getElementById(elm).style.visibility = "visible";
}

function hideInfoPopUp(elm){

document.getElementById(elm).style.top = "0px";
document.getElementById(elm).style.left = "0px";
document.getElementById(elm).style.visibility = "hidden";
}

function ContentPreviewSet(id,url,name)
{
	if(document.getElementById('imgContenetGalleryPreview'))
	{
		document.getElementById('imgContenetGalleryPreview').src=url;
		document.getElementById('imgContenetGalleryPreview').alt=name;
		document.getElementById('imgContenetGalleryPreview').title=name;
	}
}

function order_shippingdata(obj)
{  
    var ischecked = obj.checked;
    if(ischecked)
    {
       document.getElementById('txtSUname').value=document.getElementById('txtFname').value;
       document.getElementById('txtSLname').value=document.getElementById('txtLName').value;       
       document.getElementById('txtSStreet').value=document.getElementById('txtStreet').value;       
       document.getElementById('txtSCity').value=document.getElementById('txtCity').value;    
       document.getElementById('txtSZip').value=document.getElementById('txtPSC').value;
       document.getElementById('txtSState').value=document.getElementById('txtState').value;
       document.getElementById('txtSTel').value=document.getElementById('txtTel').value;
       document.getElementById('txtSFax').value=document.getElementById('txtFax').value;
       document.getElementById('txtSEmail').value=document.getElementById('txtEmail').value;
    }
}
/*var currentX = 0;
var currentY = 0;
	
if (document.captureEvent)
{
  document.captureEvent(Event.MOUSEMOVE);
}

function getMousePosition(evt)
{
  if (window.event)
  {
    currentX = window.event.clientX + document.body.scrollLeft;
    currentY = window.event.clientY + document.body.scrollTop;
  }
  else if (evt)
  {
    currentX = evt.pageX;
    currentY = evt.pageY;
  }
}

document.onmousemove = getMousePosition;

function positionElement(id)
{
  elem = document.getElementById(id);
  if (elem)
  {
    elem.style.left = (currentX + 10) + "px";
    elem.style.top = (currentY + 10) + "px";
  }
}

function hideToolTip(id)
{
  elem = document.getElementById(id);
  if (elem)
  {
    elem.style.visibility="hidden";
  }
}

function showToolTip(id)
{
  elem = document.getElementById(id);
  if (elem)
  {
    elem.style.visibility="visible";
  }
}*/

/*
var mouseX,mouseY,a,b;
var offsetX = 15;
var offsetY = 15;
var is_displayed = 0;
var over;

var act;

function popLayer(elem,i,w,h)
{  
  over = getObject(elem);
  
  if (act != i) 
  {
	  over.style.width = w+'px';
	  over.style.height = h+'px';
	  over.style.background = 'transparent url('+i+') center no-repeat';
	  act = i;
  }
  over.style.left = mouseX+offsetX;
  over.style.top = mouseY+offsetY;
  over.style.visibility = "visible";

  is_displayed = 1;
}

function hideLayer()
{
  over.style.visibility = "hidden";
  over.style.left = 100;
  over.style.top = 100;
  is_displayed = 0;
}

function handlerMM(e)
{
  isNav = document.all ? 1 : 0;

  mouseX = e ? e.pageX : window.event.x;
  mouseY = e ? e.pageY : window.event.y;
 
  if (isNav) 
  {
	mouseX = mouseX + self.document.body.scrollLeft;
	mouseY = mouseY + self.document.body.scrollTop;
  }
  else
  {
	mouseX =  document.documentElement.scrollLeft;
    mouseY =  document.documentElement.scrollTop;
  }
  
  if(is_displayed == 1)
  {		
		over.style.left = mouseX+offsetX+'px';
		over.style.top = mouseY+offsetY+'px';
  }
}

if (document.captureEvents)
   document.captureEvents(Event.MOUSEMOVE);

document.onmousemove = handlerMM;

var ie4 = document.all ? 1 : 0;
var dom = document.getElementById ? 1 : 0;

function getObject(objName) 
{
	if (dom)
		return document.getElementById(objName);
	else if (ie4)
		return document.all[objName];
}
*/