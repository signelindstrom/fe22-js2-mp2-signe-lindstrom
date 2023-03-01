import { Tamagotchi } from "./modules/obj.js";

const form = document.querySelector('#inputForm');
form.addEventListener('submit', tamagotchiGame);


function tamagotchiGame(event) {
    event.preventDefault();

    // get name + type
    const tamagotchiName = document.querySelector('#nameInput').value;
    const tamagotchiType = document.querySelector('#selectType').value;

    document.querySelector('#nameInput').value = '';
    console.log(tamagotchiName, tamagotchiType);

    // create new from class Tamagotchi
    const newTamagotchi = new Tamagotchi(tamagotchiName, tamagotchiType);
    console.log(newTamagotchi);


    // get visual tamagotchi
    const div = document.querySelector('#tamagotchiDiv');
    const tamagotchiDiv = document.createElement('div');
    div.prepend(tamagotchiDiv);

    const displayName = document.createElement('h2');
    displayName.innerText = newTamagotchi.getName();
    tamagotchiDiv.append(displayName);

    const img = document.createElement('img');
    tamagotchiDiv.append(img)


    // hunger + decrease every 2 sec
    const displayHunger = document.createElement('p');
    tamagotchiDiv.append(displayHunger);
    displayHunger.innerText = `hunger: ${newTamagotchi.getHunger()}`

    newTamagotchi.hungerLoss(displayHunger);


    // happiness + decrease every 3 sec
    const displayHappiness = document.createElement('p');
    tamagotchiDiv.append(displayHappiness);
    displayHappiness.innerText = `happiness: ${newTamagotchi.getHappiness()}`

    newTamagotchi.happinessLoss(displayHappiness);


    // add feed & play button + increase hunger/happiness
    const feedBtn = document.createElement('button');
    feedBtn.innerText = 'feed';
    const playBtn = document.createElement('button');
    playBtn.innerText = 'play';
    tamagotchiDiv.append(feedBtn, playBtn);

    newTamagotchi.feed(feedBtn, displayHunger);
    newTamagotchi.play(playBtn, displayHappiness);


    // create element for 'game over'-message
    const gameOver = document.createElement('h2');
    tamagotchiDiv.append(gameOver);


    // check status of tamagotchi, alive/dead
    const checkStatus = setInterval(() => {
        newTamagotchi.getStatus();
        if (newTamagotchi.getStatus() == 'dead') {
            clearInterval(checkStatus);
            newTamagotchi.tamagotchiEnd(feedBtn, playBtn, displayHunger, displayHappiness, gameOver)
            if (newTamagotchi.getType() == 'dark') {;
                img.src = 'img/dark/dizzy.png';
            }
            else {;
                img.src = 'img/light/dizzy.png';
            }

        }
    }, 100)


    // type light/dark visual difference
    if (newTamagotchi.getType() == 'dark') {
        tamagotchiDiv.classList.add('dark');
        img.src = 'img/dark/kind.png';
    }

    else {
        tamagotchiDiv.classList.add('light');
        img.src = 'img/light/kind.png';
    }
}
