$(function() {
  var latestSet;
  $('#speak_with_add_criteria').click(function() {
    latestSet = $('#query-template > div').clone();
    $('#speak_with').append(latestSet);
  });

  $('#speak_with_remove_criteria').click(function() {
    if($('#speak_with > div').length > 1) $('#speak_with > div:last-of-type').remove();
  });
});