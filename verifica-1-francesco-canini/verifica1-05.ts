class Persona {
    constructor(public nome: string, public cognome: string, public eta: number) {}
  }
  
  class Film {
    constructor(public titolo: string, public anno: number, public regista: Persona, public cast: Persona[]) {}
  }
  
  const elencoFilm: Film[] = [
    
    new Film(
      'bo',
      1999,
      new Persona('bo', 'bo', 53),
      [
        new Persona('bo', 'bo', 78),
        new Persona('bo', 'bo', 8),
        new Persona('bo', 'bo', 92),
      ]
    ),
    new Film(
      'Up',
      2009,
      new Persona('Pete', 'Docter', 53),
      [
        new Persona('carl', 'fredricksen', 78),
        new Persona('russel', 'bo', 8),
        new Persona('charles', 'muntz', 92),
      ]
    ),
    new Film(
      'puss in boots: the last wish',
      2022,
      new Persona('joel', 'crawford', 56),
      [
        new Persona('antonio', 'banderas', 58),
        new Persona('salma', 'hayek', 40),
        new Persona('harvey', 'guillen', 62),
      ]
    ),
  ];
  
  const filmDopoIl2000 = elencoFilm.filter((film) => film.anno > 2000);
  console.log(filmDopoIl2000);
  