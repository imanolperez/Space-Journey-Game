function musicToggle(){1==localStorage.audio?(audioControl.pause(),audioControl.currentTime=0,localStorage.audio=0):(audioControl.play(),localStorage.audio=1)}function wrapText(a,b,c,d,e,f){for(var g=b.split("\n"),h=0;h<g.length;h++){for(var i="",j=g[h].split(" "),k=0;k<j.length;k++){var l=i+j[k]+" ",m=a.measureText(l),n=m.width;n>e?(a.fillText(i,c,d),i=j[k]+" ",d+=f):i=l}a.fillText(i,c,d),d+=f}}function down(a,b){switch(place){case"menu":downMenu(a,b);break;case"about":downAbout(a,b);break;case"cloths":downCloths(a,b);break;case"levels":downLevels(a,b);break;case"game":downGame(a,b)}}function up(a,b){switch(place){case"menu":upMenu(a,b);break;case"about":upAbout(a,b);break;case"cloths":upCloths(a,b);break;case"levels":upLevels(a,b);break;case"game":upGame(a,b)}}function u(a){k="which"in a?a.which:a.keyCode}function d(a){k="which"in a?a.which:a.keyCode}function init(){loadStars(),loadImages(),main()}var render=function(){switch(ctx.clearRect(0,0,W,H),place){case"menu":drawMenu();break;case"about":drawAbout();break;case"cloths":drawCloths();break;case"levels":drawLevels();break;case"game":drawGame()}},main=function(){switch(""!=place&&render(),place){case"menu":menuMain();break;case"about":aboutMain();break;case"cloths":clothsMain();break;case"levels":levelsMain();break;case"game":gameMain()}requestAnimationFrame(main)},c=document.createElement("canvas"),ctx=c.getContext("2d");W=document.body.clientWidth,H=document.body.clientHeight,c.height=H,c.width=W,document.body.appendChild(c),place="",c.addEventListener("mousedown",function(a){event.preventDefault(),down(a.clientX,a.clientY)},!1),c.addEventListener("mouseup",function(a){event.preventDefault(),up(a.clientX,a.clientY)},!1),c.addEventListener("touchstart",function(a){down(a.touches[0].clientX,a.touches[0].clientY)},!1),c.addEventListener("touchend",function(a){up(a.changedTouches[0].clientX,a.changedTouches[0].clientY)},!1),init();