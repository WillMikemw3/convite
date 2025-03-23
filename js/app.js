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
        // Esconde os botões
        elemento.style.display = 'none';
        botaoSim.style.display = 'none';

        // Altera o estilo e o texto
        textoDinamico.style.fontSize = '2em';
        textoDinamico.innerHTML = "<h2>Eu sabia que você não iria resistir, hahahah!</h2><h3>Te Aguardo no WhatsApp! Até breve!!! 🥰</h3>";

       
        // Número do WhatsApp no formato internacional
        const numeroWhatsApp = "5521969206997"; // Seu número
        const mensagem = encodeURIComponent("Eu aceitei o convite! 😍");


  // Redireciona para o WhatsApp depois de 2 segundos
         setTimeout(() => {
              window.location.href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;  
        }, 2000);
      
    
    });
});
