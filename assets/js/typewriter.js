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
  var timeout;
  var typeSpeed = 100,
      changeSpeed = 1500;

  timeout = typewriter(randomWord(), 0);

  function randomWord(prev) {
    var next = words[Math.floor(Math.random() * numWords)];
    return (next === prev) ? randomWord(prev) : next;
  };

  function typewriter(word, i) {
    var text = word.slice(0, i);
    var finished = (word === text);
    document.getElementById('change_this').innerHTML = text;
    return setTimeout(function() {
      timeout = typewriter((finished ? randomWord(word) : word), (finished ? 0 : (i + 1)));
      }, (finished ? changeSpeed : typeSpeed)
    );
  }
})();