
$(document).ready(initPage);

// polyfill`s
(function(){

	// trigger to two class
	Element.prototype.toggle2class = function(first,second){

        var find = (this.classList.contains(first))? 'first' : this.classList.contains(second);

        switch(find){
            case 'first':
                this.classList.remove(first);
                this.classList.add(second);
                break;
            case true:
                this.classList.remove(second);
                this.classList.add(first);
                break;
            default:
                this.classList.add(first);
        }

        return this;
    }

}());


function initPage(){
	initNav();
	swiperGallery();
	initMap();
	initLinkTop();
	initConsulting();
    initQa();
    initOpentext();
	
	//var T = footer.getBoundingClientRect();
	//console.log(getOffsetRect(footer) );
}
function initOpentext() {
    $('.block-about .about-list-info li .open-text').click(function(e){
        e.preventDefault();
        $(this).prev().slideToggle(300);
        e.target.toggle2class('fa-chevron-down','fa-chevron-up');
    });
}
function initQa() {
    $('.block-qa .list-qa li').click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
        $(this).children('p').slideToggle();
    });
}

function initConsulting() {
    $('.info-consulting .open-link').click(function(e){
        e.preventDefault();

        $(this).prev().slideToggle(300);
        e.target.toggle2class('fa-chevron-down','fa-chevron-up');
    });
}


function initLinkTop(){
	if(!$('.link-top').length)return;
	
	
	var footer = document.getElementById('footer');
	
	$(window).scroll(function (e) {
		if ($(this).scrollTop() > 100) {
			$('.link-top').fadeIn();
		} else {
			$('.link-top').fadeOut();
		}
		
		var scrl = window.scrollY + screen.height - footer.clientHeight;
		var bind = getOffsetRect(footer);
		var res  = bind.top - ($('.link-top').height() / 2);
		var forMobile = (screen.width <= 800)? 81:0;
		
		if(scrl + forMobile >= res){
			$('.link-top').css('position','absolute')
			.css('top',res);
		} else {
			$('.link-top').css('position','fixed')
			.css('top','auto');
		}
		
		
	});
	$('.link-top').click(function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

}
function initNav() {
	$('.open-nav').click(function(){
        $('.navigation').scrollTop(0);
		$('body').toggleClass('open-navigation');
		return false;
	});
	$('.fader-nav').click(function(){
		$('body').removeClass('open-navigation');
	});
}
var allGallery = {}
function swiperGallery(){
	allGallery.swiperTop = new Swiper('.swiper-top', {
		pagination: '.swiper-top .swiper-pagination',
		paginationClickable: true,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		loop: true
	});
}
function initMap() {
	if(!$('.holder-work-placement').length)return;
	$('.btn-work-placement .link01').click(function (e) {
		e.preventDefault();
		$('.link-map .item04').toggleClass("active");
	});
	$('.btn-work-placement .link02').click(function (e) {
		e.preventDefault();
		$('.link-map .item02').toggleClass("active");
	});
	$('.btn-work-placement .link03').click(function (e) {
		e.preventDefault();
		$('.link-map .item03').toggleClass("active");
	});
	$('.btn-work-placement .link04').click(function (e) {
		e.preventDefault();
		$('.link-map .item01').toggleClass("active");
	});
	if($(window).width() >= 800){
		$('.btn-work-placement .link01').hover(
			function(){ $('.link-map .item04').addClass('hover') },
			function(){ $('.link-map .item04').removeClass('hover') }
		);
		$('.btn-work-placement .link02').hover(
			function(){ $('.link-map .item02').addClass('hover') },
			function(){ $('.link-map .item02').removeClass('hover') }
		);
		$('.btn-work-placement .link03').hover(
			function(){ $('.link-map .item03').addClass('hover') },
			function(){ $('.link-map .item03').removeClass('hover') }
		);
		$('.btn-work-placement .link04').hover(
			function(){ $('.link-map .item01').addClass('hover') },
			function(){ $('.link-map .item01').removeClass('hover') }
		);
	}
	$(window).resize(function(){
		if($(window).width() >= 800){
			$('.btn-work-placement .link01').hover(
				function(){ $('.link-map .item01').addClass('hover') },
				function(){ $('.link-map .item01').removeClass('hover') }
			);
			$('.btn-work-placement .link02').hover(
				function(){ $('.link-map .item02').addClass('hover') },
				function(){ $('.link-map .item02').removeClass('hover') }
			);
			$('.btn-work-placement .link03').hover(
				function(){ $('.link-map .item03').addClass('hover') },
				function(){ $('.link-map .item03').removeClass('hover') }
			);
			$('.btn-work-placement .link04').hover(
				function(){ $('.link-map .item04').addClass('hover') },
				function(){ $('.link-map .item04').removeClass('hover') }
			);
		}
	})
}

function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()
    
    var body = document.body
    var docElem = document.documentElement
    
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    
    return { top: Math.round(top), left: Math.round(left) }
}

