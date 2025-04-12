import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import { API_URL, ENDPOINTS, getEndpointUrl } from "../../config/api";
// import SpeechRecorder from "./speech-recorder";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Jason's AI assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  //   let speechRecorder = useRef(null);

  // Initialize speech recorder
  //   useEffect(() => {
  //     if (!speechRecorder.current) {
  //       speechRecorder.current = new SpeechRecorder({
  //         silenceThreshold: 0.01,
  //         silenceTimeout: 5000,
  //         serverEndpoint: getEndpointUrl(ENDPOINTS.UPLOAD_AUDIO),
  //         onStartRecording: function () {
  //           setIsRecording(true);
  //           appendMessage(
  //             "I'm listening... (will auto-stop after 5 seconds of silence)",
  //             "bot"
  //           );
  //         },
  //         onStopRecording: function () {
  //           setIsRecording(false);
  //           // Remove "I'm listening..." message
  //           setMessages((prevMessages) =>
  //             prevMessages.filter((msg) => !msg.text.includes("I'm listening..."))
  //           );
  //         },
  //         onProcessing: function () {
  //           appendMessage("Processing your speech...", "bot");
  //         },
  //         onResult: function (text) {
  //           // Remove processing message
  //           setMessages((prevMessages) =>
  //             prevMessages.filter(
  //               (msg) => msg.text !== "Processing your speech..."
  //             )
  //           );

  //           // Set the transcribed text in the input
  //           setInputMessage(text);

  //           // Send the message automatically
  //           sendMessage(text);
  //         },
  //         onError: function (errorMessage) {
  //           // Remove processing message if it exists
  //           setMessages((prevMessages) =>
  //             prevMessages.filter(
  //               (msg) => msg.text === "Processing your speech..."
  //             )
  //           );

  //           appendMessage(errorMessage, "bot");
  //         },
  //       });
  //     }
  //   }, [isOpen]);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const appendMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    // Add user message to chat
    appendMessage(message, "user");

    // Clear input field
    setInputMessage("");

    // Show typing indicator
    setIsTyping(true);

    try {
      // Send request to backend
      const response = await fetch(getEndpointUrl(ENDPOINTS.CHAT), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          conversation_id: conversationId,
        }),
      });

      const data = await response.json();

      // Hide typing indicator
      setIsTyping(false);

      // Save conversation ID for future requests
      setConversationId(data.conversation_id);

      // Display bot response
      appendMessage(data.response, "bot");
    } catch (error) {
      // Hide typing indicator
      setIsTyping(false);

      // Display error message
      appendMessage("Sorry, I encountered an error. Please try again.", "bot");
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(inputMessage);
    }
  };

  //   const toggleRecording = () => {
  //     if (!speechRecorder.current) return;

  //     if (!isRecording) {
  //       speechRecorder.current.startRecording();
  //     } else {
  //       speechRecorder.current.stopRecording();
  //     }
  //   };

  const endConversation = () => {
    setShowFeedback(true);
  };

  const cancelFeedback = () => {
    setShowFeedback(false);
  };

  const submitFeedback = async () => {
    try {
      // Show sending message
      appendMessage(
        "Ending conversation and sending summary to email...",
        "bot"
      );

      // Send request to end conversation
      const response = await fetch(getEndpointUrl(ENDPOINTS.END_CONVERSATION), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversation_id: conversationId,
          feedback: feedback.trim(),
        }),
      });

      const data = await response.json();

      // Hide feedback form
      setShowFeedback(false);

      // Display success message
      appendMessage(data.message, "bot");

      // Reset conversation
      setConversationId(null);
      setFeedback("");
    } catch (error) {
      console.error("Error ending conversation:", error);

      // Hide feedback form
      setShowFeedback(false);

      // Display error message
      appendMessage(
        "There was an error ending the conversation. Please try again.",
        "bot"
      );
    }
  };

  return (
    <div className="chatbot">
      {!isOpen && (
        <button className="chatbot__toggle-btn" onClick={toggleChat}>
          <i className="uil uil-comment-dots"></i>
        </button>
      )}

      {isOpen && (
        <div className="chatbot__container">
          <div className="chatbot__header">
            <h3 className="chatbot__title">Ask Jason's AI</h3>
            <div className="chatbot__header-buttons">
              {conversationId && (
                <button
                  className="chatbot__end-chat-btn"
                  onClick={endConversation}>
                  End Chat
                </button>
              )}
              <button className="chatbot__close-btn" onClick={toggleChat}>
                <i className="uil uil-times"></i>
              </button>
            </div>
          </div>

          <div className="chatbot__messages-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot__message ${
                  message.sender === "user"
                    ? "chatbot__message-user"
                    : "chatbot__message-bot"
                }`}>
                {message.text}
              </div>
            ))}

            {isTyping && (
              <div className="chatbot__typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {showFeedback ? (
            <div className="chatbot__feedback-container">
              <h4 className="chatbot__feedback-title">
                Please provide any feedback before ending:
              </h4>
              <textarea
                className="chatbot__feedback-input"
                placeholder="Your feedback (optional)..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}></textarea>
              <div className="chatbot__feedback-buttons">
                <button
                  className="chatbot__feedback-cancel"
                  onClick={cancelFeedback}>
                  Cancel
                </button>
                <button
                  className="chatbot__feedback-submit"
                  onClick={submitFeedback}>
                  Submit & End
                </button>
              </div>
            </div>
          ) : (
            <form className="chatbot__input-container" onSubmit={handleSubmit}>
              <input
                type="text"
                ref={inputRef}
                className="chatbot__input"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              {/* <button
                type="button"
                className={`chatbot__mic-btn ${isRecording ? "recording" : ""}`}
                onClick={toggleRecording}>
                <i className="uil uil-microphone"></i>
              </button> */}
              <button type="submit" className="chatbot__send-btn">
                <i className="uil uil-message"></i>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
