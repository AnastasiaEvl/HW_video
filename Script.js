function init(){
    max=400;
    loop = 0;
    let media = document.getElementById('media');
    let play = document.getElementById('play');
    let mute = document.getElementById('mute');
    let bar = document.getElementById('bar');
    let newPlay = document.getElementById('newPlay')
    // let progress = document.getElementById('progress');
    let volume = document.getElementById('volume');

    

    play.addEventListener('click', push);
    media.addEventListener('click', push);
    newPlay.addEventListener('click', push);
    mute.addEventListener('click', sound);
    bar.addEventListener('click', move);
    volume.addEventListener('change', level);
    
}

function push(){
    if (media.paused && !media.ended){
        media.play();
        play.innerHTML="Пауза";
        document.getElementById('newPlay').style.display = 'none';
        loop = setInterval(status, 1000);
    } else {
        media.pause();
        play.innerHTML="Воспр.";
        document.getElementById('newPlay').style.display = 'block';
        newPlay.innerHTML = "&#10072;&#10072";
        clearInterval(loop);
    }

}
function status(){
    if(!media.ended){
        let size = Math.round(media.currentTime * max /media.duration);
        progress.style.width=`${size}px`;
        // console.log(size);

    }
    function move(e){
        let mouseX = e.pageX - bar.offsetleft;
        progress.style.width = `${mouseX}px`;
        let newTime = mouseX * media.duration/max;
        media.currentTime = newTime;
    }


}

function sound(){
    if(media.muted){
        media.muted=false;
        mute.innerHTML='Звук';
    }else{
        media.muted = true;
        mute.innerHTML='Вкл.';
    }
}

function level(){
    media.volume = volume.value;
    
}

addEventListener('load', init);