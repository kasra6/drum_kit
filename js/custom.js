window.addEventListener('keydown', function(evt){
  const sound = document.querySelector(`audio[data-key='${evt.keyCode}']`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  console.log(sound);

});
