$(document).ready(function ()
{
  init();
})

function init() {
  // getTracks();
  var tracks = ['track1.mp3', 'Deathmole - Present Peregrine - 02 Sparrowhawk.mp3'];
  displayTracks(tracks);
  addClickEvent();
}

function displayTracks(tracks) {
  $.each(tracks, function(number, filename ) {
      $('#listing').append('<li>' + filename + '</li>');
  });
}

function getTracks() {
  $.ajax({
    url: "",
    success: function(data){

       $(data).find("a:contains(.mp3)").each(function(){


          // will loop through
          var track = $(this).attr("href");
          $('<p></p>').html(track).appendTo('a div of your choice')

       });
    }
    });

    return true;
}

function addClickEvent() {
  $('li').click(function() {

    var audio = $('audio');
    var filename = $(this).text();

    // change audio source
    audio[0].pause();
    audio[0].load();//suspends and restores all audio element
    $('audio source').attr('src', filename);

    // change title
    $('title').text(filename);
  });
}
