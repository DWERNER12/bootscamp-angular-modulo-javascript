const peso = 80;
const altura = 1.76;

const imc = peso / Math.pow(altura,2);

if (imc < 18.5) console.log(`Seu IMC é ${imc.toFixed(2)} e você esta Abaixo do Peso`);
if (imc >= 18.5 && imc < 25) console.log(`Seu IMC é ${imc.toFixed(2)} Peso Normal`);
if (imc >= 25 && imc < 30) console.log(`Seu IMC é ${imc.toFixed(2)} e você esta Acima do Peso`);
if (imc >= 30 && imc < 40) console.log(`Seu IMC é ${imc.toFixed(2)} e você esta Obeso`);
if (imc > 40) console.log(`Seu IMC é ${imc.toFixed(2)} Obesidade Grave`);