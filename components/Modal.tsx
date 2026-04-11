"use client";

import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
export default function Modal() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello 👋 Welcome to CareerBaba! How can I help you today?",
    },
  ]);

  const handleQuickReply = (text:any) => {
    let reply = "";

    switch (text) {
      case "Courses":
        reply =
          "We offer Data Science, Web Development, Python, and Govt Exam courses.";
        break;
      case "Fees":
        reply = "Fees depend on the course. Please contact us for details.";
        break;
      case "Demo":
        reply = "You can book a free demo class. Would you like to proceed?";
        break;
      case "Contact":
        reply =
          "Call us at +91-9897753555 or email support@careerbaba.com";
        break;
      default:
        reply = "Sorry, I didn’t understand that.";
    }

    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "bot", text: reply },
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaRegCommentDots size={24} />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-5 right-5 w-[320px] bg-white rounded-2xl shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-2xl">
            <div>
              <h3 className="font-bold text-sm">CareerBaba Assistant</h3>
              <p className="text-xs opacity-80">Online</p>
            </div>
            <button onClick={() => setOpen(false)}>
              <IoClose size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm w-fit max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-gray-100"
                    : "bg-blue-500 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Quick Buttons */}
          <div className="p-2 flex flex-wrap gap-2 border-t">
            {["Courses", "Fees", "Demo", "Contact"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleQuickReply(btn)}
                className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}