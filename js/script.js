
// BOTÕES DO SISTEMA
var bCriptografar = document.getElementById('Criptografar');
var bDescriptografar = document.getElementById('Descriptografar');
var bbotaoCopia = document.getElementById('botaoCopia');

// AREAS DE INSERÇÃO E VIEW DO TEXTO
var textEncriptar = document.getElementById('textencriptar');
var textView = document.getElementById('textview');

// INICIANDO AS CONFIGURAÇÕES PARA A FUNÇÃO CRIPTOGRAFAR

bCriptografar.addEventListener('click', Criptografar);

function Criptografar(evento){
    let textoEncritado = textEncriptar.value;
    let codificacao = textoEncritado.replace(/a/gi, 'rgv').replace(/e/gi, 'veg').replace(/i/gi, 'zae').replace(/o/gi, "lhr").replace(/u/gi, 'nwq');
  
    textView.innerHTML = codificacao;
 
    // display da imagen fica none e botão copiar texto fica block
    document.getElementById('imagem').style.display = 'none';
    document.getElementById('botaoCopia').style.display = 'block';
}

// INICIANDO AS CONFIGURAÇÕES PARA A FUNÇÃO DESCRIPTOGRAFAR

bDescriptografar.addEventListener('click', Descriptografar);

function Descriptografar(evento){
    let textoEncritado = textView.value;
    let descodificado = textoEncritado.replace(/rgv/gi, 'a').replace(/veg/gi, 'e').replace(/zae/gi, 'i').replace(/lhr/gi, "o").replace(/nwq/gi, 'u');
    textView.innerHTML = descodificado;

    // display da imagen fica none e botão copiar texto fica block
    document.getElementById('imagem').style.display = 'none';
    document.getElementById('botaoCopia').style.display = 'block';
}

//CONFIGURANDO A FUNÇÃO COPIA TEXTO
bbotaoCopia.addEventListener('click', copiar);

function copiar(evento){
    textView.select();
     /* a função clipboard é a responsavel por copiar o texto,
     mais para usala precisamos também da função navegation */
    navigator.clipboard.writeText(textView.innerHTML);
    alert('Copiado!');
}
