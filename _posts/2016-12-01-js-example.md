---
layout: post
title:  "js Example"
categories: [test]
tags: 
description: js test
---

<style type="text/css">
	.help_div {
		position: relative;
		z-index:1;
	}
	#help_img{
		display:none;
		position: absolute;
		width:50px;
		height:50px; 
		z-index:2;
	}
</style>
<br>
<br>
<br>
<br>

<p>asfasdfasdfasdfasdfa</p>
<p>asdf asdf <span class="help_div">카드이름</span><img src="/etc/ca8009b9301970c6e6b1a97c8cb6180d.png" id="help_img">asdfqadsfasdfasd fasdas dfasdfasdfa asdfasdfasdfas adfasdf asdf asdf asdf as asdf asdfasdfasdf sd fasdfasdfa sdfasdfasdfasdfasdfasdf asdfa sfasfasdf asdf <span class="help_div">카드이름</span><img src="/etc/ca8009b9301970c6e6b1a97c8cb6180d.png" id="help_img">asdfasdff</p>
<p>asdfasdfasdfas dfasdfasdfasdfasdfasdfa sdfasdfasdf asdfasdf</p>
<p>가나다라마바사아자차카타파하</p>

<script type="text/javascript">
$(function(){
	$(".help_div").mouseenter(function() {
 	    $("#help_img").css("left", $(".help_div").position().left+20);
	    $("#help_img").css("top", $(".help_div").position().top+20);
	    $("#help_img").css("display", "block");
	    //alert("asdf "+$(".help_div").position().left+", "+$(".help_div").position().top);
	});
	$(".help_div").mouseleave(function() {
	    $("#help_img").css("display", "none");
	});
});
</script>

$$y = x + 1$$


\\( \sum_{t=1}^{T}\beta_{t} \\)

***
