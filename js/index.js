/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-23 10:29:41
 * @version $Id$
 */

$(function(){
	// 移动端手指滑需求
	var $carousels =$('.carousel');
	var startX,endX;
	var offset =50;

	$carousels.on('touchstart',function(e){
		startX=e.originalEvent.touches[0].clientX;
	})
	$carousels.on('touchmove',function(e){
		endX=e.originalEvent.touches[0].clientX;
	})
	$carousels.on('touchend',function(e){
		var contrast=Math.abs(endX-startX); 
		 /*比较endX与startX的大小，并获取每次运动的距离，
		 当距离大于一定值时认为是有方向的变化*/
		 if(contrast>offset){
		 	 //根据获得的方向 判断是上一张还是下一张出现
		 	 $(this).carousel(startX>endX?'next':'prev');
		 }
	})
	// 移动端手指滑动需求 end
	// 
	


	
		
	})

