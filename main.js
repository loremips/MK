const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fist', 'gun'],
    attack: function() {
        console.log(player1.name + ' fight');
    }
};


const player2 = {
    name: 'Sub-Zero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['fist', 'knife'],
    attack: function() {
        console.log(player2.name + ' fight');
    }
};


function createPlayer(playerClass, playerObject) {
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObject.name;

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObject.hp+'%';

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    const $img = document.createElement('img');
    $img.src = playerObject.img;

    const $character = document.createElement('div');
    $character.classList.add('character');
    $character.appendChild($img);

    const $player = document.createElement('div');
    $player.classList.add(playerClass);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
};


createPlayer('player1', player1);
createPlayer('player2', player2);