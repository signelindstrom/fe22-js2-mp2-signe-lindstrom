class Tamagotchi {
    #name;
    #type;
    #hunger;
    #happiness;
    #status;

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
        this.#hunger = 10;
        this.#happiness = 10;
        this.#status = 'alive';
    }

    // get values
    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHunger() {
        return this.#hunger;
    }

    getHappiness() {
        return this.#happiness;
    }

    getStatus() {
        return this.#status;
    }


    // hunger decrease every 2 sec
    hungerLoss(element) {
        const hungerDecrease = setInterval(() => {
            if (this.#hunger != 0) {
                this.#hunger--;
                element.innerText = `hunger: ${this.#hunger}`;
            }
            if (this.#hunger == 0) {
                clearInterval(hungerDecrease);
                this.#status = 'dead';
            }
        }, 1000)
    }

    // happiness decrease every 3 sec
    happinessLoss(element) {
        const happinessDecrease = setInterval(() => {
            if (this.#happiness != 0) {
                this.#happiness--;
                element.innerText = `happiness: ${this.#happiness}`;
            }
            if (this.#happiness == 0) {
                clearInterval(happinessDecrease);
                this.#status = 'dead';
            }
        }, 1500)

    }


    // feedbtn adds +1 to hunger, max 10
    feed(btn, element) {
        btn.addEventListener('click', () => {
            if (this.#hunger < 10) {
                this.#hunger++;
                element.innerText = `hunger: ${this.#hunger}`;
            }
        })
    }

    // playbtn adds +1 to happiness, max 10
    play(btn, element) {
        btn.addEventListener('click', () => {
            if (this.#happiness < 10) {
                this.#happiness++;
                element.innerText = `happiness: ${this.#happiness}`;
            }
        })
    }

    
    // game over
    tamagotchiEnd(btn1, btn2, element1, element2, newElement) {
        btn1.remove();
        btn2.remove();
        element1.remove();
        element2.remove();
        newElement.innerText = 'game over!';
    }
}

export { Tamagotchi };