function w3_open() 
{
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() 
{
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function onClick(element) 
{
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

function myFunction(id) 
{
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) 
  {
    x.className += " w3-show";
  } 
  else 
  { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function carousel() 
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

function plusDivs(n) 
{
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myGrids");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

