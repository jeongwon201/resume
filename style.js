// 스킬 탭
var defaultOpen = document.getElementsByClassName("default-open");
for(var i=0; i<defaultOpen.length; i++) {
  defaultOpen[i].click();
}

function openTab(evt, skill, category) {
  var j, tablinks, tabcontent;
  
  tabcontent = document.getElementsByClassName("tabcontent " + category);
  for (j = 0; j < tabcontent.length; j++) {
    tabcontent[j].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks " + category);
  for (j = 0; j < tablinks.length; j++) {
    tablinks[j].className = tablinks[j].className.replace(" active", "");
  }
  document.getElementById(skill).style.display = "block";
  evt.currentTarget.className += " active";
}


// 자세히 버튼
var hs = document.getElementsByClassName("hs");
for (i = 0; i < hs.length; i++) {
  hs[i].addEventListener("click", function() {
    var detail = this.previousElementSibling;
    var simple = detail.previousElementSibling;

    if(detail.style.display=="block") {
      detail.style.display="none";
      simple.style.display="block";
      this.textContent = "자세히";
      var location = simple.offsetTop - 300;
      window.scrollTo({top:location});
    } else {
      detail.style.display="block";
      simple.style.display="none";
      this.textContent = "간략히";
    }
  });
}