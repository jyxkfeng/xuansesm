/**
 * Created by Jiang share foun on 14-10-13.
 *无缝轮播 jQuery插件 
 */
// 插件的定义

//$ 接受参数 
//{obj:'#slide',next:1,prev:1,dot:1}
//默认参数
/*$.fn.jSilde.defaults = {  
		obj:'obj',
		next:1,
		prev:1,
		dot:1  
	};  */
	
//obj：demo ID
//next: 1,显示 0，隐藏
//prev:1,显示 0，隐藏
//dot：1,显示 0隐藏

/*
demo 结构
<div  id="slide">
	<ul>
		<li>.....</li>......
	</ul>
	<ol></ol>
</div>
*/

/*HTML 调用  $('#demoID').jSilde({obj:'#demoID',next:1,prev:1,dot:1});  */

(function($){
	     $.fn.extend({ 
			jSilde:function( options ){
			 var defaults = {  
			obj:'obj',
			next:1,
			prev:1,
			dot:1  
		};  		 		 
		  	var opts = $.extend({},defaults,options);
		    
		  var obj = $(options['obj']),stimer = null,nwidth = obj.find('ul li').outerWidth(),index = 0,objsize=obj.find('ul li').size();
		
		  obj.find('ul li').each(function(e){
			   if(e==0){
                    obj.find('ol').append('<li class="hover"></li>');
                }else{
                    obj.find('ol').append('<li></li>');
                }
			  })
		
		  var clone1='<li class="clone">'+obj.find('ul li').eq(0).html()+'</li>';
		  var clone2='<li class="clone">'+obj.find('ul li').eq(objsize-1).html()+'</li>';
		  obj.find('ul').prepend(clone2);
		  obj.find('ul').append(clone1)
		  console.log(clone2);	  
			  
		  obj.find('ol li').each(function(e){
                $(this).hover(function(){
                    clearInterval(stimer);
                  //  $('.quan').attr('href',obj.find('ul li').eq($(this).index()).find('a').attr('href'))
                    $(this).addClass('hover').siblings().removeClass('hover')
                    obj.find('ul').stop().animate({
                       left:-$(this).index()*nwidth
                  },200)
					//obj.find('ul li').stop().hide();
					//obj.find('ul li').eq($(this).index()).fadeIn().siblings().hide();
                },function(){
                    imgqh();
                })
            })
			
		  var next=options['next'];
		  var prev=options['prev'];
		  var dot=options['dot'];
		  //alert(next);
		  if(next==true){
			  obj.prepend('<div class="ico-next"></div>');
			  	// 前进
			  obj.find('.ico-next').click(function(){
				  clearInterval(stimer);
				  var nowindex = obj.find('ol li.hover').index();
				  if(nowindex>=objsize-1){
				  	    pleft=0;
					  	index=0;
						obj.find('ul').css('left',0);	
						obj.find('ul').stop().animate({
						 left:-nwidth
						},500)
					  }
				  else{
				   		index++;
						   obj.find('ul').stop().animate({
				   left:-(index+1)*nwidth
			 	 },500)
					  }	  
				
				  //if(index<0) {index = objsize;}
				  obj.find('ol li').eq(index).addClass('hover').siblings().removeClass('hover')
				  imgqh();
            })
			  
			  }
		  if(prev==true){
			  obj.prepend('<div class="ico-prev"></div>');
			  // 后退
			 obj.find('.ico-prev').click(function(){
				  clearInterval(stimer);
				  var nowindex = obj.find('ol li.hover').index();
				 if(nowindex==0){
					  obj.find('ul').css('left',-(objsize+1)*nwidth);
						obj.find('ul').stop().animate({
					    left:-(objsize)*nwidth
						 },500)
						 index=objsize-1;
						 nowindex=objsize-1;
					  }
				  else{
						obj.find('ul').stop().animate({
					    left:-nowindex*nwidth
						 },500)
					 	index--;
					  }	  
				  obj.find('ol li').eq(index).addClass('hover').siblings().removeClass('hover')
				  imgqh();
            })
			  }
		  if(dot==false){
			  obj.find('ol').hide();
			  }	  	  
		
			// 轮播
            function imgqh(){
                index = obj.find('ol li.hover').index();
				
				obj.find('ul').css({'width':nwidth*(objsize+2),'left':-nwidth});
                stimer = setInterval(function(){
                    index++;	
                    if(index>objsize-1) index = 0;
					if(index==0){
						
						 obj.find('ul').stop().css('left',0);
						}
						
                    obj.find('ul').stop().animate({
                        left:-(index+1)*nwidth
                   },500);
					//obj.find('ul li').eq(index).fadeIn(3000).siblings().fadeOut(3000);
					
                   // $('.quan').attr('href',obj.find('ul li').eq(index).find('a').attr('href'))
                    obj.find('ol li').eq(index).addClass('hover').siblings().removeClass('hover')
                },3000)
            }
			 imgqh();		  
			} 
		 })

	
		
})(jQuery);  