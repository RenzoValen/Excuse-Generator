window.onload = function() {
    let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['se comió', 'orinó en', 'aplastó', 'rompió'];
    let what = ['mi tarea', 'mi teléfono', 'el carro'];
    let when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];
    
    function generateExcuse() {
      let randomWho = who[Math.floor(Math.random() * who.length)];
      let randomAction = action[Math.floor(Math.random() * action.length)];
      let randomWhat = what[Math.floor(Math.random() * what.length)];
      let randomWhen = when[Math.floor(Math.random() * when.length)];
  
      let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
      return excuse;
    }
    document.getElementById('excuse').innerHTML = generateExcuse();
  };