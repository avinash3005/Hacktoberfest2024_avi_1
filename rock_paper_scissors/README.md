
# Rock-Paper-Scissors Game

## Overview

This project is a simple implementation of the classic **Rock-Paper-Scissors** game using JavaScript. It allows a human player to compete against the computer in a best-of-five series, with the first to reach five wins being declared the winner.

## Features

- **Interactive Gameplay:** The player inputs their choice via a prompt, and the computer's choice is generated randomly.
- **Score Tracking:** The game keeps track of both the player's and the computer's scores, updating after each round.
- **Game Logic Implementation:** Includes the core logic to determine the winner of each round based on the rules of Rock-Paper-Scissors.

## Code Highlights

### Random Computer Choice
The `computer_random()` function generates a random integer between 1 and 3, corresponding to Rock, Paper, or Scissors:

```javascript
function computer_random() {
    return Math.floor(Math.random() * 3) + 1;
}
```

### Human Choice Handling
The `human_choice()` function prompts the user to enter their choice and normalizes it to lowercase for easier processing:

```javascript
function human_choice() {
    let choice = prompt("Enter the choice");
    return choice.toLowerCase();
}
```

### Choice Mapping
The `choice_number()` function maps the human-readable choice (`"rock"`, `"paper"`, `"scissors"`) to a corresponding numeric value:

```javascript
function choice_number(human_choice) {
    switch(human_choice) {
        case("rock"):
            return 1;
        case("paper"):
            return 2;
        case("scissors"):
            return 3;
        default:
            console.log("Invalid input");
            return -1;
    }
}
```

### Game Logic
The `update_score()` function compares the human and computer choices to determine the winner of the round, and updates the score accordingly:

```javascript
function update_score(human, computer) {
    if (human == computer) {
        alert("It's a Draw");
    } else if ((human == 1 && computer == 2) || (human == 2 && computer == 3) || (human == 3 && computer == 1)) {
        alert("Computer Won");
        score_c++;
    } else {
        alert("Human Won");
        score_h++;
    }
}
```

### Game Loop
The game loop continues until either the player or the computer wins five rounds:

```javascript
while (score_h < 5 && score_c < 5) {
    let entered_choice = human_choice();
    let human_number = choice_number(entered_choice);
    let random_choice = computer_random();
    update_score(human_number, random_choice);
}
```

## Learning and Skills Demonstrated

- **Control Structures:** Utilized `switch` statements for mapping choices and `if-else` logic for game mechanics.
- **User Interaction:** Employed JavaScript's `prompt` for user input and `alert` for output, demonstrating basic UI interaction.
- **Randomization:** Used `Math.random()` for generating the computer's choice, ensuring a fair and unpredictable opponent.
- **Loops and Conditions:** Implemented a game loop with a stopping condition based on scores, showcasing understanding of control flow.

## Future Enhancements

- **Input Validation:** Improve the game by handling invalid user inputs more gracefully.
- **UI/UX Improvements:** Replace prompts and alerts with a more engaging graphical user interface (GUI).
- **Scoreboard:** Add a visual scoreboard to track the scores more intuitively.

## Conclusion

This project is a fundamental exercise in JavaScript programming, demonstrating essential concepts such as random number generation, user input handling, and conditional logic. It serves as a solid foundation for more complex interactive applications.
