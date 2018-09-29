$(document).ready(function () {
  init();
})

function init() {
  getTracks();
  addClickEvent();
}

function getTracks() {
  $.ajax({
    url: "findAudioFiles.php",
    dataType: "json",
    async: false,
  }).done(function(data) {
    displayTracks(data);
  });
}

function displayTracks(tracks) {
  $.each(tracks, function(number, filename ) {
      $('#listing').append('<li>' + filename + '</li>');
  });
}

function addClickEvent() {
  $('li').click(function() {

    var audio = $('audio');
    var filename = $(this).text();

    // change audio source
    audio[0].pause();
    audio[0].load();//suspends and restores all audio element
    $('audio source').attr('src', filename);
    audio[0].play();

    // change title
    $('title').text(filename);
  });
}
