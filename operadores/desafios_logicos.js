let passear = true;
let casa = false;

let passearShopping = passear && casa; // AND
console.log('Vamos ao Shopping"?' ,passearShopping);

let assistirFilme = passearShopping || casa;
console.log('Vamos ficar em casa!' ,assistirFilme);

let vamosDormir = !assistirFilme;
console.log('Vamos descansar?' ,vamosDormir);

let verdadeira1 = 2 + 5 >= 7 && 8 > 2;
let verdadeira2 = !(6 * 6 > 3);

console.log('A minha conta é "?' ,verdadeira1);
console.log('mas o resultado é "?' ,verdadeira2);

let falso1 = 8 - 4 > 12 || false || 15 === '15';
let falso2 = !(7 !== 7 || '3' !== 3);

console.log(falso1);
console.log(falso2);

