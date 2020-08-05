// DOM노드 찾기
var items = $('.main-menu__item');
var btn = $('.main-menu__button');
// var panel = $('.board section');
// var tab = $('.tab');

// 기능 구현
$(document).ready(function()
{
  btn.hover(function(e){
    e.preventDefault();
    items.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
  },function(){
    $(this). parent().removeClass('menu-act');
  });
});

// tab.click(function(e){
//   e.preventDefault();
//   panel.removeClass('tab-act')
//   $(this).parent().parent().addClass('tab-act')
// });

