/* Phones held upright get the tall cut of the KeyLink film; everything else keeps the wide one. */
(function(){
  try{
    if(!window.matchMedia||!matchMedia('(max-width: 760px) and (orientation: portrait)').matches)return;
    document.querySelectorAll('video').forEach(function(v){
      var s=v.querySelector('source[src="/media/keylink-film.mp4"]');
      if(!s)return;
      s.src='/media/keylink-film-tall.mp4';
      v.poster='/media/keylink-film-poster-tall.jpg';
      v.style.aspectRatio='9/16';
      var f=v.parentElement;
      if(f){f.style.maxWidth='min(100%, calc(84vh * 9 / 16))';f.style.marginLeft='auto';f.style.marginRight='auto';}
      v.load();
    });
  }catch(e){}
})();
