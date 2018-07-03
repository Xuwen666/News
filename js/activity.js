/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-30 16:25:30
 * @version $Id$
 */



(function(){
	var $num=0;

	$('#next').on('click',function(){
		$num++;
		$num%=3;
		show();
	})
	$('#prev').on('click',function(){
		$num--;
		if($num<0)$num=2;
		show();
	})
	// 封装当前显示其他隐藏
	function show(){
		console.log($num)
		var $sibing=$('.Listitem').eq($num).addClass('active').siblings('Listitem');
		console.log($sibing)
		
		$('.Listitem').eq($num).addClass('active').siblings().removeClass('active');
	}
})()
// 防止污染全局环境