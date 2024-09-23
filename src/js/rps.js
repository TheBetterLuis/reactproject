import {icons} from "./icons";
function rps(option, player, currentUsers) {
    const rpsElements = {
        rock: document.querySelector('.rock'),
        paper: document.querySelector('.paper'),
        scissors: document.querySelector('.scissors'),
        cpu: document.querySelector('.cpu')
    }

    function removeColors() {
        rpsElements.rock.classList.remove('color-win', 'color-draw', 'color-lose', 'shake');
        rpsElements.paper.classList.remove('color-win', 'color-draw', 'color-lose', 'shake');
        rpsElements.scissors.classList.remove('color-win', 'color-draw', 'color-lose', 'shake');
        rpsElements.cpu.classList.remove('color-win', 'color-draw', 'color-lose', 'shake');
    }

    let optionEnemy;
    const rngPick = Math.trunc(Math.random() * (4 - 1) + 1);

    switch (rngPick) {
        case 1: optionEnemy = 'rock'; break;
        case 2: optionEnemy = 'paper'; break;
        case 3: optionEnemy = 'scissors'; break;
    }

    //  rpsElements.cpu.innerText = `CPU ${optionEnemy}`;

    if (option === 'rock') {
        if (optionEnemy === 'rock') {
            rpsElements.cpu.innerHTML = icons.rock;
            removeColors()
            console.log('draw')
            rpsElements.rock.classList.add('color-draw')
            rpsElements.cpu.classList.add('color-draw')
            updateStats(option, 'draw', currentUsers, player)
        }
        if (optionEnemy === 'paper') {
            rpsElements.cpu.innerHTML = icons.paper;
            removeColors()
            console.log('you lose')
            rpsElements.rock.classList.add('color-lose')
            rpsElements.cpu.classList.add('color-win', 'shake')
            updateStats(option, 'lose', currentUsers, player)
        }
        if (optionEnemy === 'scissors') {
            rpsElements.cpu.innerHTML = icons.scissors;
            removeColors()
            console.log('you win')
            rpsElements.rock.classList.add('color-win', 'shake')
            rpsElements.cpu.classList.add('color-lose')
            updateStats(option, 'win', currentUsers, player)
        }
        console.log(player.username, option, 'vs', optionEnemy, 'CPU')
    }
    if (option === 'paper') {
        if (optionEnemy === 'rock') {
            rpsElements.cpu.innerHTML = icons.rock;
            removeColors()
            console.log('you win')
            rpsElements.paper.classList.add('color-win', 'shake')
            rpsElements.cpu.classList.add('color-lose')
            updateStats(option, 'win', currentUsers, player)
        }
        if (optionEnemy === 'paper') {
            rpsElements.cpu.innerHTML = icons.paper;
            removeColors()
            console.log('draw')
            rpsElements.paper.classList.add('color-draw')
            rpsElements.cpu.classList.add('color-draw')
            updateStats(option, 'draw', currentUsers, player)
        }
        if (optionEnemy === 'scissors') {
            rpsElements.cpu.innerHTML = icons.scissors;
            removeColors()
            console.log('you lose')
            rpsElements.paper.classList.add('color-lose')
            rpsElements.cpu.classList.add('color-win', 'shake')
            updateStats(option, 'lose', currentUsers, player)
        }
        console.log(player.username, option, 'vs', optionEnemy, 'CPU')
    }
    if (option === 'scissors') {
        if (optionEnemy === 'rock') {
            rpsElements.cpu.innerHTML = icons.rock;
            removeColors()
            console.log('you lose')
            rpsElements.scissors.classList.add('color-lose')
            rpsElements.cpu.classList.add('color-win', 'shake')
            updateStats(option, 'lose', currentUsers, player)
        }
        if (optionEnemy === 'paper') {
            rpsElements.cpu.innerHTML = icons.paper;
            removeColors()
            console.log('you win')
            rpsElements.scissors.classList.add('color-win', 'shake')
            rpsElements.cpu.classList.add('color-lose')
            updateStats(option, 'win', currentUsers, player)
        }
        if (optionEnemy === 'scissors') {
            rpsElements.cpu.innerHTML = icons.scissors;
            removeColors()
            console.log('draw')
            rpsElements.scissors.classList.add('color-draw')
            rpsElements.cpu.classList.add('color-draw')
            updateStats(option, 'draw', currentUsers, player)
        }
        console.log(player.username, option, 'vs', optionEnemy, 'CPU')
    }

}

/*
 *
 const noUser = {
    username: "no-user",
    email: "-",
    password: "-",
    role: "user",
    stats: {
        wins: {scissors: 0, rock: 0, paper: 0},
        losses: {scissors: 0, rock: 0, paper: 0},
        total: {wins: 0, losses: 0, draws: 0, matches: 0}
    }
}
*/



function updateStats(action, outcome, currentUsers, player) {

    const foundUser = currentUsers.find(user => user.username === player.username);

    switch (action) {

        case 'rock':

            if (outcome === 'win') {
                titleChange("You Win!")
                foundUser.stats.wins.rock++;
                foundUser.stats.total.wins++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));
            }
            if (outcome === 'draw') {
                titleChange("A Draw  :)")
                foundUser.stats.total.draws++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));
            }
            if (outcome === 'lose') {
                titleChange("You Lose!")
                foundUser.stats.losses.rock++;
                foundUser.stats.total.losses++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));

            }

            break;

        case 'paper':

            if (outcome === 'win') {
                titleChange("You Win!")
                foundUser.stats.wins.paper++;
                foundUser.stats.total.wins++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));
            }
            if (outcome === 'draw') {
                titleChange("A Draw  :)")
                foundUser.stats.total.draws++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));
            }
            if (outcome === 'lose') {
                titleChange("You Lose!")
                foundUser.stats.losses.paper++;
                foundUser.stats.total.losses++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));

            }
            break;
        case 'scissors':
            if (outcome === 'win') {
                titleChange("You Win!")
                foundUser.stats.wins.scissors++;
                foundUser.stats.total.wins++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));
            }
            if (outcome === 'draw') {
                titleChange("A Draw  :)")
                foundUser.stats.total.draws++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));
            }
            if (outcome === 'lose') {
                titleChange("You Lose!")
                foundUser.stats.losses.scissors++;
                foundUser.stats.total.losses++;
                foundUser.stats.total.matches++;
                localStorage.setItem('users', JSON.stringify(currentUsers));

            }
            break;

    }
}

function titleChange(title) {
    const titleElement = document.querySelector(`.title`);
    titleElement.innerText = title;
}


export {rps, titleChange};


