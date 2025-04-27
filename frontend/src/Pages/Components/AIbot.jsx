import React, { useState, useRef } from "react";

const AIBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm CareConnectBot. Ask me anything about health and medicine.",
      type: "received",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f5f7fa",
      borderRadius: "10px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      height: "90vh",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "26px",
      fontWeight: "600",
    },
    errorMessage: {
      color: "#e74c3c",
      backgroundColor: "#fdecea",
      padding: "10px 15px",
      borderRadius: "6px",
      marginBottom: "15px",
      textAlign: "center",
      fontSize: "14px",
    },
    chatMessages: {
    flex: 1,
    overflowY: "auto",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "10px",
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)",
    scrollbarWidth: "none",         // Firefox
    msOverflowStyle: "none",        // IE 10+
  },

    message: {
      maxWidth: "80%",
      padding: "12px 16px",
      borderRadius: "20px",
      lineHeight: "1.5",
      wordWrap: "break-word",
      fontSize: "15px",
    },
    sentMessage: {
      backgroundColor: "#007bff",
      color: "white",
      alignSelf: "flex-end",
      borderBottomRightRadius: "5px",
    },
    receivedMessage: {
      backgroundColor: "#e9ecef",
      color: "#212529",
      alignSelf: "flex-start",
      borderBottomLeftRadius: "5px",
    },
    typingIndicator: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 0",
    },
    typingDot: {
      width: "8px",
      height: "8px",
      backgroundColor: "#6c757d",
      borderRadius: "50%",
      animation: "bounce 1.4s infinite ease-in-out",
    },
    chatInput: {
      display: "flex",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "12px 16px",
      border: "1px solid #ced4da",
      borderRadius: "20px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.3s, box-shadow 0.3s",
      backgroundColor: "white",
    },
    inputFocus: {
      borderColor: "#007bff",
      boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.25)",
    },
    sendButton: {
      padding: "12px 25px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "80px",
      fontWeight: "500",
    },
    sendButtonDisabled: {
      backgroundColor: "#b8d4ff",
      cursor: "not-allowed",
    },
    buttonLoader: {
      width: "18px",
      height: "18px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTopColor: "white",
      animation: "spin 1s linear infinite",
    },
  };


  const getInputStyle = () => ({
    ...styles.input,
    ...(document.activeElement === inputRef.current ? styles.inputFocus : {}),
  });

 const handleSend = async () => {
   if (!input.trim() || loading) return;

   const userMessage = { text: input.trim(), type: "sent" };
   setMessages((prev) => [...prev, userMessage]);
   setInput("");
   setLoading(true);
   setError(null);

   try {
     const response = await fetch(
       "https://api.aimlapi.com/v1/chat/completions",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: "Bearer 4c96d71cbeba45f5a5175b27f02781ae",
         },
         body: JSON.stringify({
           model: "gpt-3.5-turbo",
           messages: [
             ...messages
               .filter((msg) => msg.type === "sent" || msg.type === "received")
               .map((msg) => ({
                 role: msg.type === "sent" ? "user" : "assistant",
                 content: msg.text,
               })),
             {
               role: "user",
               content: input.trim(),
             },
           ],
         }),
       }
     );

     if (!response.ok) {
       const errorData = await response.json();
       throw new Error(errorData.error?.message || "Something went wrong!");
     }

     const data = await response.json();
     const botMessage = {
       text:
         data.choices[0]?.message?.content ||
         "Sorry, I couldn't understand that.",
       type: "received",
     };
     setMessages((prev) => [...prev, botMessage]);
   } catch (error) {
     console.error("API Error:", error);
     setError(error.message);
     setMessages((prev) => [
       ...prev,
       {
         text: "Sorry, I encountered an error. Please try again later.",
         type: "received",
       },
     ]);
   } finally {
     setLoading(false);
   }
 };


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CareConnectBot</h1>
      {error && <div style={styles.errorMessage}>{error}</div>}

      <div style={styles.chatMessages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              ...(msg.type === "sent"
                ? styles.sentMessage
                : styles.receivedMessage),
            }}
          >
            {msg.text.split("\n").map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        ))}
        {loading && (
          <div style={{ ...styles.message, ...styles.receivedMessage }}>
            <div style={styles.typingIndicator}>
              <span style={{ ...styles.typingDot, animationDelay: "0s" }} />
              <span style={{ ...styles.typingDot, animationDelay: "0.2s" }} />
              <span style={{ ...styles.typingDot, animationDelay: "0.4s" }} />
            </div>
          </div>
        )}
      </div>

      <div style={styles.chatInput}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about health, diseases, or medicine..."
          disabled={loading}
          style={getInputStyle()}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          style={{
            ...styles.sendButton,
            ...((loading || !input.trim()) && styles.sendButtonDisabled),
          }}
        >
          {loading ? <span style={styles.buttonLoader} /> : "Send"}
        </button>
      </div>

      {/* CSS animations injected */}
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AIBot;
