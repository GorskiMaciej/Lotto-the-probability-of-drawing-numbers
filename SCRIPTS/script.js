class ColorChanger {
    constructor(colorFromBtn, parametersFrame) {
        colorFromBtn;
        parametersFrame;
        let _color = this.changeColor;
        this.changeColor(colorFromBtn, parametersFrame);

        console.log("jestem w obiekcie ColorChanger")
        console.log(parametersFrame);
    }

    changeColor(colorFromBtn, parametersFrame) {
        parametersFrame.style.border = `3px solid ${getComputedStyle(colorFromBtn).backgroundColor}`;
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

        this.btnLotto.addEventListener('click', (e) => {
            this.startLotto(e);
            console.log(e.target)
        });
        this.btnMiniLotto.addEventListener('click', (e) => {
            this.startMiniLotto(e);
        });
        this.btnMultiMulti.addEventListener('click', (e) => {
            this.startMultiMulti(e);
        });
        this.btnKeno.addEventListener('click', (e) => {
            this.startKeno(e);
        });
    };


    startLotto(e) {
        this.changeColor = new ColorChanger(e.target, this.parametersFrame);
    }

    startMiniLotto(e) {
        this.changeColor = new ColorChanger(e.target, this.parametersFrame);
    }

    startMultiMulti(e) {
        this.changeColor = new ColorChanger(e.target, this.parametersFrame);
    }

    startKeno(e) {
        this.changeColor = new ColorChanger(e.target, this.parametersFrame);
    }

}

// class Lotto {
//     constructor(numberOfBetsParameter) {
//         console.log("Jestem w obiekcie Lotto")

//     }
//     turnOnParameters(numberOfBetsParameter) {
//         // numberOfBetsParameter.classList.addClass("active");
//     }
// }

const probability = new Probability();