const elForm = document.querySelector('.js-form');
const elRotateSelect = elForm.querySelector('.js-rotate-select');
const elClearBtn = elForm.querySelector('.js-clear-btn');
const elTextInput = elForm.querySelector('.js-input-text');
const elTextOutput = elForm.querySelector('.js-output-text');
const elCopyBtn = elForm.querySelector('.js-copy-btn');


function showOptionRot() {
  const elRotFragment = document.createDocumentFragment();
  for (let rot = 1; rot <= 25; rot++) {
    const elRotOption = document.createElement('option');
    elRotOption.textContent = `Rot - ${rot}`;
    elRotOption.value = rot;
    elRotFragment.appendChild(elRotOption);
  }
  elRotateSelect.appendChild(elRotFragment);
}

function caserShifr (str, sum) {
  if (sum < 0) {
    return caserShifr(str, sum + 26);
  }

  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];

    if (c.match(/[a-z]/i)) {
      var shifr = str.charCodeAt(i);

      if (shifr >= 65 && shifr <= 90) {
        c = String.fromCharCode(((shifr - 65 + sum) % 26) + 65);
      } else if (shifr >= 97 && shifr <= 122) {
        c = String.fromCharCode(((shifr - 97 + sum) % 26) + 97);
      }
    }
    output += c;
  }
  elTextOutput.value = output;
}

showOptionRot();

elForm.addEventListener('keyup', evt => {
  evt.preventDefault();
  const inputUser = elTextInput.value;
  const inputRot = Number(elRotateSelect.value);

  caserShifr(inputUser, inputRot);
  elRotateSelect.addEventListener('input', evt => {
    const inputRot = Number(elRotateSelect.value);
    caserShifr(inputUser, inputRot);
  });
});


elCopyBtn.addEventListener('click', (e) => {
  e.preventDefault();

  elTextOutput.select();
   document.execCommand("copy");
});

