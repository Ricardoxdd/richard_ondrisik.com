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

document.getElementById('myButton').addEventListener('click', function() {
    var text = document.getElementById('myTextField').value;
    if(text === "I love you"){
        document.getElementById('displayText').innerText = "I know baby i love you too <3";
    }
    else{
        document.getElementById('displayText').innerText = text;
    }


});

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '250px';
    } else {
        sidebar.style.width = '0px';
    }
});