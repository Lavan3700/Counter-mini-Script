    (function () {
        let counter = document.getElementById('counter416Mrd');
        let rect = counter.getBoundingClientRect();

        if (rect.top <= window.innerHeight && !counter.classList.contains('animated')) {
            counter.classList.add('animated');
            let count = 100; // Startet bei 1.00
            let target = 416; // End 4.16
            let duration = 2000; // millisekunden
            let stepTime = Math.max(Math.floor(duration / (target - count)), 1);

            function step() {
                count++;
                counter.innerHTML = (count / 100).toFixed(2) + " Mrd. $"; // decimal mit " Mrd. $" anzeigen
                if (count < target) {
                    setTimeout(step, stepTime);
                }
            }

            setTimeout(step, stepTime);
        }
    })();