class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
    
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    
    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;

        function pad0(value) {
            let result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        }
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    resetstoper() {
        this.reset();
        this.print()
      }
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.resetstoper());

class Results extends Stopwatch  {
    constructor(display, timeresult) {
    super(print);
    this.display = display;
    this.timeresult = timeresult;
  }

    save() {
        this.getresult();
    }

   getresult() {
        let result = "";
        let timeresult =``;
        let button;

        if (!stopwatch.running && stopwatch.times != {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }) {
              result = this.format(stopwatch.times);
              timeresult = document.createElement("li");
              timeresult.innerHTML = `TIME: <span>${result}<span>`;
              button = document.createElement("button");
              button.innerHTML = `Delete`;
              timeresult.appendChild(button);
              button.addEventListener('click', function() {
                this.parentElement.remove();
              });

              document.querySelector('.results').appendChild(timeresult);
            }

    }

    // format(times) {
    //     return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;

    //     function  pad0(value) {
    //         let result = value.toString();
    //         if (result.length < 2) {
    //           result = '0' + result;
    //         }
    //         return result;
    //       }
    // }

}

const result = new Results(
  document.querySelector('.results')
);

let saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => result.save());

