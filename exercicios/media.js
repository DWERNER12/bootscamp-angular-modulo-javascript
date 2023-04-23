const primeiraMedia = 7;
const segundaMedia = 9;
const terceiraMedia = 6.7;

const media = (primeiraMedia + segundaMedia + terceiraMedia) / 3;

if (media < 5) {
    console.log(`Média é ${media.toFixed(2)}, o aluno está Recuperação`); 
} else if (media >= 5 && media < 7) {
    console.log(`Média é ${media.toFixed(2)}, o aluno está Recuperação`);
} else {
    console.log(`Média é ${media.toFixed(2)}, o aluno está Aprovado.`);
}