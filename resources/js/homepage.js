var scrollcounter = 0;

window.addEventListener('scroll', () => {

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