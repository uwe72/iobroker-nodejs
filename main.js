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
  
  //exports.Person = Person;
  //exports.Schüler = Schüler;
  //exports.Lehrer = Lehrer;

  module.exports = Person;
  module.exports = Schüler;
  module.exports = Lehrer;


  
/*uwe2();
exports.getUwe2 = () => {
    console.log("test9 inside uwe()");
}


function uwe2() {
    console.log("test9 inside uwe()");
}
class Color {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  }

  const allColors = [
    new Color('brightred', '#E74C3C'),
    new Color('soothingpurple', '#9B59B6'),
    new Color('skyblue', '#5DADE2'),
    new Color('leafygreen', '#48C9B0'),
    new Color('sunkissedyellow', '#F4D03F'),
    new Color('groovygray', '#D7DBDD'),
  ];

  exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
  }

  exports.allColors = allColors;*/