var calculators = {
  results: [],
  drakeCalc: function(R, fp, ne, fl, fi, fc, L) {
    var life = Math.round(R * fp * ne * fl * fi * fc * L);
    this.results.push(life);
  }
};


$(document).ready( function(){

  var $inputs = $('.inputs').children();
  var $infoBox = $('.info-box').children();

  for(var i = 0; i < $inputs.length; i++ ) {
    (function(ix) {
      $($inputs[ix]).find('.drake-input').focus(function() {
        $(this).closest('div').addClass('highlight');
        $($infoBox[ix]).fadeIn();
      })
      $($inputs[ix]).find('.drake-input').blur(function() {
        $(this).closest('div').removeClass('highlight');
        $($infoBox[ix]).hide();
      })
    })(i);
  }

  var handlers = {
    gatherDrakeInputs: function() {
      var inputR = $('#inputR').val();
      var inputFp = $('#inputFp').val();
      var inputNe = $('#inputNe').val();
      var inputFl = $('#inputFl').val();
      var inputFi = $('#inputFi').val();
      var inputFc = $('#inputFc').val();
      var inputL = $('#inputL').val();
      calculators.drakeCalc(inputR, inputFp, inputNe, inputFl, inputFi, inputFc, inputL);
      views.displayDrakeResult();
    }
  };

  var views = {
    displayDrakeResult: function() {
      var drakeResult = $('#drakeResult');
      drakeResult.empty();
      drakeResult.append(calculators.results[0]).hide().fadeIn();
      calculators.results.length = 0;
    }
  };

  $('.calcDrake').click(handlers.gatherDrakeInputs);
  $('.calcDrake').hover(function() {
      $(this).addClass('highlight');
    }, function() {
      $(this).removeClass('highlight');
    }
  );

  $('.drake-input').keyup(function(e) {
    if (e.which == 13) {
      handlers.gatherDrakeInputs();
    }
  });

})
