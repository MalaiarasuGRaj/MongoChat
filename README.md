\# 🧠 MongoChat – AI-Powered MongoDB Chatbot

MongoChat is a full-stack AI chatbot built with \*\*React\*\*, \*\*Flask\*\*, and \*\*MongoDB\*\*, powered by the \*\*LLaMA 3.2\*\* model from \*\*Sambanova\*\*. It allows users to connect their MongoDB database and interact with it using \*\*natural language\*\* queries. No more complex queries – just ask your data!

\---

\## 🚀 Features

\- 🧩 \*\*Natural Language Interface\*\* – Chat with your database like you're chatting with a friend.

\- 🔌 \*\*MongoDB Integration\*\* – Connect any MongoDB instance seamlessly.

\- 🧠 \*\*LLaMA 3.2 (Sambanova)\*\* – High-performance language model for accurate and context-aware responses.

\- 🌐 \*\*Modern Frontend\*\* – Built with React for a sleek, responsive UI.

\- 🛠️ \*\*Robust Backend\*\* – Flask API handles database queries and LLM integration.

\---

\## 🖥️ Tech Stack

| Frontend | Backend | Database | AI/ML |

|----------|---------|----------|-------|

| React | Flask | MongoDB | LLaMA 3.2 (Sambanova) |

\---

\## Watch MongoChat in action:

👉 \[Click here to watch the demo video\](https://drive.google.com/file/d/your-video-id/view)

\---

\## 🔧 Setup Instructions

\### Prerequisites

\- Node.js

\- Python 3.8+

\- MongoDB instance (local or cloud)

\- Sambanova API access (LLaMA 3.2)

\---

\### 1. Clone the Repository

\`\`\`bash

git clone https://github.com/MalaiarasuGRaj/MongoChat.git

cd MongoChat

2\. Setup Backend

bash

Copy

Edit

cd backend

python -m venv venv

source venv/bin/activate # On Windows: venv\\Scripts\\activate

pip install -r requirements.txt

Create a .env file in backend/ with your MongoDB URI and Sambanova API key:

env

Copy

Edit

MONGO\_URI=your\_mongo\_uri

SAMBANOVA\_API\_KEY=your\_api\_key

Run the Flask server:

bash

Copy

Edit

python src/app.py

3\. Setup Frontend

bash

Copy

Edit

cd ../frontend

npm install

npm start

💬 Example Usage

💡 "Show me all users who signed up in the last 7 days."

→ MongoChat will translate this into a MongoDB query and return results instantly.

🙌 Credits

LLaMA 3.2 by Sambanova for the powerful LLM.

Built by Malaiarasu G Raj
