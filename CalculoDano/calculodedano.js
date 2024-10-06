const personagem1=prompt("Qual é o primeiro personagem?");
let poderataque=parseFloat(prompt("Quantos pontos de ataque?"));

const personagem2=prompt("Qual é o segundo personagem?");
let pontosdevida=parseFloat(prompt("Quantos pontos de vida?"));
let poderdefesa=parseFloat(prompt("Quantos pontos de defesa?"));
let escudo=prompt("O personagem tem escudo?");


let resultado= (poderataque>poderdefesa && escudo=="nao")? (poderataque-poderdefesa):
               (poderataque>poderdefesa && escudo=="sim")? ((poderataque-poderdefesa)/2): (0);



resultado=pontosdevida-resultado;


alert("O personagem "+ personagem1 + " atacou com " + poderataque + " pontos de ataque. " +
"O personagem "+ personagem2 + " defendeu com "  + poderdefesa + " pontos de defesa. " +
" Apos o ataque, o personagem " + personagem2 + " ficou com " + resultado + " pontos de vida."
);
