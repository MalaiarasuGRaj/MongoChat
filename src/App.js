import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './App.css';
import ReactMarkdown from 'react-markdown';

function App() {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const chatContainerRef = useRef(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Query cannot be empty.");
      return;
    }
    setQuery("");
    setLoading(true);
    setError(null);

    const newHistory = [
      ...chatHistory,
      { sender: "user", message: query }
    ];
    setChatHistory(newHistory);

    // Build context, limiting to the last 50 messages if necessary
    const context = newHistory
      .slice(-50) // Adjust number as needed
      .map((chat) => `${chat.sender === "user" ? "User" : "Bot"}: ${chat.message}`)
      .join("\n");

    try {
      const res = await axios.get(`http://127.0.0.1:5000/query/${encodeURIComponent(context)}`);
      const botResponse = res.data.Chatbot || "No response received.";

      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", message: botResponse }
      ]);
    } catch (err) {
      setError(
        err.response?.data?.Message ||
        "An error occurred while fetching the response. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className="app-container">
      <h1>DB Query Agent</h1>
      <div className="chat-container" ref={chatContainerRef}>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-bubble ${chat.sender === "user" ? "user" : "bot"}`}
          >
            <ReactMarkdown>{chat.message}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="chat-bubble bot">
            Loading...
            <div className="loader"></div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter your query..."
          aria-label="Query Input" 
        />
        <button type="submit" aria-label="Submit Query">Send</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default App;
