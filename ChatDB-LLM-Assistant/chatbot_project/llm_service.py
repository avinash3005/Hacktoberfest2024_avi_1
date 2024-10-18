import os
from together import Together
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

class LLMService:
    def __init__(self, api_service):
        self.api_service = api_service

    def generate_response(self, conversation_history):
        if self.api_service == "Together":
            client = Together(api_key=os.environ.get('TOGETHER_API_KEY'))
            response = client.chat.completions.create(
                model="meta-llama/Llama-3.2-3B-Instruct-Turbo",
                messages=conversation_history,
                max_tokens=512,
                temperature=0.3,
                top_p=0.7,
                top_k=50,
                repetition_penalty=1,
                stop=["<|eot_id|>", "<|eom_id|>"],
                stream=False
            )
        else:
            client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
            response = client.chat.completions.create(
                model="llama3-8b-8192",
                messages=conversation_history,
                max_tokens=1024,
                temperature=0.3,
                top_p=0.7,
                stop=["<|eot_id|>", "<|eom_id|>"],
                stream=False
            )

        return response.choices[0].message.content

