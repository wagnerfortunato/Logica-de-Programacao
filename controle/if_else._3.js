const hora = 22;
let saudacao;

if(hora < 18) {
    saudacao = 'Bom dia!';
}else{
    if(hora < 18){
    saudacao = 'Boa tarde!';
    }else{
    saudacao = 'Boa noite!';
    }
}

    console.log(saudacao);