const $Ul = $('<ul></ul>')

for (let i = 1; i <= 5; i++){
  $($Ul)
    .append($(`<li class = "squareFirst"><span>0</span></li>`)
      .append($(`
        <div style = margin-top:70px>
          <button class = "plus">+</button>
          <button class="minus">-</button>
        </div >`)));
}
$('body').append($Ul);


$('div').click(function (e) {
  let count = +$(this).closest('.squareFirst').children('span').text();
  
    if ($(e.target).hasClass('minus') && count == 0){
      $(e.target).prop('disabled', true)

    }  else if ($(e.target).hasClass('plus')) {
      $(this)
        .closest('.squareFirst')
        .children('span')
        .text(count += 1);
      $(this)
        .closest('.squareFirst')
        .children('div')
        .children('.minus')
        .prop('disabled', false);
  
    } else {
      $(this)
        .closest('.squareFirst')
        .children('span')
        .text(count -= 1);
      $(e.target).prop('disabled', false)
    }
});

//////////////////////////////////////////////////////////////////

const $Ul2 = $('<ul class = "containerSecond"></ul>')

for (let i = 1; i <= 5; i++){
  $($Ul2).append(`<li class = "squareSecond">${i}</li>`)
}
$('body').append($Ul2);

$('.squareSecond').click(function () {
  if ($(this.className === 'squareSecond')) {
    
    if ($(this).hasClass("blue")) {
      $(this).toggleClass('blue green');

    } else if ($(this).hasClass("green")) {
      $(this).toggleClass('green yellow');

    } else if ($(this).hasClass("yellow")) {
      $(this).toggleClass('yellow blue');

    } else {
      $(this).addClass("blue");
    }
    $Ul2.append(this);
  }
});