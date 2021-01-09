var tl = new TimelineMax(),
   replay = document.getElementById("replay");;

tl.from(".text", 0.9, {opacity: 0})
   .from(".logo", {duration: 0.7, ease: Back.easeInOut, y: -100})
   .from(".image", 1.5, { scale: 0, opacity: 0, x: 150}, '-=0.3')
   .to(".instagram", 0.5, {opacity: 1, scale: 1})
   .to(".facebook", 0.5, {opacity: 1, scale: 1})
   .to(".twitter", 0.5, {opacity: 1, scale: 1})
   .to(".whatsapp", 0.5, {opacity: 1, scale: 1})
   .to(".instagram", 0.5, {opacity: 0, scale: 0, x:-210, y: 90}, '+=.5')
   .to(".facebook", 0.5, {opacity: 0, scale: 0, x:-190, y: 90})
   .to(".twitter", 0.5, {opacity: 0, scale: 0, x:-170, y: 90})
   .to(".whatsapp", 0.5, {opacity: 0, scale: 0, x:-150, y: 90})
   .to(".all", 0.5, {opacity: 1}, '+=.5')

replay.onclick = function () {
   tl.play(0);
}