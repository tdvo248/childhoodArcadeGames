document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    const diceButtons = document.querySelectorAll('.button');
    const giveNumber = document.querySelector('.total');

    diceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const numberOfDice = parseInt(this.getAttribute('diceNum'));
            updateDice(cube, numberOfDice, giveNumber);
        });
    });

    function updateDice(cube, number, giveNumber) {
        cube.innerHTML = '';
        let total = 0;
        for (let i = 0; i < number; i++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            total += roll;
            const diceDiv = document.createElement('div');
            diceDiv.className = 'dice';
            diceDiv.textContent = roll;
            cube.appendChild(diceDiv);
        }
        giveNumber.textContent = 'Total: ' + total;
    }
});
