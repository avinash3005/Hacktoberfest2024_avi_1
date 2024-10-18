
---

# Chatbot Project

This repository contains a chatbot application that interacts with users using an LLM (Large Language Model) service. The chatbot can store chat histories in a MySQL database and retrieve responses from various LLM services like Together and Groq. The project is modular and divided into separate components for easy maintenance, scalability, and future development.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Connects with language models (LLMs) from services like Together and Groq to generate AI-driven conversations.
- Stores chat histories (both user and assistant messages) in a MySQL database.
- Automatically tracks the start and end of a conversation session.
- Modular design to separate database, chatbot logic, and LLM interaction.
- Efficient chat history handling (trimming older messages to improve performance during long conversations).

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Python 3.x
- MySQL
- pip (Python package manager)
- `dotenv` for environment variable management
- Together API key (if using Together LLM service)
- Groq API key (if using Groq LLM service)

## Installation

### 1. Clone the repository

```bash
cd chatbot_project
```

### 2. Install the required Python packages

```bash
pip3 install -r requirements.txt
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and provide the following environment variables:

```
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_HOST=your_mysql_host
DB_NAME=your_database_name

TOGETHER_API_KEY=your_together_api_key  # Only required if using Together API
GROQ_API_KEY=your_groq_api_key  # Only required if using Groq API
```

### 4. Set up MySQL database

Make sure MySQL is running on your system. You need to create a database and provide the connection details in the `.env` file as shown above.

The database tables will be automatically created when you run the chatbot for the first time.

## Usage

To start the chatbot, run:

```bash
python main.py
```

### Chatbot Flow

- The chatbot will prompt you for inputs.
- Type your message and the chatbot will respond using the LLM.
- Type `/stop` to end the conversation.
- Chat history is saved in the MySQL database, including user messages and assistant responses.

## Project Structure

```bash
chatbot_project/
│
├── db.py               # Database handling logic (MySQL connection, data insertion, retrieval)
├── llm_service.py      # Logic for interacting with LLM services (Together, Groq)
├── chatbot.py          # Main chatbot logic (conversation flow management)
├── main.py             # Entry point for the chatbot application
├── .env                # Environment variables (API keys, DB credentials)
├── requirements.txt    # Python dependencies
└── README.md           # Project documentation
```

### Explanation of Key Files:

- **`db.py`**: Handles database connection, table creation, inserting and fetching chat data.
- **`llm_service.py`**: Manages communication with LLM services (e.g., Together, Groq) to generate responses.
- **`chatbot.py`**: Core chatbot functionality, including handling conversation history and managing chat state.
- **`main.py`**: The entry point that integrates everything and runs the chatbot.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Here are some ways you can contribute:

- Fix bugs or suggest new features.
- Improve performance (e.g., caching, optimization).
- Add support for more LLM services.
- Enhance the database design or chatbot logic.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

