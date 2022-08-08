var status = 0;
var datatxt = "";
var attd = new Date();
var dia = attd.getDay();
var mes = attd.getMonth();
var ano = attd.getFullYear();
var dados = [];

console.log("Sistema de controle de eventos:");

var prompt = require("prompt-sync")();

const fs = require('fs');


d();

function d(){
    d1a = prompt("Qual será o dia do evento? ");
    console.log("Adicionou: " + d1a);

    status = 1;

    if(d1a <= dia && status == 1){
    console.log("Adicione um dia posterior ao dia atual!");
    d();
    }

    if(d1a > dia && status == 1){
    m();
    status = 0;
    }
}

function m(){
    m3s = prompt("Qual será o mês do evento? ");
    console.log("Adicionou: " + m3s);

    status = 1;

    if(m3s < mes && status == 1){
    console.log("Adicione um mês posterior ou igual ao mês atual! ");
    m();
    }

    if(m3s >= mes && status == 1){
    a();
    status = 0;
    }
}

function a(){
    an0 = prompt("Qual será o ano do evento? ");
    console.log("Adicionou: " + an0);

    status = 1;

    if(an0 < ano && status == 1){
    console.log("Adicione um ano posterior ou igual ao ano atual! ");
    a();    
    }

    if(an0 >= ano && status == 1){
    datatxt = "" + d1a + "/" + m3s + "/" + an0;
    status = 0;
    id();
    }
}

function id(){
 
    idade = prompt("Qual a sua idade?" );
    console.log("Adicionou: " + idade);
 
    status = 1;
 
    if(idade < 18 && status == 1 ){
    console.log("É necessário possuir 18 anos para prosseguir!");
    id();
    }
 
    if(idade >= 18 && status == 1){
    pp();
    status = 0;
    }

}

function pp(){
    participantes = prompt("Serão quantos participantes? ");
    console.log("Adicionou: " + participantes);

    status = 1;

    if(participantes > 100 && status == 1){
    console.log("Não é possível adicionar mais de 100 participantes!");
    pp();
    }

    if(participantes <= 100 && status == 1){
    status = 0;
    pl();
    }
}

function pl(){
    palestrantes = prompt("Serão quantos palestrantes? ");
    console.log("Adicionou: " + palestrantes);

    status = 1;

    if(palestrantes > 5 && status == 1){
    console.log("Não é possível adicionar mais de 5 palestrantes!");
    pl();
    }
    
    if(palestrantes <= 5 && status == 1){
    status = 0;
    log();
    }
}

function log(){

   dados = ["Cadastro concluído:", "Data: " + datatxt, "Participantes: " + participantes, "Palestrantes: " + palestrantes];

   var medir = dados.length;
   
   for(var x = 0; x < medir; x++){
   console.log(dados[x]);
   }

   dados = ["Cadastro concluído: *", "Data: " + datatxt + "*", "Participantes: " + participantes + "*", "Palestrantes: " + palestrantes];

   dadosrefinados = dados[0].replace("*", "\n");
   dadosrefinados = dadosrefinados + dados[1].replace("*", "\n");
   dadosrefinados = dadosrefinados + dados[2].replace("*", "\n");
   dadosrefinados = dadosrefinados + dados[3].replace("*", "\n");
   datarefinada = "" + d1a + "-" + m3s + "-" + an0;

   const data = dadosrefinados;
   fs.writeFileSync(datarefinada + ".txt", data);
   console.log("Relatório do cadastro adicionado a pasta do sistema!");

   prompt("Sistema finalizado!"); 
}

