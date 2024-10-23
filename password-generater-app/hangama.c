#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>
#include <time.h>

typedef struct {
    char word[20];
    char hint[50];
} WordHint;

void displayWord(char word[], int guessed[]) {
    for (int i = 0; i < strlen(word); i++) {
        if (guessed[i]) {
            printf("%c ", word[i]);
        } else {
            printf("_ ");
        }
    }
    printf("\n");
}

int isWordGuessed(char word[], int guessed[]) {
    for (int i = 0; i < strlen(word); i++) {
        if (!guessed[i]) {
            return 0;
        }
    }
    return 1;
}

WordHint getRandomWord() {
    WordHint words[] = {
        {"programming", "A common task in computer science."},
        {"hangman", "The name of this game."},
        {"computer", "An electronic device used to process data."},
        {"keyboard", "A device used to input text."},
        {"internet", "A global network connecting computers."},
        {"compiler", "A tool that translates code into machine language."},
        {"priyanshu", "Developer of this game."}
    };
    int numWords = sizeof(words) / sizeof(words[0]);
    
    srand(time(0)); // Seed the random number generator
    int randomIndex = rand() % numWords;
    return words[randomIndex];
}

void playHangman(int maxAttempts) {
    WordHint wordHint = getRandomWord();
    char *word = wordHint.word;
    char *hint = wordHint.hint;

    int guessed[strlen(word)];
    for (int i = 0; i < strlen(word); i++) {
        guessed[i] = 0;
    }

    int attempts = 0;
    char guess;
    int correctGuess;

    printf("Welcome to Hangman!\n");

    while (attempts < maxAttempts) {
        printf("Word: ");
        displayWord(word, guessed);

        if (attempts == maxAttempts / 2) {
            printf("Hint: %s\n", hint);
        }

        printf("Enter a letter: ");
        scanf(" %c", &guess);
        guess = tolower(guess);

        correctGuess = 0;
        for (int i = 0; i < strlen(word); i++) {
            if (word[i] == guess && !guessed[i]) {
                guessed[i] = 1;
                correctGuess = 1;
            }
        }

        if (!correctGuess) {
            attempts++;
            printf("Wrong guess! Attempts remaining: %d\n", maxAttempts - attempts);
        }

        if (isWordGuessed(word, guessed)) {
            printf("Congratulations! You guessed the word: %s\n", word);
            return;
        }
    }

    printf("Sorry, you've been hanged! The word was: %s\n", word);
}

int main() {
    int maxAttempts = 6;

    playHangman(maxAttempts);

    return 0;
}
