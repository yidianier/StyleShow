window.onload = function(){
	var slideItem = document.getElementById('slide-item');
	var bannerItem = document.getElementById('banner-item');
	bannerItem.style.backgroundImage = "url(image/banner1.jpg)";
	
	var oUl = slideItem.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	aLiUl[0].className = "active";

	var isNow = 0;
	var timer = null;
	
	for(var i=0;i<aLiUl.length;i++){
		aLiUl[i].index = i;
		aLiUl[i].onmouseover = function(){	
			for(var i=0;i<aLiUl.length;i++){
				aLiUl[i].className = '';
			}
			this.className = "active";
			isNow = this.index;
			bannerItem.style.backgroundImage = "url(image/banner"+(this.index+1)+".jpg)";
		};
	}

	bannerItem.onmouseover = function(){
		clearInterval(timer);
	};
	bannerItem.onmouseout = function(){
		timer = setInterval(toRun,2000);
	};
	
	timer = setInterval(toRun,2000);
	
	function toRun(){
		if(isNow == aLiUl.length-1){
			isNow = 0;
		}
		else{
			isNow++;
		}
		for(var i=0;i<aLiUl.length;i++){
			aLiUl[i].className = '';
		}
		
		aLiUl[isNow].className = 'active';
		bannerItem.style.backgroundImage = "url(image/banner"+(isNow+1)+".jpg)";

	}
	
};