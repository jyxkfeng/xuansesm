// Date: 2015-01-08
// Author: Jiang share fone

/**
 *纯css3原型框 小插件 
 */
// 插件的定义

//$ 接受参数 
//{num1:'95'}
//默认参数
/*$.fn.jcountDown.defaults = {  
	num1:'95'
	};  */
/*
demo 结构
<div class="game_time">
	<div class="hold">
		<div class="pie pie1"></div>
	</div>
	<div class="hold">
		<div class="pie pie2"></div>
	</div>
	<div class="bg"> </div>
	<div class="num2"></div>
</div>
*/

/*HTML 调用 $('.game_time').jcountDown(num1:'95'});  */

(function($){
	     $.fn.extend({ 
			jcountDown:function( options ){
			 var defaults = {
				obj:this.attr("class"),num1:100
			};
			var opts = $.extend({},defaults,options);
			var num1= opts['num1'];
			var stimer=null;
			var time=null;
			var obj='.'+opts['obj']+' ';
			//console.log(obj)
			$(obj+'.bg').css('background-image','linear-gradient(to top,#0eF,#0FF)')
			var start1 = function(num1,num2){
			
					var j = num1*360/100;  //旋转的角度 
					var i=0;
					time=(1/num1)*360;
					//console.log(time);
				 stimer = setInterval(function(){
					 	//console.log(j);	
				if(i>j){
					 clearInterval(stimer);
					} 
				else{	
				if(i <= 180){
					$(obj+".pie1").css("-o-transform","rotate(" + i + "deg)");
					$(obj+".pie1").css("-moz-transform","rotate(" + i + "deg)");
					$(obj+".pie1").css("-webkit-transform","rotate(" + i + "deg)");
				}else{
					$(obj+".pie1").css("-o-transform","rotate(" + 180 + "deg)");
					$(obj+".pie1").css("-moz-transform","rotate(" + 180 + "deg)");
					$(obj+".pie1").css("-webkit-transform","rotate(" + 180 + "deg)");
					$(obj+".pie2").css("backgroundColor", "#0FF");
					$(obj+".pie2").css("-o-transform","rotate(" + i + "deg)");
					$(obj+".pie2").css("-moz-transform","rotate(" + i + "deg)");
					$(obj+".pie2").css("-webkit-transform","rotate(" + i + "deg)");
			    	}
					i++;
					}
					},time);
					$(obj+".num2").html(num1 + "%");
				 };
			 start1(num1);
				}
		 })		
})(jQuery);  

