(function() {
  function strikethrough(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /\~\~(.+?)\~\~/gim,
      '<del>$1</del>'
    );
  }
  
  function subparagraph(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /^<p>(([0-9]{3}.[0-9]+)\.)/gim,
      '<a name="$2"></a><b>$1</b>'
    );
  }

  function clause(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /^<p>([0-9]{3}\.[0-9]+[a-z]+)/gim,
      '<a name="$1"></a>\n<p class="clause" markdown="1"><b>$1</b>'
    );


  strikethrough();
  //subparagraph();
  //clause();
})();

