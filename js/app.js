document.addEventListener('DOMContentLoaded', function () {
    const elemento = document.getElementById('noButton');

    function moverBotao() {
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        const novaPosX = Math.random() * (larguraJanela - elemento.offsetWidth);
        const novaPosY = Math.random() * (alturaJanela - elemento.offsetHeight);

        elemento.style.position = 'absolute';
        elemento.style.left = `${novaPosX}px`;
        elemento.style.top = `${novaPosY}px`;
    }

    elemento.addEventListener('mouseover', moverBotao);
    elemento.addEventListener('touchstart', moverBotao);
});

document.addEventListener('DOMContentLoaded', function () {
    const botaoSim = document.getElementById('YesButton');
    const elemento = document.getElementById('noButton');
    const textoDinamico = document.getElementById('h1');

    botaoSim.addEventListener('click', function () {
        
        elemento.style.display = 'none';
        botaoSim.style.display = 'none';

       
        textoDinamico.style.fontSize = '2em';
        textoDinamico.innerHTML = "<h2>Eu sabia que você não iria resistir, hahahah!</h2><h3>Te Aguardo no WhatsApp! Até breve!!! 🥰</h3>";

     //Exemplo abaixo:
//  const numeroWhatsApp = "5521969206997"; // Seu número Aqui
        
        const numeroWhatsApp = "5521969206997"; // Seu número Aqui


        const mensagem = encodeURIComponent("Eu aceitei o convite! 😍");


  // Redireciona para o WhatsApp depois de 2 segundos
         setTimeout(() => {
              window.location.href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;  
        }, 2000);
      
    
    });
});
