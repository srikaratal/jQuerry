// scripts.js
$(function(){
  var paragraphs = $('p').css('color', 'red');
  var rawFirstParagraph = paragraphs[0];
  console.log(rawFirstParagraph);
  var jqFirstParagraph = paragraphs.eq(0)
  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'blue');
});

	$(function(){
  
		$("ul").append("<li>New element</li>")
		
		var firstItem = $('nav').find('li').first();
	 
		console.log(firstItem.text());
		
		firstItem.css("color", "red")
	 
	 
	});