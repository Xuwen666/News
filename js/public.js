/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-02 11:36:04
 * @version $Id$
 */


  $('.exit em').click(function(){
  	
           $.ajax({
            url:'guestbook/index.php',  
            data:'m=index&a=logout', 
            type:'POST',
            dataType:"json",
            success:function(data){
               alert(data.message);
               if(!data.code){
                 updateUserStatus();
               }
               return false;
            }
            
            }) 
        })
 updateUserStatus();
          function updateUserStatus(){
                var uid=getCookie('uid');
                var username=getCookie('username');
                console.log(typeof username)
            if(uid){
            // 登录成功状态
           
              $('.exit').css('display','block');
            $('.exit span').html(username)
                $('.login').css('display','none');
                $('.register').css('display','none');
            }
            else {
                $('.exit').css('display','none');
                $('.login').css('display','block');
                $('.register').css('display','block');
            }
          }
          
        function getCookie(key){
            var arr1=document.cookie.split('; ');
            for(var i=0;i<arr1.length;i++){
                console.log(arr1[i]);
                var arr2=arr1[i].split('=');
                if(arr2[0]==key){
                    return arr2[1];
                }

            }
        }


  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
   console.log(1)
} else {
    scrollVh(); 

	// 回到顶部需求


	$(window).scroll(function(){
				// var $scroll=$(window).scrollTop();
		// var $Wh=$(window).height();
		// var $objH=$('.sidebar').height();   //自身高度
		// var $bodtH=$(document.body).height();

		// if($scroll>=$Wh/2){
		// 	var $bOTM=$scroll+$Wh-$objH-30+'px';
		// 	$('.sidebar').css({"opacity":"1","top":$bOTM});
		// 	console.log(typeof $bOTM)
		// }
		// console.log($scroll+$Wh)
		// console.log($bodtH-$('.footer').height())
		// if($scroll+$Wh>=$bodtH-$('.footer').height()){
		// 	var $bH=$bodtH-$('.footer').height()-$objH-70;  //顶部固定位置参数
		// 	$('.sidebar').css({"top":$bH});
		// }
		// 


		scrollVh();
		
	})

		function scrollVh(){
			var $scroll=$(window).scrollTop();
			var $Wh=$(window).height();
			var $objH=$('.sidebar').height();   //自身高度
			var $bodtH=$(document.body).height();
			if($scroll>=$Wh/4){
				$('.sidebar').removeAttr("style");
				$('.sidebar').css({"opacity":"1","bottom":"30px"});
				
				if($objH+$('.sidebar').offset().top>=$bodtH-($('.footer').height()+30)){
					var $bH=$bodtH-$('.footer').height()-30-$objH-30;  //顶部固定位置参数
					$('.sidebar').css({"top":$bH,"position":"absolute"});
				}
				else {
						$('.sidebar').css({"bottom":"30px","position":"fixed","opacity":"1"});
				}
				
			}
			else{
				$('.sidebar').css({"opacity":"0"});
			}
		}
		/*封装导航条显示隐藏 end*/

	var onScroll=true; //控制回到顶部是否到顶部开关
	var timer;
	$(window).scroll(function(){

		if(!onScroll)clearInterval(timer);
		onScroll=false;
	})

	$(".sidebar .active").click(function(){

			timer=setInterval(function(){
				var $scroll=$(window).scrollTop();
				var $Top=Math.floor(-$scroll/6); //返回顶部的固定值
				$(window).scrollTop($scroll+$Top);
				onScroll=true;
				if($Top==0){
					clearInterval(timer);
					
				}
			},30)
			
	})	
	// 回到顶部 end
}


	
