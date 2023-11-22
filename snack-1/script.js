// Arrat di oggetti per le bici
const biciDaCorsa = [
    { nome: 'Jhonny',
      peso: 8.5 },
    { nome: 'Sky',
      peso: 6.6 },
    { nome: 'Walker',
      peso: 7.2 }
  ];
  
  // Ciclo che trova la bici che pesa di meno
  let biciPesoMinore = biciDaCorsa[0];
  for (let i = 1; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciPesoMinore.peso) {
      biciPesoMinore = biciDaCorsa[i];
    }
  }
  
  // Console log della bici con il peso minore e delle altre bici
  const { nome, peso } = biciPesoMinore;
  console.log(`La bici più leggera è la ${nome} che pesa ${peso} kg.`);
  console.log(biciDaCorsa)