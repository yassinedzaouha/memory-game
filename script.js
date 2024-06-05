const emojis = ["❤","❤","🥺","🥺","🫶🏻","🫶🏻","✨","✨","🐚","🐚","🌷","🌷","🎀","🎀","🪐","🪐"];

var shuf_emojis = emojis.sort(() => (Math.random() > .5) ?2: -1);

for (var i=0; i<emojis.length; i++){

let box = document.createElement('div')

box.className = 'item';

box.innerHTML = shuf_emojis[i]

box.onclick = function(){
    this.classList.add('boxOpen');
    let boxOpen = document.querySelectorAll('.boxOpen');
    setTimeout(function(){
        if(boxOpen.length > 1){
            if(boxOpen[0].innerHTML === boxOpen[1].innerHTML){
                boxOpen[0].classList.add('boxMatch');
                boxOpen[1].classList.add('boxMatch');

                boxOpen[0].classList.remove('boxOpen');
                boxOpen[1].classList.remove('boxOpen');
                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('You win!');
                }
            } else {
                boxOpen[0].classList.remove('boxOpen')
                boxOpen[1].classList.remove('boxOpen')
            }
        }
    },500)
}



document.querySelector('.game').appendChild(box);

}