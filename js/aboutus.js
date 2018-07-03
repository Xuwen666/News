/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-29 23:11:47
 * @version $Id$
 */

if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
   
} else {
    $(window).scroll(function(){
	$HH=$(window).scrollTop();
	$objt=$('#mennav').offset().top;
	console.log($objt)
	if($HH<$objt){
		
			$('.nav li:first-of-type').addClass("active");
	}
})

}
