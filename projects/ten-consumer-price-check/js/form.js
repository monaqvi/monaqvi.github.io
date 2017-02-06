$(function() {
  $('#speak_with_add_criteria').click(function() {
    var questions = $('#query-template > div').clone();
    $('#speak_with').append(questions);
  });
});