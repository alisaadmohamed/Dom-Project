var imgs = Array.from( document.querySelectorAll(".item img"));// return nodeList--> convert to Array
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var imgsIndex = 0;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");



for(var i = 0 ; i<imgs.length ; i++) {

	imgs[i].addEventListener("click"  , function(eventInfo){
		imgsIndex = imgs.indexOf(eventInfo.target);
		console.log(imgsIndex);
		var imgSrc= eventInfo.target.getAttribute("src");
		lightBoxItem.style.backgroundImage = "url("+imgSrc+")";

		lightBoxContainer.style.display = "flex";

	})

};

function nextSlide()
{
	imgsIndex++;

	if(imgsIndex == imgs.length) {
		imgsIndex = 0;

	}else{

		var imgSrc = imgs[imgsIndex].getAttribute("src");
		lightBoxItem.style.backgroundImage = "url("+imgSrc+")"
	}
	 
};

function prevSlide() 
{
	imgsIndex--;
	console.log(imgsIndex)
	if(imgsIndex < 0) {
		imgsIndex = imgs.length - 1 ;
	} else {
		var imgsSrc = imgs[imgsIndex].getAttribute("src");
		lightBoxItem.style.backgroundImage = "url("+imgsSrc+")";

	}
	
	
};

function closeSlide()
{
	 lightBoxContainer.style.display = "none";
	
};

/** 
var events = ["click" , "mouseenter" , "mouseleave" ]
for(var i = 0 ; i < events.length ; i++) {
	nextBtn.addEventListener(events[i] ,nextSlide);
	prevBtn.addEventListener(events[i] ,prevSlide);
}

*/

nextBtn.addEventListener("click" ,nextSlide);
prevBtn.addEventListener("click" ,prevSlide);
closeBtn.addEventListener("click" ,closeSlide);

document.addEventListener("keydown" , function(eventInfo){
console.log(eventInfo.key);

	if(eventInfo.key == "ArrowRight") {
		nextSlide();
	} else if(eventInfo.key == "ArrowLeft") {
		prevSlide();
	} else if(eventInfo.key == "Escape") {
		closeSlide();
	}
	
});








