let form = document.querySelector("form")
let inputWeight = document.querySelector("#weight");
let inputHeight = document.querySelector("#height");


const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function(){
    modal.wrapper.classList.add('open');
  },
  close: function(){
    modal.wrapper.classList.remove('open');
  },

};


form.onsubmit = (e) => {
  e.preventDefault();
  
  let weight = inputWeight.value;
  let Height = inputHeight.value;

  const result = IMC( weight, Height);
  const message = `Seu IMC é de ${result}`;
  
  modal.message.innerText = message;
  modal.open();
}

modal.buttonClose.onclick = () => {
    modal.wrapper.classList.remove("open");
}

function IMC (weight, height){
  return (weight / ((height / 100) **2)).toFixed(2);
}



