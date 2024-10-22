
# Define an expanded emoji dictionary
emoji_dict = {
    "happy": "😊",
    "sad": "😢",
    "love": "❤️",
    "angry": "😠",
    "cat": "🐱",
    "dog": "🐶",
    "smile": "😄",
    "laugh": "😂",
    "cry": "😭",
    "surprised": "😲",
    "cool": "😎",
    "wink": "😉",
    "thumbs up": "👍",
    "thumbs down": "👎",
    "party": "🥳",
    "star": "⭐",
    "fire": "🔥",
    "heart": "💖",
    "sun": "☀️",
    "moon": "🌙",
    "tree": "🌳"
}

# Get user input
user_input = input("Enter a sentence: ")

# Translate text to emojis
translated_words = []
for word in user_input.split():
    emoji = emoji_dict.get(word.lower(), word)  # Fallback to the original word
    translated_words.append(emoji)

# Output the result
translated_sentence = ' '.join(translated_words)
print("Translated Sentence:", translated_sentence)
