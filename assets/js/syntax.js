/*(function() {
  function strikethrough(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /\~\~(.+?)\~\~/gim,
      '<del>$1</del>'
    );
  }
  strikethrough();
})();*/

(function() {
 
   function paragraph(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /((^[0-9]{3}). )/gim,
      '<br><a name="$2"><\/a>\n\n### $1'
    );
  }
  paragraph();
})();

<!-- http://www.levihackwith.com/javascript-performance-tip-precompile-your-regular-expressions/ -->