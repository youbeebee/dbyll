(function() {
  function strikethrough(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /\~\~(.+?)\~\~/gim,
      '<del>$1</del>'
    );
  }
  
   function paragraph(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /((^[0-9]{3}). )/gim,
      '<br><a name="$2"><\/a>\n\n### $1'
    );
  }
  
  strikethrough();
  paragraph();
})();