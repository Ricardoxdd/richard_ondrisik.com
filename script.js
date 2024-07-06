class ButtonHandler {
    constructor(buttonId, demoId) {
        this.button = document.getElementById(buttonId);
        this.demo = document.getElementById(demoId);
        this.isClicked = false;
        this.button.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        if (!this.isClicked) {
            this.demo.innerHTML = "Random number -> " + this.randomInt(1, 100);
            document.body.style.backgroundColor = "#87EF62F9";
            document.body.style.opacity = "0.7";
            this.isClicked = true;
        } else {
            this.demo.innerHTML = "Test";
            document.body.style.backgroundColor = "lightblue";
            document.body.style.opacity = "1";
            this.isClicked = false;
        }
    }

    randomInt(number, number2) {
        number = Math.ceil(number);
        number2 = Math.floor(number2);
        return Math.floor(Math.random() * (number2 - number + 1)) + number;
    }
}

new ButtonHandler('myButton', 'demo');
