window.onload=function() {

var prod1 = document.getElementById("prod1");
var prod2 = document.getElementById("prod2");
var prod3 = document.getElementById("prod3");
var prod4 = document.getElementById("prod4");
var prod5 = document.getElementById("prod5");
var prod6 = document.getElementById("prod6");

var mainimg = document.getElementById("mainimg");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var title = document.getElementById("title");
var rrp = document.getElementById("rrp");
var price = document.getElementById("price");
var desc = document.getElementById("desc");

var prodviewer = document.getElementById("viewer");
var exit = document.getElementById("exit");


prod1.addEventListener("click", function(){
	mainimg.src = "/CTEC3906/resources/images/products/product1/img1.jpg";
	img2.src = "/CTEC3906/resources/images/products/product1/img2.jpg";
	img3.src = "/CTEC3906/resources/images/products/product1/img3.jpg";
	title.innerHTML = "Prada pink fur belt";
	rrp.innerHTML = "RRP: £550";
	price.innerHTML = "Price: £99";
	desc.innerHTML = "Size: 30 <br> Condition: New without tags";
	prodviewer.style.display = "block";
})

prod2.addEventListener("click", function(){
	mainimg.src = "/CTEC3906/resources/images/products/product2/img1.jpg";
	img2.src = "/CTEC3906/resources/images/products/product2/img2.jpg";
	img3.src = "/CTEC3906/resources/images/products/product2/img3.jpg";
	title.innerHTML = "True religion sliders";
	rrp.innerHTML = "RRP: £95";
	price.innerHTML = "Price: £30";
	desc.innerHTML = "Size: UK7 <br> Condition: Lightly used";
	prodviewer.style.display = "block";
})

prod3.addEventListener("click", function(){
	mainimg.src = "/CTEC3906/resources/images/products/product3/img1.jpg";
	img2.src = "/CTEC3906/resources/images/products/product3/img2.jpg";
	img3.src = "/CTEC3906/resources/images/products/product3/img3.jpg";
	title.innerHTML = "Rick Owens longsleeve";
	rrp.innerHTML = "RRP: £495";
	price.innerHTML = "Price: £125";
	desc.innerHTML = "Size: M <br> Condition: DSWT";
	prodviewer.style.display = "block";
})

prod4.addEventListener("click", function(){
	mainimg.src = "/CTEC3906/resources/images/products/product4/img1.jpg";
	img2.src = "/CTEC3906/resources/images/products/product4/img2.jpg";
	img3.src = "/CTEC3906/resources/images/products/product4/img3.jpg";
	title.innerHTML = "Stone island SP joggers";
	rrp.innerHTML = "RRP: £293";
	price.innerHTML = "Price: £95";
	desc.innerHTML = "Size: 48 <br> Condition: DSWT";
	prodviewer.style.display = "block";
})

prod5.addEventListener("click", function(){
	mainimg.src = "/CTEC3906/resources/images/products/product5/img1.jpg";
	img2.src = "/CTEC3906/resources/images/products/product5/img2.jpg";
	img3.src = "/CTEC3906/resources/images/products/product5/img3.jpg";
	title.innerHTML = "vivienne westwood trousers";
	rrp.innerHTML = "RRP: £405";
	price.innerHTML = "Price: £100";
	desc.innerHTML = "Size: L <br> Condition: DSWT";
	prodviewer.style.display = "block";
})

prod6.addEventListener("click", function(){
	mainimg.src = "/CTEC3906/resources/images/products/product6/img1.jpg";
	img2.src = "/CTEC3906/resources/images/products/product6/img2.jpg";
	img3.src = "/CTEC3906/resources/images/products/product6/img3.jpg";
	title.innerHTML = "Supreme hooded shirt";
	rrp.innerHTML = "RRP: £135";
	price.innerHTML = "Price: £99";
	desc.innerHTML = "Size: XL <br> Condition: Lightly used";
	prodviewer.style.display = "block";
})


exit.addEventListener("click", function(){
	prodviewer.style.display = "none";
})

img2.addEventListener("click", function(){
	var src1 = img2.src;
	var src2 = mainimg.src;
	mainimg.src = src1;
	img2.src = src2;
})

img3.addEventListener("click", function(){
	var src1 = img3.src;
	var src2 = mainimg.src;
	mainimg.src = src1;
	img3.src = src2;
})

var bar = document.getElementById("menubar");
var icon = document.getElementById("mbi");
var baropac;
var iconopac;

icon.addEventListener("click", function(){
if (window.getComputedStyle(bar, null).getPropertyValue("display") == "none"){
	iconopac = 1;
    icon.style.opacity = iconopac;
    baropac = 0;
    bar.style.opacity = baropac;

	var fadeOutIcon = setInterval(function(){
		if (icon.style.opacity > 0) {
			iconopac = iconopac - 0.2;
            icon.style.opacity = iconopac;
        	} 
        else {
            clearInterval(fadeOutIcon);
            var fadeInBar = setInterval(function(){
            	bar.style.display = "block";
				if (bar.style.opacity >= 1) {
            		clearInterval(fadeInBar);
        			} 
        		else {
        			baropac = baropac + 0.2;
            		bar.style.opacity = baropac;
            		iconopac = iconopac + 0.2;
            		icon.style.opacity = iconopac;
            		console.log("5 " + baropac + " " + iconopac);
					}
				}, 100);
			}
		}, 100);
	}

if (window.getComputedStyle(bar, null).getPropertyValue("display") == "block"){
	baropac = 1;
    bar.style.opacity = baropac;
    iconopac = 1;
    icon.style.opacity = iconopac;
	var fadeOutBar = setInterval(function(){
		if (bar.style.opacity >= 0) {
			baropac = baropac - 0.2;
        	bar.style.opacity = baropac;
        	iconopac = iconopac - 0.2;
        	icon.style.opacity = iconopac;
        }
        else {
    		clearInterval(fadeOutBar);
        	bar.style.display = "none";
        	var fadeInIcon = setInterval(function(){
			if (!icon.style.opacity) {
				iconopac = 0;
            	icon.style.opacity = iconopac;
        	}
			else if (icon.style.opacity < 1) {
				iconopac = iconopac + 0.2;
            	icon.style.opacity = iconopac;
        	} 
			else if (bar.style.opacity = 1) {
            	clearInterval(fadeInIcon);
        	} 
        		}, 100);
			}
		}, 100);
	}
})
}