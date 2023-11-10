class Person {
    constructor(vorname, nachname, alter) {
      this._vorname = vorname;
      this._nachname = nachname;
      this._alter = alter;
    }
  
    information() {
      return (`Mein Name ist ${this._vorname} ${this._nachname} und ich bin ${this._alter} Jahre alt!`);
    }
  }
  
  class Schüler extends Person {
    tuWas () {
      return "keine Lust";
    }
  }
  
  class Lehrer extends Person {
    constructor(vorname, nachname, alter, fächer) {
      super(vorname, nachname, alter);
      this._fächer = fächer;
    }
    information() {
      return super.information() + " Ich unterrichte " + this._fächer;
    }
    tuWas() {
      return "korrigiere Klausur";
    }
  }
  