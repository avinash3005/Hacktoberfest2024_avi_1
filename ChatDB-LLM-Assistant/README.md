

# LLM Chatbot with MySQL Integration

## Project Overview
This project implements a conversational chatbot using large language models (LLMs) with persistent storage in a MySQL database. The chatbot supports generating AI-based responses using either the **Groq** or **Together** APIs for language model integration. It stores conversation history and relevant data in a relational database for future reference and analysis.

## Features
- **LLM-based chatbot**: Uses models like LLaMA from Groq and Together APIs to generate responses.
- **Persistent conversation history**: Chat data (user input and chatbot responses) is stored in a MySQL database.
- **Conversation tracking**: Chat start and end times, along with a status flag (`is_stream`), are saved.
- **Dynamic context management**: Conversation history is automatically managed to limit context length.
- **Trigger system**: Updates are reflected in the database via triggers.

## Tech Stack
- **Python**
- **MySQL**
- **Together API** / **Groq API** (LLM integration)
- **dotenv** (for environment variable management)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   

2. Install dependencies:
   ```bash
   pip3 install -r requirements.txt
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   DB_USER=<your_db_user>
   DB_PASSWORD=<your_db_password>
   DB_HOST=<your_db_host>
   DB_NAME=<your_db_name>
   TOGETHER_API_KEY=<your_together_api_key>
   GROQ_API_KEY=<your_groq_api_key>
   ```

4. Set up MySQL:
   Make sure you have a running MySQL instance. The script will automatically create the required tables when run.

## Usage

1. Run the script:
   ```bash
   python your_script.py
   ```

2. Interact with the chatbot:
   - Type your message after the `You:` prompt.
   - Type `/stop` to end the conversation.
   - Chat history is saved to the MySQL database automatically.

## Database Schema

- **ChatDB.Chat_history**:
   - `chat_id`: Primary key, auto-incremented.
   - `start_time`: Timestamp when the chat started.
   - `is_stream`: Status of the conversation (`1` for active, `0` for ongoing, `2` for ended).

- **ChatDB.Chat_data**:
   - `id`: Primary key, auto-incremented.
   - `chat_id`: Foreign key referencing `Chat_history`.
   - `user`: User message text.
   - `assistant`: Chatbot response text.

## API Integration

- **Groq API**: Provides AI-generated responses using the `llama3-8b-8192` model.
- **Together API**: Uses `meta-llama/Llama-3.2-3B-Instruct-Turbo` to generate responses.

You can configure which API to use by changing the `api_service` variable in the script:
```python
api_service = "Groq"  # or "Together"
```

## Contributing

We welcome contributions! Please feel free to open issues or submit pull requests if you find bugs or have suggestions.

1. Fork the repository
2. Create your feature branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
