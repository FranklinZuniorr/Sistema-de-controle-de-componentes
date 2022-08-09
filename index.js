var pecas = [];
var quantidade = 0;
var y = 1;

console.log("Sistema de controle de peças:");

const prompt = require("prompt-sync")();

const fs = require('fs');

n();


function n(){
    if(quantidade >= 10){
        prg = "";
        console.log("10 é o limite de peças!");
        console.log("---------------------------------------------");
        console.log("Relatório de peças:");
        console.log("---------------------------------------------");
        rel = "Relatório de peças:\n";
        rel = rel + ("---------------------------------------------\n");
        for(x = 0; x < quantidade; x++){
        rel = rel + "Peça: " + y-- + "\n";
        console.log("Peça: " + y++);
        console.log("Nome: " + pecas[x].nome);
        rel = rel + "Nome: " + pecas[x].nome + "\n";
        console.log("Peso: " + pecas[x].peso) + " Gramas";
        rel = rel + "Peso: " + pecas[x].peso + " Gramas" + "\n";
        console.log("---------------------------------------------");
        rel = rel + "---------------------------------------------\n";
        }
        log();
        }

    nome = prompt("Qual o nome da peça? ");
    console.log("Adicionou: " + nome);

    if(nome.length <= 3){
    console.log("Adicione um nome com mais de 3 caracteres!");
    n();
    }

    else if(nome.length > 3){
    pecas[quantidade] = {nome};
    p();
    }
    }

function p(){
    peso = prompt("Qual o peso em gramas da peça? ");
    console.log("Adicionou: " + peso);

    if(peso <= 100){
    console.log("Adicione um peso maior que 100gramas! ");
    p();
    }

    else if(peso > 100 && quantidade <= 10){
    pecas[quantidade] = {nome, peso};
    quantidade++;
    console.log("Adicionou: " + quantidade)
    pergunta();
    }
    }

function pergunta(){

    prg = prompt("Deseja adicionar mais peças? (s ou n)");

    if(prg == "s" || prg == "S"){
    prg = "";
    n();  
    }

    if(prg == "n" || prg == "N"){
    prg = "";
    console.log("---------------------------------------------");
    console.log("Relatório de peças:");
    console.log("---------------------------------------------");
    rel = "Relatório de peças:\n";
    rel = rel + ("---------------------------------------------\n");
    for(x = 0; x < quantidade; x++){
    rel = rel + "Peça: " + y + "\n";
    console.log("Peça: " + y++);
    console.log("Nome: " + pecas[x].nome);
    rel = rel + "Nome: " + pecas[x].nome + "\n";
    console.log("Peso: " + pecas[x].peso) + " Gramas";
    rel = rel + "Peso: " + pecas[x].peso + " Gramas" + "\n";
    console.log("---------------------------------------------");
    rel = rel + "---------------------------------------------\n";
    }
    log();
    }
    }

function log(){

    dt = new Date;
    hs = dt.getHours() + "." + dt.getMinutes() + "Hs";
      
    const data = rel;
    fs.writeFileSync(hs + ".txt", data);
    console.log("Relatório do cadastro adicionado à pasta do sistema!");
      
    prompt("Sistema finalizado!");
    }
     





