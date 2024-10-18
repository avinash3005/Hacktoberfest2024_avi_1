from db import Database, ChatDatabase
from llm_service import LLMService
from chatbot import Chatbot

def main():
    # Initialize Database
    db = Database()
    chat_db = ChatDatabase(db)
    chat_db.create_tables()

    # Choose LLM service ("Together" or "Groq")
    api_service = "Groq"  # Can be set dynamically based on user preference
    llm_service = LLMService(api_service)

    # Initialize Chatbot
    chatbot = Chatbot(chat_db, llm_service)

    print("Welcome to the chatbot! Type '/stop' to end the conversation.")
    chatbot.start_chat()

    while True:
        user_input = input("\nYou: ")
        if user_input == "/stop":
            chatbot.end_chat()
            break
        chatbot.handle_user_message(user_input)
        chatbot.continue_chat()

if __name__ == "__main__":
    main()

