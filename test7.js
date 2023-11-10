
exports.getUwe2 = () => {
    console.log("test9 inside uwe()");
}


export class Buch {
    constructor(name) {
      this.name = name;
    }
  }

exports.getBuch = () => {
    return new Buch("Lieblingsbuch1");
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
  
  exports.allColors = allColors;