/*let carro1=prompt("Digite o nome do carro 1:");
let velocidade1=parseInt(prompt("Digite a velocidade do carro 1:"));
let carro2=prompt("Digite o nome do carro 2:");
let velocidade2=parseInt(prompt("Digite a velocidade do carro 2:"));

if(velocidade1>velocidade2){
    alert("O " + carro1 + " é mais rapido que o "+ carro2);

}else if(velocidade1<velocidade2){
    alert("O " + carro2 + " é mais rapido que o "+ carro1);

} else{  alert("A velocidade do " + carro1 + " e " + carro2 + " são iguais!");

}*/
const carro1=prompt("Digite o nome do carro 1:");
let velocidade1=parseFloat(prompt("Digite a velocidade do carro 1:"));
const carro2=prompt("Digite o nome do carro 2:");
let velocidade2=parseFloat(prompt("Digite a velocidade do carro 2:"));

let mensagem=velocidade1>velocidade2 ? 
("O " + carro1 + " é mais rapido que o "+ carro2): 
velocidade1<  velocidade2 ? 
("O " + carro2 + " é mais rapido que o "+ carro1):
("A velocidade do " + carro1 + " e " + carro2 + " são iguais!");

alert(mensagem)