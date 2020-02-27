var x=document.createElement ("div");
x.id="img";
x.style.color="red";
var t=document.createTextNode("hello.");
x.appendChild(t);
document.body.appendChild(x);
document.getElementById("img").onmouseover=function() {
mouseOver()
};
function mouseOver(){
   document.getElementById("img").style.color="blue";
}
////
<html>
<head>
<title>create a div and change the color onmouse over</title>
</head>
<body>
<script src="prgm1.js"></script>
</body>
</html>
