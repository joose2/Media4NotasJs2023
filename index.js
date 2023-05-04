alert("Preenchar as 4 notas usando Números de 0 a 10");

let n1= prompt("Primeira Nota:____");
let n2= prompt("Segunda Nota:____");
let n3= prompt("Terceira Nota:____");
let n4= prompt("Quarta Nota:____ ");
let resultado= (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;



if(n1>10.0 || n2>10.0 || n3>10.0 || n4>10.0)
alert("Fale suas notas entre 0 e 10");



else if(n1<0.0 || n2<0.0 || n3<0.0 || n4<0.0)
alert("Fale somente notas entre 0 e 10");



else if(resultado<5.0)
alert(`Você recebeu a média ${resultado} resultado: Não foi dessa Vez , Você Esta reprovado !!!`);



else if(resultado>5.0 && resultado<7.0)
alert(`Você recebeu a média ${resultado} resultado: Vamos tenta mais uma vesz ok , Você Esta recuperação !?!?`);



else if(resultado>7.0)
alert(`Você recebeu a média ${resultado} resultado: Parabens Você esta aprovado !!!`);