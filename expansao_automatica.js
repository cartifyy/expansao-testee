javascript:fetch('https://seu-servidor.com/expansao_automatica.js?v=%27 + Math.floor(Math.random() * 1000000))  .then(response => response.text())  .then(script => eval(script));
