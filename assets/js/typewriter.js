(function() {
  var words = [
    'Javascript',
    'Python',
    'Django',
    'Angular',
    'React',
    'React Native',
    'Ionic',
    'functional programming',
    'jQuery',
    'Backbone',
    'SQL',
    'Mongo',
    'Node.js',
    'milk and cereal',
    'Github',
    'HTML',
    'CSS',
    'Sass',
    'Go',
    'SWIFT',
    'D3.js',
    'AWS',
    'investing',
    'traveling',
    'collaborating',
    'learning',
    'problem solving',
  ];

  var numWords = words.length;

  var console = document.getElementById('console');

  var fullWord = console.innerHTML,
      currWord = fullWord;

  var typespeed = 100,
      pause = 1000;

  erase();

  function randomWord(prev) {
    var next = words[Math.floor(Math.random() * numWords)];
    return (next === prev) ? randomWord(prev) : next;
  };
  
  function type() {
    if (currWord === fullWord) {
      setTimeout(erase, pause);
    } else {
      setTimeout(type, typespeed);
      currWord  = fullWord.slice(0, currWord.length + 1);
    }
    console.innerHTML = currWord;
  }

  function erase() {
      if (currWord === '') {
          fullWord = randomWord(fullWord);
          setTimeout(type, pause);
      } else {
        setTimeout(erase, typespeed);
        currWord  = fullWord.slice(0, currWord.length - 1);
      } 
      console.innerHTML = currWord;
  }
})();
