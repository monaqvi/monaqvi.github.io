(function() {
  var msgs = [
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
    'SWIFT',
    'D3.js',
    'AWS',
    'investing',
    'traveling',
    'collaborating',
    'learning',
    'problem solving',
  ];

  var numWords = msgs.length;
  var typeSpeed = 100,
      changeSpeed = 1500;

  var randomIndex = function () {
    return Math.floor(Math.random() * numWords);
  };

  var typewriter = function(word, text, i) {
    document.getElementById('change_this').innerHTML = text;
    if (text === word) return;
    setTimeout(function() { typewriter(word, text + word[i], i + 1) }, typeSpeed);
  }

  var changeMsg = function() {
    var word = msgs[randomIndex()];
    typewriter(word, '', 0);
    setTimeout(changeMsg, word.length * typeSpeed + changeSpeed);
  }

  changeMsg();
})();