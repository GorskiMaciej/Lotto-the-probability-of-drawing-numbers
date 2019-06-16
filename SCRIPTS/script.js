class ColorChanger {
    constructor() {
        let _color = this.changeColor;
        this.getColor = () => _color;
        this.changeColor();
    }
    changeColor(colorFromBtn, parametersFrame) {
        this.parametersFrame.style.border = `3px solid ${getComputedStyle(e.target).backgroundColor}`;
    }
}

class Probability {
    constructor() {


        this.btnLotto = document.querySelector('button.lotto');
        this.btnMiniLotto = document.querySelector('button.miniLotto');
        this.btnMultiMulti = document.querySelector('button.multiMulti');
        this.btnKeno = document.querySelector('button.keno');
        this.parametersFrame = document.querySelector('.parameters');
        this.btnCalculate = document.querySelector('button.calculate');
        this.numberOfBetsParameter = document.querySelector('.numberOfBets');
        this.btnLotto.addEventListener('click', this.startLotto)
        this.btnMiniLotto.addEventListener('click', (e) => {
            // console.log(e.target);
            // console.log(this.parametersFrame);
            // console.log(getComputedStyle(e.target).backgroundColor);
            this.parametersFrame.style.border = `3px solid ${getComputedStyle(e.target).backgroundColor}`;
        })
        this.btnMultiMulti.addEventListener('click', (e) => {})
        this.btnKeno.addEventListener('click', (e) => {})

        console.log("1")
        console.log(this.numberOfBetsParameter)
    }

    startLotto() {
        this.lottoProbability = new Lotto(this.numberOfBetsParameter);
        // this.colorChanger = new this.colorChanger();
    }

}
class Lotto {
    constructor(numberOfBetsParameter) {
        console.log("inicjalizacja obiektu powiodła się")
        console.log(numberOfBetsParameter)
        this.turnOnParameters(numberOfBetsParameter);
    }
    turnOnParameters(numberOfBetsParameter) {
        // numberOfBetsParameter.classList.addClass("active");
    }
}

const probability = new Probability();