var scrollcounter = 0;

window.onload=function() {
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

var x = window.matchMedia("(min-width: 500px)");
console.log(x);

if (x.matches) {
	
	scrollcounter++;
	var menupic = document.getElementById("menu");
	var img1 = "url(/CTEC3906/resources/images/homepageScroll/1.5.jpg)";
	var img2 = "url(/CTEC3906/resources/images/homepageScroll/2.jpg)";
	var img3 = "url(/CTEC3906/resources/images/homepageScroll/2.5.jpg)";
	var img4 = "url(/CTEC3906/resources/images/homepageScroll/3.jpg)";
	var img5 = "url(/CTEC3906/resources/images/homepageScroll/3.5.jpg)";
	var img6 = "url(/CTEC3906/resources/images/homepageScroll/4.jpg)";
	var img7 = "url(/CTEC3906/resources/images/homepageScroll/4.5.jpg)";
	var img8 = "url(/CTEC3906/resources/images/homepageScroll/5.jpg)";
	var img9 = "url(/CTEC3906/resources/images/homepageScroll/5.5.jpg)";
	var img10 = "url(/CTEC3906/resources/images/homepageScroll/6.jpg)";
	var img11 = "url(/CTEC3906/resources/images/homepageScroll/6.5.jpg)";
	console.log(scrollcounter);

	if (scrollcounter < 15){
		window.scrollTo(0, 0);
		menupic.style.backgroundAttachment = "fixed";
	}

	if (scrollcounter >= 15 && scrollcounter < 30){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img1;
	}
	if (scrollcounter >= 30 && scrollcounter < 45){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img2;
	}
	if (scrollcounter >= 45 && scrollcounter < 60){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img3;
	}
	if (scrollcounter >= 60 && scrollcounter < 75){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img4;
	}
	if (scrollcounter >= 75 && scrollcounter < 90){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img5;
	}
	if (scrollcounter >= 90 && scrollcounter < 105){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img6;
	}
	if (scrollcounter >= 105 && scrollcounter < 120){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img7;
	}
	if (scrollcounter >= 120 && scrollcounter < 135){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img8;
	}
	if (scrollcounter >= 135 && scrollcounter < 150){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img9;
	}
	if (scrollcounter >= 150 && scrollcounter < 165){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img10;
	}
	if (scrollcounter >= 165 && scrollcounter < 180){
		window.scrollTo(0, 0);
		menupic.style.backgroundImage = img11;
		menupic.style.backgroundAttachment = "scroll";
	}
}
}) 
}