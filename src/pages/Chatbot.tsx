import { useState } from "react";
import { Card3D } from "@/components/Card3D";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI farming assistant. How can I help you today?",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user"
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: "I understand your question. For the best results with your crop, try applying organic fertilizer in the evening hours when the temperature is cooler.",
      sender: "bot"
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="mr-2" /> Back
        </Button>

        <Card3D className="p-6 mb-6 animate-slide-up">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-bounce-soft">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Assistant</h1>
              <p className="text-muted-foreground">Ask me anything about farming</p>
            </div>
          </div>
        </Card3D>

        {/* Chat Area */}
        <GlassCard className="mb-4 min-h-[400px] max-h-[500px] overflow-y-auto animate-fade-in">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-xl animate-slide-up ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Input */}
        <div className="flex gap-2 animate-fade-in">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
            className="text-lg p-6"
          />
          <Button onClick={handleSend} size="lg" className="px-8">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
