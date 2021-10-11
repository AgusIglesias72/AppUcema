const template = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const card = document.getElementById('cardContainer')



const showCard = () => {
  orgTotal.forEach(elemento =>{
    template.getElementById('image').setAttribute('src', elemento.img)
    template.getElementById('body-title').textContent = elemento.nombre
    template.getElementById('text-One').textContent = elemento.descUno
    template.getElementById('text-Two').textContent = elemento.descDos
    template.getElementById('text-Three').textContent = elemento.descTres
    template.getElementById('text-Four').textContent = elemento.descCuatro

    const footer = template.getElementById('footer-card')
    footer.innerHTML=""
    if (elemento.Mail != ""){
      const createMail = document.createElement('div')
      createMail.classList.add('card-footer-text')
      createMail.innerHTML = `
      <a id="E-Mail${elemento.id}" class="logo" href="${elemento.Mail}"><i class="fas fa-envelope fa-3x"></i></a>
      `
      footer.appendChild(createMail)
    }

    if (elemento.linkedIn != ""){
      const createLink = document.createElement('div')
      createLink.classList.add('card-footer-text')
      createLink.innerHTML = `
      <a id="LinkedIn${elemento.id}" class="logo" href="${elemento.linkedIn}"><i class="fab fa-linkedin fa-3x"></i></a>
      `
      footer.appendChild(createLink)
    }
    if (elemento.WebSite != ""){
      const createWeb = document.createElement('div')
      createWeb.classList.add('card-footer-text')
      createWeb.innerHTML = `
      <a id="WebSite${elemento.id}" class="logo" href="${elemento.WebSite}"><i class="fas fa-globe fa-3x"></i> </i></a>
      `
      footer.appendChild(createWeb)
    }
    if (elemento.Phone != ""){
      const createPhone = document.createElement('div')
      createPhone.classList.add('card-footer-text')
      createPhone.innerHTML = `
      <a id="Phone${elemento.id}" class="logo" href="${elemento.Phone}"><i class="fas fa-phone-square-alt fa-3x"></i></a>
      `
      footer.appendChild(createPhone)
    }

  
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

let startX, startY, movingX, movingY

const touchStart = evt => {
  startX = evt.touches[0].clientX;
  startY = evt.touches[0].clientY;
}
const touchMove = evt => {
  movingX = evt.touches[0].clientX;
  movingY = evt.touches[0].clientY;
}

const touchEnd = () => {
  if (startX+100 < movingX && (startY - movingY) < 30){
    console.log(startY)
    console.log(movingY)
    console.log('left')
    $('.active').prev().trigger('click');
  } else if (startX-100 > movingX && (startY - movingY) < 30){
    console.log(startY)
    console.log(movingY)
    console.log('right')
    $('.active').next().trigger('click');
  }

  // if(detectMovement)
}