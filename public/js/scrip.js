const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=ff993d7eae8816d88430021140c022ae';
let html = '';

async function currency() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const arrKeys = Object.keys(data.rates);
  const { rates } = data;
  console.log(rates);
  arrKeys.map((item) => html += `<option value=${item}>${item}</option>`);
  console.log(html);
  for (let i = 0; i < select.length; i++) {
    select[i].innerHTML = html;
  }

  function convert(i, j) {
    input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
  }

  input[0].addEventListener('keyup', () => convert(1, 0));

  input[1].addEventListener('keyup', () => convert(0, 1));

  input[0].addEventListener('change', () => convert(1, 0));

  input[1].addEventListener('change', () => convert(0, 1));
}
currency();
