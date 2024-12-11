let nota = 6.0;

switch(Math.ceil(nota)){
    default:
        break;
    case 10: case 9: case 8: case 7:
        console.log('Parabens!');
        break;
    case 6:
    case 5:
        console.log('Recuperação!');
        break;
    case 4:
    case 3:
    case 2:
        console.log('Reprovado!');
        break;
    case 1:
    case 0:
        console.log('Muito reprovado!');    
}
console.log('Fim!')