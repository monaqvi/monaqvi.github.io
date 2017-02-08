$(function() {
  var latestSet;
  $('#speak_with_add_criteria').click(function() {
    latestSet = $('#query-template > div').clone();
    $('#speak_with').append(latestSet);
    $('#speak_with_remove_criteria').show()
  });

  $('#speak_with_remove_criteria').click(function() {
    var numFields = $('#speak_with > div').length;
    if(numFields > 1) $('#speak_with > div:last-of-type').remove();
    if(numFields === 2) $('#speak_with_remove_criteria').hide();
  });
});