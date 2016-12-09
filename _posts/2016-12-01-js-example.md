---
layout: post
title:  "js Example"
categories: [test]
tags: 
description: js test
---

<script type="text/javascript">
$(function(){
  $('.yellow_circle').mouseover(function(){
    $('.yellow_circle_word').text('마우스 포인터가 노란색원 안에 있습니다. ');
  });
  $('.yellow_circle').mouseout(function(){
    $('.yellow_circle_word').text('마우스 포인터가 노란색원을 떠났습니다. ');
  });
});
</script>

<div class="yellow_circle" style="width:40px;height:40px;border-radius:20px;background:yellow"></div>
<p class="yellow_circle_word">노란색 원에 마우스 포인터를 올리고 내려 보세요.</p>

<style type="text/css">
	#help_div{display:none;}
</style>

<div>
    <img src="/etc/ca8009b9301970c6e6b1a97c8cb6180d.png" class="help_btn">
    <div id="help_div">설명</div>
</div>


<script type="text/javascript">
$(function(){
	$(".help_btn").mouseenter(function() {
	    $("#help_div").css("display", "block");
	});
	$(".help_btn").mouseleave(function() {
	    $("#help_div").css("display", "none");
	});
});
</script>
