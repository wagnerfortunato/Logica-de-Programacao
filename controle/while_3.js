const futuro = Date.now() + 20000;
let quantidade = 0;

while(Date.now() < futuro) {
    quantidade++;
}

//1733269753324
console.log('Qntde: ' + quantidade);
