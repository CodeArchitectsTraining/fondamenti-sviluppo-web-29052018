/**
 * Rappresenta uno studente.
 */
class Studente {
  /**
   * Il nome dello studente.
   */
  public nome: string;
  public cognome: string;
  public voto: number;

  constructor(nome: string, cognome: string, voto: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.voto = voto;
  }
}
class ClasseStudenti {
  public studenti: Studente[];

  constructor() {
    this.studenti = [];
  }

  public calcolaMedia(): number {
    let media: number = 0;

    if (this.studenti.length === 0) {
      return media;
    }

    let voti: number[] = this.studenti.map((s) => s.voto);

    // Alternativa a this.studenti.map(...)
    // let voti2: number[] = [];
    // for(let studente of this.studenti)
    // {
    //   voti2.push(studente.voto);
    // }

    media = voti.reduce((prev, curr) => prev + curr, 0);

    media = media / this.studenti.length;

    return media;
  }

}

function Run(Classe: ClasseStudenti) {
  console.log(Classe.calcolaMedia());
}


let classe5b: ClasseStudenti = new ClasseStudenti();
let studente1: Studente = new Studente('angelo', 'lillo', 10);
let studente2: Studente = new Studente('Tommaso', 'Assente', 7);
classe5b.studenti.push(studente1, studente2);

Run(classe5b);
