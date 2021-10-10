const template = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const card = document.getElementById('cardContainer')


const showCard = () => {
  stockTotal.forEach(elemento =>{
    template.getElementById('image').setAttribute('src', elemento.img)
    template.getElementById('body-title').textContent = elemento.nombre
    
    template.getElementById('linkedIn').setAttribute('href', elemento.linkedIn)
    template.getElementById('E-Mail').setAttribute('href', elemento.Mail)
    template.getElementById('WebSite').setAttribute('href', elemento.WebSite)

    // if (elemento.linkedIn == ""){
    //   template.getElementById('linkedIn').innerHTML = ""
    // }
    // if (elemento.Mail == ""){
    //   template.getElementById('E-Mail').innerHTML = ""
    // }
    // if (elemento.WebSite == ""){
    //   template.getElementById('WebSite').innerHTML = ""
    // }
  
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  }) 
  card.insertBefore(fragment, card.children[1])
}
showCard()


$num = $('.ui-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $('.ui-card:nth-child(' + $even + ')').addClass('active');
    $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.ui-card:nth-child(' + $even + ')').next().addClass('next');

  } else {
    $('.ui-card:nth-child(' + $odd + ')').addClass('active');
    $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
  }

$('.ui-card').click(function(e) {
  $slide = 0; 
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
 
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prevprev prev active next nextnext');
 
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
  }
);
 
 
// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});