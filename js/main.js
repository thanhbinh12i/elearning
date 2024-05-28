
window.addEventListener("load",function(){
      truncateCardTitle();
});

function truncateCardTitle(){
      var cardList = document.getElementsByClassName("card-title");
      console.log(cardList);
      for (var i=0; i < cardList.length; i++){
             //lấy nội dung của thẻ
            var text = cardList[i].innerHTML;
            var newText = truncateString(text, 40);
            cardList[i].innerHTML = newText;
      }
}

function truncateString(str,num){
      if (str.length > num){
            return str.slice(0,num) + "...";
      }else{
            return str;
      }
}
// Sidebar Mini
var toggleBtn = document.querySelector('.sidebarMini__button');
var sideBarMini = document.querySelector('.sidebarMini')
var switchBtn = document.getElementById('checkbox');

toggleBtn.addEventListener('click', function(){
      sideBarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click', function(){
      document.querySelector('body').classList.toggle('darkMode');
});