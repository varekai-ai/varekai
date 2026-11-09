/* Phones held upright get the tall cut of the KeyLink film; everything else keeps the wide one.
   Turning the phone switches cuts and keeps the viewer's place in the film. */
(function(){
  try{
    if(!window.matchMedia)return;
    var mq=matchMedia('(max-width: 760px) and (orientation: portrait)');
    var WIDE='/media/keylink-film.mp4', TALL='/media/keylink-film-tall.mp4';
    var vids=[];
    document.querySelectorAll('video').forEach(function(v){
      var s=v.querySelector('source[src="'+WIDE+'"]');
      if(s)vids.push({v:v,s:s,tall:false});
    });
    if(!vids.length)return;
    function fs(v){return document.fullscreenElement||document.webkitFullscreenElement||v.webkitDisplayingFullscreen;}
    function set(o,tall,keep){
      if(o.tall===tall)return;
      var v=o.v,f=v.parentElement,t=v.currentTime||0,playing=!v.paused&&!v.ended;
      o.tall=tall;
      o.s.src=tall?TALL:WIDE;
      v.poster=tall?'/media/keylink-film-poster-tall.jpg':'/media/keylink-film-poster.jpg';
      v.style.aspectRatio=tall?'9/16':'';
      if(f){f.style.maxWidth=tall?'min(100%, calc(84vh * 9 / 16))':'';f.style.marginLeft=tall?'auto':'';f.style.marginRight=tall?'auto':'';}
      v.load();
      if(keep&&t>0){
        v.addEventListener('loadedmetadata',function go(){v.removeEventListener('loadedmetadata',go);
          try{v.currentTime=t;}catch(e){}
          if(playing){var p=v.play();if(p&&p.catch)p.catch(function(){});}
        });
      }
    }
    function apply(keep){vids.forEach(function(o){if(!fs(o.v))set(o,mq.matches,keep);});}
    apply(false);
    var onChange=function(){apply(true);};
    if(mq.addEventListener)mq.addEventListener('change',onChange);else if(mq.addListener)mq.addListener(onChange);
    // If the phone was turned while the film was full screen, catch up once full screen ends.
    vids.forEach(function(o){o.v.addEventListener('webkitendfullscreen',function(){setTimeout(onChange,300);});});
    document.addEventListener('fullscreenchange',function(){if(!document.fullscreenElement)setTimeout(onChange,300);});
  }catch(e){}
})();
