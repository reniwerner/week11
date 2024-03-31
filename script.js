$(document).ready(function() {
    $('#insertVerse').click(function() {
      let genre = $('#genre').val();
      let verse = $('#verse').val();
      let position = parseInt($('#position').val());
      
      if (verse.trim() === '') {
        alert('Please enter a verse.');
        return;
      }
      
      if (position < 1) {
        alert('Position should be 1 or greater.');
        return;
      }
      
      let output = $('#output');
  
      if (genre === 'upbeat') {
        $('<div>').text('Upbeat verse goes here.').appendTo(output);
      } else if (genre === 'melancholy') {
        $('<div>').text('Melancholy verse goes here.').appendTo(output);
      }
  
      $('<div>').text(verse).prependTo(output).before(output.children().eq(position - 1));
    });
  });