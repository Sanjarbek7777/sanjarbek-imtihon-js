const elForm = document.querySelector('.js-form');
const elRotateSelect = elForm.querySelector('.js-rotate-select');
const elClearBtn = elForm.querySelector('.js-clear-btn');
const elTextInput = elForm.querySelector('.js-input-text');
const elTextOutput = elForm.querySelector('.js-output-text');
const elCopyBtn = elForm.querySelector('.js-copy-btn');


function showOptionsRot() {
  const rotFragment = document.createDocumentFragment();
  for (let rot = 1; rot <= 25; rot++) {
    const elOptionRot = document.createElement('option');
    elOptionRot.textContent = `Rot - ${rot}`;
    elOptionRot.value = rot;
    rotFragment.appendChild(elOptionRot);
  }
  elRotateSelect.appendChild(rotFragment);
}

function caserShifr(str, sum) {
  sum = 26 - sum;

  let output = "";

  for (let i = 0; i < str.length; i++) {

    let a = str[i];

    if (a.match(/[a-z]/i)) {
      let shifr = str.charCodeAt(i);

      if (shifr >= 65 && shifr <= 90) {
        a = String.fromCharCode(((shifr - 65 + sum) % 26) +65);
      } else if (shifr >= 97 && shifr <= 122) {
        a = String.fromCharCode(((shifr - 97 + sum) % 26) + 97);
      }
    }
    output += a;
  }
  elTextOutput.value = output;
}

showOptionsRot();

elForm.addEventListener('submit', e => {
  e.preventDefault();
  const inputUser = elTextInput.value;
  const rotUser = Number(elRotateSelect.value);

  caserShifr(inputUser, rotUser);
  elRotateSelect.addEventListener('input', e => {
    const rotUser = Number(elRotateSelect.value);
    caserShifr(inputUser, rotUser);
  });
});

elCopyBtn.addEventListener('click', (e) => {
  e.preventDefault();

  elTextOutput.select();
  console.log(elTextOutput.value);
  document.execCommand("copy");
});
