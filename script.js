const messageParts = {
    part1: [
        "You can do",
        "You're capable of",
        "Believe in",
        "Never give up on",
        "Keep focusing on",
    ],
    part2: [
        "anything you put your mind to,",
        "all of the things you can imagine,",
        "the journey of your dreams,",
        "the path that lies in front of you,"
    ],
    part3: [
        "champ.",
        "friend.",
        "buddy. Remember you have a fat bunda!",
        "sport.",
        "scamp."
    ]
}


const getRandomElement = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const generateMessage = () => {
    const part1 = getRandomElement(messageParts.part1);
    const part2 = getRandomElement(messageParts.part2);
    const part3 = getRandomElement(messageParts.part3);

    return `${part1} ${part2} ${part3}`;
}

let name = prompt("What is your name, weary traveller?");


console.log(generateMessage());
