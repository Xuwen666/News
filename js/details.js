/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-03 16:29:17
 * @version $Id$
 */

var url=window.location.search.substr(1);
console.log(url)
function formatterDateTime() {
  var date=new Date()
  var month=date.getMonth() + 1
        var datetime = date.getFullYear()
                + ""// "年"
                + (month >= 10 ? month : "0"+ month)
                + ""// "月"
                + (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate())
                + ""
                + (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours())
                + ""
                + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes())
                + ""
                + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
        return datetime;
    }

$.ajax({
    type: 'post',
    url: 'https://route.showapi.com/109-35',
    dataType: 'json',
    data: {
        "showapi_timestamp": formatterDateTime(),
        "showapi_appid": '66839', //这里需要改成自己的appid
        "showapi_sign": '227015e83f884d46bb3f9a3caedb0e13',  //这里需要改成自己的应用的密钥secret
        "channelId":"",
        "channelName":"",
        "title":"足球",
        "page":"1",  //要与index传入的值配对
        "needContent":"0",
        "needHtml":"1",
        "needAllList":"0",
        "maxResult":"100",
        "id":""

    },

    error: function(XmlHttpRequest, textStatus, errorThrown) {
        alert("操作失败!");
    },
    success: function(result) {
        console.log(result);
        var data=result.showapi_res_body.pagebean.contentlist;
        $(data).each(function(index,element){
          if(this.id==url){
            
            $('.contetnt').html(data[index].html);
            $('.panel-body h4').html(data[index].title);
            $('.panel-body h4').append('<span>'+data[index].pubDate+'</span>');
          }
        })
       
    }
});




