import React, {
  useState,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
  useRef,
} from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const API_URL = "https://portfolio-bot-87bo.onrender.com/chat";

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("chat_history");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("chat_history", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "👋 Hi there! I’m Zaheer’s AI Assistant. Ask me anything about Zaheer’s projects, skills, or portfolio!",
        },
      ]);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(API_URL, {
        message: input,
        session_id: "portfolio_user",
      });

      const botMessage: Message = {
        sender: "bot",
        text: res.data.response || "No response",
      };

      setMessages([...newMessages, botMessage]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Error connecting to server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chat_history");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-20 right-6 w-80 rounded-2xl shadow-xl border z-[9998]
              bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                Zaheer's Assistant 🤖
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="text-xs hover:bg-blue-600 px-2 py-1 rounded-xl border-2 border-blue-600 hover:text-white transition"
                >
                  End Chat
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500"
                >
                  {/* <X size={18} /> */}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-2 text-gray-900 dark:text-gray-100 scroll-smooth">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-sm break-words ${
                    msg.sender === "user"
                      ? "bg-blue-400 text-white self-end ml-auto"
                      : "bg-gray-200 dark:bg-gray-800"
                  } max-w-[90%]`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
              {loading && (
                <div className="text-gray-400 text-xs text-center">
                  Thinking...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about Zaheer..."
                className="flex-1 p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500
                border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl outline-none transition"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className={`p-3 rounded-full transition ${
                  input.trim()
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
