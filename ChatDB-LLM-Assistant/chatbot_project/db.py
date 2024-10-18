import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

class Database:
    def __init__(self):
        self.config = {
            'user': os.environ.get('DB_USER'),
            'password': os.environ.get('DB_PASSWORD'),
            'host': os.environ.get('DB_HOST'),
            'database': os.environ.get('DB_NAME')
        }

    def connect(self):
        return mysql.connector.connect(**self.config)


class ChatDatabase:
    def __init__(self, db):
        self.db = db

    def create_tables(self):
        conn = self.db.connect()
        cursor = conn.cursor()

        cursor.execute('''
        CREATE TABLE IF NOT EXISTS ChatDB.Chat_history (
            chat_id INT AUTO_INCREMENT PRIMARY KEY,
            start_time DATETIME,
            is_stream INT
        )
        ''')

        cursor.execute('''
        CREATE TABLE IF NOT EXISTS ChatDB.Chat_data (
            id INT AUTO_INCREMENT PRIMARY KEY,
            chat_id INT,
            user TEXT,
            assistant TEXT,
            FOREIGN KEY (chat_id) REFERENCES ChatDB.Chat_history(chat_id)
        )
        ''')

        cursor.execute('''
        DROP TRIGGER IF EXISTS update_is_stream;
        ''')

        cursor.execute('''
        CREATE TRIGGER update_is_stream
        AFTER UPDATE ON ChatDB.Chat_history
        FOR EACH ROW
        BEGIN
            UPDATE ChatDB.Chat_data
            SET is_stream = NEW.is_stream
            WHERE chat_id = NEW.chat_id;
        END;
        ''')

        conn.commit()
        cursor.close()
        conn.close()

    def insert_chat_history(self, start_time, is_stream):
        conn = self.db.connect()
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO ChatDB.Chat_history (start_time, is_stream)
            VALUES(%s, %s)
        ''', (start_time, is_stream))
        conn.commit()
        cursor.close()
        conn.close()

    def get_latest_chat_id(self):
        conn = self.db.connect()
        cursor = conn.cursor()
        cursor.execute('''
            SELECT chat_id FROM ChatDB.Chat_history WHERE 
            chat_id=(SELECT MAX(chat_id) FROM ChatDB.Chat_history)
        ''')
        chat_id_pk = cursor.fetchone()[0]
        cursor.close()
        conn.close()
        return chat_id_pk

    def insert_chat_data(self, chat_id_pk, user_message, assistant_message):
        conn = self.db.connect()
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO ChatDB.Chat_data (chat_id, user, assistant)
            VALUES(%s, %s, %s)
        ''', (chat_id_pk, user_message, assistant_message))
        conn.commit()
        cursor.close()
        conn.close()

