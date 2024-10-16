#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void playGame() {
    char *choices[] = {"Rock", "Paper", "Scissors"};
    int userChoice, computerChoice;
    
    printf("Enter your choice (0 for Rock, 1 for Paper, 2 for Scissors): ");
    scanf("%d", &userChoice);
    
    srand(time(0)); // Seed the random number generator
    computerChoice = rand() % 3;
    
    printf("You chose: %s\n", choices[userChoice]);
    printf("Computer chose: %s\n", choices[computerChoice]);
    
    if (userChoice == computerChoice) {
        printf("It's a tie!\n");
    } else if ((userChoice == 0 && computerChoice == 2) || 
               (userChoice == 1 && computerChoice == 0) || 
               (userChoice == 2 && computerChoice == 1)) {
        printf("You win!\n");
    } else {
        printf("Computer wins!\n");
    }
}

int main() {
    char playAgain;
    do {
        playGame();
        printf("Do you want to play again? (y/n): ");
        scanf(" %c", &playAgain);
    } while (playAgain == 'y' || playAgain == 'Y');
    
    return 0;
}
