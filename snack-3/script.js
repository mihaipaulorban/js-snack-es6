function valoriCompresi(array, a, b) {
    if (a < b && b < array.length) {
      // Filtra i valori compresi tra a e b
      const valoriCompresi = array.filter((elemento, indice) => indice >= a && indice <= b);
      return valoriCompresi;
    } else {
      console.log("Assicurati che a sia minore di b e che b sia all'interno dell'array.");
      return [];
    }
  }
  

  const arrayDiEsempio = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const risultato = valoriCompresi(arrayDiEsempio, 2, 5);
  console.log("Array iniziale: " + arrayDiEsempio)
  console.log("Risultato: " + risultato);