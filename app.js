(() => {
    const soundKeys = document.getElementById('soundKeys');
    
    const soundList = [
        { key: 'a', soundName: 'boom'},
        { key: 's', soundName: 'clap'},
        { key: 'd', soundName: 'hihat'},
        { key: 'f', soundName: 'kick'},
        { key: 'g', soundName: 'openhat'},
        { key: 'h', soundName: 'ride'},
        { key: 'j', soundName: 'snare'},
        { key: 'k', soundName: 'tink'}
    ];
    
    const audioList = soundList.map((el)=> new Audio(`sounds/set-a/${el.soundName}.wav`));

    const renderButtons = () => {
        const html = soundList.map((el) => {
            return `
            <div class="col-4 col-md-3">
                <div class="alert alert-info sound-key-btn">
                    <div class="sound-key">${el.key}</div>
                    <p class="sound-title">${el.soundName}</p>
                </div>
            </div>
        `
        }).join('');
        soundKeys.innerHTML = html;
    }
    renderButtons();

    const playSound = (idx, key) => {
        if(key) {
            idx = soundList.findIndex((val)=> val.key === key);
        }
        audioList[idx].play();
    }

    const htmlButtons = document.querySelectorAll('.sound-key-btn');
    htmlButtons.forEach((el, i)=>{
        el.addEventListener('click', ()=> playSound(i));
        document.addEventListener('keydown', (e)=> playSound(i, e.key));
    })

})();

