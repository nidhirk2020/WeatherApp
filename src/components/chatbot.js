import React, { useState } from 'react';
import axios from 'axios';

const OpenAIChatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the user's message to the chat window
    setMessages((prevMessages) => [...prevMessages, { user: true, text: input }]);
    
    try {
      // Make the request to OpenAI's API
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
      { role: 'system', content: 'You are Weather Aunty, an expert in home remedies for weather-related conditions.' },
      { role: 'user', content: `Provide a home remedy for the following condition: ${input}` },
    ],
         max_tokens: 150,
         temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Extract the response text
      const remedy = response.data.choices[0].text.trim();

      // Add both user and bot messages to the chat window
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: true, text: input },
        { user: false, text: remedy },
      ]);
      
    } catch (error) {
       console.error("Error fetching remedy:", error.response ? error.response.data : error.message);
  setMessages((prevMessages) => [
    ...prevMessages,
    { user: false, text: "Sorry, Weather Aunty didn't get it. Please try again." },
  ]);
    }

    // Clear the input field
    setInput('');
  };

  return (
    <div className="chatbot">
      <img src="/images/aunty.png" alt="Aunty" className="aunty-image" />

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Weather Aunty about home remedies..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default OpenAIChatbot;

