$(document).ready(function() {
	styleElement = document.createElement("style");
	styleElement.type = "text/css";
	styleElement.appendChild(document.createTextNode(""));
	document.body.appendChild(styleElement);

	$('.color1').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".accent_color_background { background-color: #E45064!important; } .accent_color_overlay { background-color : rgba(73, 0, 10, 0.75)!important; } .accent_color_text { color : #E45064!important; } .logo_on_body { color : #E45064!important; } .accent_border_color {border-color : #E45064!important} a {color : #E45064!important} .accent_outline_color { outline-color : #E45064!important } .corner_border_container { border-left: 50px solid transparent!important } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#E45064");
	});
	$('.color2').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".accent_color_background { background-color: #7ECA9B!important; } .accent_color_overlay { background-color : rgba(0, 75, 28, 0.75)!important; } .accent_color_text { color : #7ECA9B!important; } .logo_on_body { color : #7ECA9B!important; } .accent_border_color {border-color : #7ECA9B!important} a {color : #7ECA9B!important} .accent_outline_color { outline-color : #7ECA9B!important } .corner_border_container { border-left: 50px solid transparent!important } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#7ECA9B");
	});
	$('.color3').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".accent_color_background { background-color: #6B57AF!important; } .accent_color_overlay { background-color : rgba(15, 0, 68, 0.75)!important; } .accent_color_text { color : #6B57AF!important; } .logo_on_body { color : #6B57AF!important; } .accent_border_color {border-color : #6B57AF!important} a {color : #6B57AF!important} .accent_outline_color { outline-color : #6B57AF!important } .corner_border_container { border-left: 50px solid transparent!important } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#6B57AF");
	
	});
	$('.color4').on('click', function(){
		document.body.removeChild(styleElement);
		styleElement = document.createElement("style");
		styleElement.type = "text/css";
		styleElement.appendChild(document.createTextNode(".accent_color_background { background-color: #265CDC!important; } .accent_color_overlay { background-color : rgba(0,18,58,0.75)!important; } .accent_color_text { color : #265CDC!important; } .logo_on_body { color : #265CDC!important; } .accent_border_color {border-color : #265CDC!important} a {color : #265CDC!important} .accent_outline_color { outline-color : #265CDC!important } .corner_border_container { border-left: 50px solid transparent!important } "));
		document.body.appendChild(styleElement);
		$(this).parent().find('.color_switch').removeClass('active_color');
		$(this).addClass('active_color');
		$('#progressbar > div > svg').find("path").attr("stroke", "#265CDC");
	});

	$('.white_tmp').on('click', function(){
		$(this).parent().find('.tmp_switch').removeClass('active_tmp');
		$(this).addClass('active_tmp');
	});
	$('.black_tmp').on('click', function(){
		$(this).parent().find('.tmp_switch').removeClass('active_tmp');
		$(this).addClass('active_tmp');
	});
});
