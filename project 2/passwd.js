function randomPasswordGeneration(n) {
    const characters = {
        numbers: "0123456789",
        letter: "abcdefghijklmnoqprstuvwyzx",
        LETTER: "ABCDEFGHIJKLMNOQPRSTUYWVZX",
        symbols: "!@#$^&*?"
    };

    const password = [];
    let randomizer = 0;

    // Seed the random-number generator with current time
    Math.seed = () => Math.floor((new Date()).getTime() / 1000);
    Math.seedrandom = (s) => {
        Math.seed = s;
    };

    Math.seedrandom(new Date().getTime());

    randomizer = Math.floor(Math.random() * 4);

    for (let i = 0; i < n; i++) {
        if (randomizer === 1) {
            password.push(characters.numbers[Math.floor(Math.random() * 10)]);
            randomizer = Math.floor(Math.random() * 4);
            console.log(password[i]);
        } else if (randomizer === 2) {
            password.push(characters.symbols[Math.floor(Math.random() * 8)]);
            randomizer = Math.floor(Math.random() * 4);
            console.log(password[i]);
        } else if (randomizer === 3) {
            password.push(characters.LETTER[Math.floor(Math.random() * 26)]);
            randomizer = Math.floor(Math.random() * 4);
            console.log(password[i]);
        } else {
            password.push(characters.letter[Math.floor(Math.random() * 26)]);
            randomizer = Math.floor(Math.random() * 4);
            console.log(password[i]);
        }
    }
    return password.join('');
}

function main() {
    const n = parseInt(prompt("Enter the length of password:"));
    randomPasswordGeneration(n);
}

main();
