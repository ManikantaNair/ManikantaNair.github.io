//smooth scrolling 
$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		if ($(window).width() < 720) {
		if (hash == "#about") {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		else if (hash == "#team") {
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 50
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		else if (hash == "#work") {
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 50
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		else if (hash == "#contact") {
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 60
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		else {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		}
		else if ($(window).width() > 720) {
        if (hash == "#about") {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		else if (hash == "#team") {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
		}
		else {
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
		}
        }
		}
	});
	});
//navbar toggle
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
//hamburger icon
function myFunction(x) {
		x.classList.toggle("change");
	}
