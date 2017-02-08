$(function() {
  (function criteriaButtons() {
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
  })();

  $('#submit').click(function() {
    var invalid = $('form fieldset[required] input:invalid, form fieldset[required] select:invalid, form fieldset[required] textarea:invalid');

    $('.invalid').removeClass('invalid');
    $('#invalid').removeAttr('id');

    if (invalid.length !== 0) {
      $(invalid).parent().addClass('invalid');
      // Important to add to parent to not overwrite individual field ids
      $(invalid[0]).parent().attr('id', 'invalid');
    } else {
      // var save = { source: window.location.pathname.slice(1), };

      // $.ajax({
      //   method: 'POST',
      //   url: "/app/save",
      //   data: save,
      //   success: function(res) {
      //     console.log(res);
      //     window.location.href = '/thankyou/';
      //   }
      // });
    }
  });
});