(function(){
$('.BTN').click(function(){  
    $.ajax({
        url:'guestbook/index.php',
        data:'m=index&a=send&content='+$('textarea').val(),
        type:'POST',
         dataType:"json",
    success:function(data){
        if(!data.code){
            createList(data.data,true);
            $('textarea').val(''); 
            console.log($('.list dl').length)
            if($('.list dl').length>3){
              $('.list dl:last').remove();   
            }
              $.ajax({
                url:'guestbook/index.php',
                data:'m=index&a=getList&n=3&page=1',
                type:'POST',
                 dataType:"json",
                success:function(data){
                  
               // 添加最新评论判断当前评论条数如果大于设置的值就删除最后一条
        		// 获取当前页面的总条数 每次点击加1 8+1 3 i%3==0   
               if(data.code>=1){
                   console.log(1);
               }else{
                var num=data.data.count;
                console.log(num);
            
                if(num%3==1){
                  $('.pagination').css('display','block');
                 
                $('.Nav').append('<li><a class="A" href="javascript:;" data-href="details.html?m=index&a=getList&n=3&page='+(Math.ceil(num/3))+'">'+(Math.ceil(num/3))+'</a></li>');
                }
                  aONclick();
               }
               
                }
            })

           
          }
        }
    })
})

       var arrN=1;
        /*获取评论列表*/
         $.ajax({
                url:'guestbook/index.php',
                data:'m=index&a=getList&n=3&page=1',
                type:'POST',
                 dataType:"json",
            success:function(data){
              
               
               if(data.code>=1){
                   console.log(1);
                   $('.pagination').css('display','none');

               }else{
                               /*生成a标签*/
                var pages=data.data.pages;
                  $('.Nav').append('<li><a href="javascript:;" data-href="details.html?" class="prev">上一页</a></li>');

                for(var i=0;i<pages;i++){

                    $('.Nav').append('<li class="Ah"><a  class="A" href="javascript:;" data-href="details.html?m=index&a=getList&n=3&page='+(i+1)+'">'+(i+1)+'</a></li>');
                    if(i==data.data.page){

                      $('.Nav li a').eq(i).addClass('active');
                    }
                }

               $('.Nav').append('<li><a href="javascript:;" data-href="details.html?" class="next">下一页</a></li>');
                var Data=data.data.list;
               for(var i=0;i<Data.length;i++){
                createList( Data[i]);
               }
               aONclick();
               prev();
               next();
               }
               
                }
            })
       /*封装一个用于 生成list列表 根据添加或刷新获取传入 多传入一个值进行判断*/
       function createList(data,insert){
        if(insert){
             $('.list').prepend('<dl class="clearfix"><dt><strong>'+data.username+'</strong>说：</dt><dd class="content">'+data.content+'</dd><dd class="t"><a href="javascript:;" id="support">顶(<span>'+data.oppose+'</span>)</a><a href="javascript:;" id="oppose">踩(<span>'+data.support+'</span>)</a></dd></dl>');
        }
        else {
            $('.list').append('<dl class="clearfix"><dt><strong>'+data.username+'</strong>说：</dt><dd class="content">'+data.content+'</dd><dd class="t"><a href="javascript:;" id="support">顶(<span>'+data.oppose+'</span>)</a><a href="javascript:;" id="oppose">踩(<span>'+data.support+'</span>)</a></dd></dl>');
        }
       }

       /*封装给每个a添加点击事件*/
       function aONclick(){
         // 等待a标签所有内容刷新
               $('.Nav li .A').on('click',function(){
                  $(this).addClass('active');
                  $(this).parent().siblings().find('a').removeClass('active');

                  var hred=this.dataset.href;
                 var Href=hred.substr(hred.indexOf('?')+1);
                 // 获取a标签对应的值
                
                  $.ajax({
                  url:'guestbook/index.php',
                  data:Href,
                  type:'POST',
                   dataType:"json",
                  success:function(data){
                    
                    var List=data.data.list;
                     if(data.code>=1){
                         console.log(1);
                     }else{
                       // 修改评论区的内容
                       
                       var dataDL=document.querySelectorAll('.list dl dt strong');
                       $('.list').empty();
                       
                       for(var i=0;i<List.length;i++){
                        $('.list').append('<dl class="clearfix"><dt><strong>'+List[i].username+'</strong>说：</dt><dd class="content">'+List[i].content+'</dd><dd class="t"><a href="javascript:;" id="support">顶(<span></span>)</a><a href="javascript:;" id="oppose">踩(<span></span>)</a></dd></dl>');
                       
                        }
                       if(List.length==1){
                        $('.list dl').eq(1).remove();
                        $('.list dl').eq(1).remove();
                       }
                       else if(List.length==2){
                        $('.list dl').eq(2).remove();
                       }
                     }
                      }
                    })

                  })

               // //下一页 获取当前的a href 更简单的操作是获取他的内容值
               // $('.Nav .prev').on('click',function(){
               //  for(var i=0;i<$('.Nav li').length;i++){
                  
               //       if($('.Nav li a').eq(i).text()==='1'){
               //        return;
               //       }
               //      }

               //  })  
       }
     
         // 获取当前的页数

         /*上一页*/
         function prev(){
          $('.Nav .prev').on('click',function(){
            var arrN=$('.Nav [class*=active]').text();
            if(arrN==1){
                alert('当前页数已经是最前了');
                return;
               }

               arrN--;
               console.log(arrN)
               prevnext(arrN);
           })
         }

         //加载下一页
         function next(){
           $('.Nav .next').on('click',function(){
            var arrN=$('.Nav [class*=active]').text();
            if(arrN>=$('.Nav .Ah').length){
                alert('当前页数已经是最后了');
                return;
               }

               arrN++;
               console.log(arrN)
               prevnext(arrN);
           })
        }


         //上一页 下一页 公用方法
         function prevnext(arrN){
          
             
             console.log(arrN)
              $('.Nav .A').eq(arrN-1).addClass('active');
             $('.Nav .A').eq(arrN-1).closest('.Ah').siblings('.Ah').find('a').removeClass('active');
              console.log($('.Nav .A').eq(arrN-1).closest('.Ah').siblings('.Ah'))
              $.ajax({
                      url:'guestbook/index.php',
                      data:'m=index&a=getList&n=3&page='+arrN,
                      type:'POST',
                       dataType:"json",
                      success:function(data){
                        
                        var List=data.data.list;
                         if(data.code>=1){
                             console.log(1);
                         }else{

                            console.log(List);
                            var dataDL=document.querySelectorAll('.list dl dt strong');
                             $('.list').empty();
                             
                             for(var i=0;i<List.length;i++){
                              $('.list').append('<dl class="clearfix"><dt><strong>'+List[i].username+'</strong>说：</dt><dd class="content">'+List[i].content+'</dd><dd class="t"><a href="javascript:;" id="support">顶(<span></span>)</a><a href="javascript:;" id="oppose">踩(<span></span>)</a></dd></dl>');
                             
                              }
                             if(List.length==1){
                              $('.list dl').eq(1).remove();
                              $('.list dl').eq(1).remove();
                             }
                             else if(List.length==2){
                              $('.list dl').eq(2).remove();
                             }
                         }
                          }
                        })
          
         }
       
})()


