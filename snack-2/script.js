// Funzione che genera numeri casuali ogni tot
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Array di oggetti per le `squadre di calcio
  const squadreCalcio = [
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Fiorentina', puntiFatti: 0, falliSubiti: 0 }
  ];
  
  // Numeri casuali per punti fatti e falli subiti
  for (let squadra of squadreCalcio) {
    squadra.puntiFatti = generaNumeroCasuale(1, 100);
    squadra.falliSubiti = generaNumeroCasuale(1, 50);
  }
  
  // Array con nomi e falli subiti
  const squadreNomiEFalli = squadreCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
  
  // Console log di tutto
  console.log("Squadre di calcio:", squadreCalcio);
  console.log("Nomi e falli subiti:", squadreNomiEFalli);
  