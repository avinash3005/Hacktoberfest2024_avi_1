import datetime

class Chatbot:
    def __init__(self, db, llm_service):
        self.db = db
        self.llm_service = llm_service
        self.conversation_history = []
        self.chat_id_pk = None

    def start_chat(self):
        start_time = datetime.datetime.now()
        is_stream = 1  # Start new conversation
        self.db.insert_chat_history(start_time, is_stream)
        self.chat_id_pk = self.db.get_latest_chat_id()

    def handle_user_message(self, user_input):
        self.conversation_history.append({"role": "user", "content": user_input})

        if user_input == "/stop":
            bot_response = "conversation-terminated"
            # self.conversation_history.append({"role": "assistant", "content": bot_response})
            self.end_chat()
        else:
            bot_response = self.llm_service.generate_response(self.conversation_history)
            self.conversation_history.append({"role": "assistant", "content": bot_response})
            self.db.insert_chat_data(self.chat_id_pk, user_input, bot_response)
            print(f"\nBot: {bot_response}")

    def end_chat(self):
        current_time = datetime.datetime.now()
        is_stream = 2  # End of conversation
        user_input = "/stop"
        bot_response = "conversation-terminated"
        self.db.insert_chat_data(self.chat_id_pk, user_input, bot_response)
        self.db.insert_chat_history(current_time, is_stream)
        print("Chat ended.")

    def continue_chat(self):
        if len(self.conversation_history) > 1000:
            self.conversation_history = self.conversation_history[-3:]  # Retain only the last few entries

