


let testo =  document.querySelector('h1').innerHTML;
let testoCambiato = 'Bird House Shop';
let cambiato = false;

function changeText() {

  let h1 = document.querySelector('h1');
  if (!cambiato) {
    h1.innerHTML = testoCambiato;
  } else {
    h1.innerHTML = testo;

  }
  cambiato = !cambiato

}


let bodyColor = getComputedStyle(document.body).background;
let newBodyColor = getComputedStyle(document.getElementById('newcolor')).background;
let change = false;

function changeBackgroundColor(){
    if (!change){
        document.body.style.background = bodyColor;
        console.log(change)
    } else {
        document.body.style.background = newBodyColor;
    }
    change = !change
}

/*function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}*/

let addres = '5401 Santa Monica Blvd Hollywood, CA. 90029';
let newAddres = '1234 New Address, CA 90001';
let changed = false;

function changeFooterAddress(){
  let add = document.querySelector('footer p');

  if (!changed){
    add.innerHTML = newAddres;
  } else {
    add.innerHTML = addres;
  }
   changed = !changed
}
/*function changeFooterAddress(newAddress) {
  const footerAddress = document.querySelector('footer p');
  if (footerAddress) {
    footerAddress.textContent = newAddress;
  }
}*/


function addClassToAmazonLinks() {
  const amazonLinks = document.querySelectorAll('a[href*="amazon"]');
  amazonLinks.forEach(link => {
    link.classList.add('amazon-link');
  });
}


function toggleImageVisibility() {
  const images = document.querySelectorAll('table img');
  images.forEach(image => {
    image.classList.toggle('hidden');
  });
}


function changePriceColor() {
  const colors = ['red', 'green', 'blue', 'orange', 'purple'];
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    price.style.color = randomColor;
  });
}


