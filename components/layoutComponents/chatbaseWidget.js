"use client";

import { useEffect } from "react";

const CHATBOT_ID = process.env.NEXT_PUBLIC_CHATBOT_ID;

export default function ChatbaseWidget() {
  useEffect(() => {
    if (!CHATBOT_ID) return;

    // Chatbase config - script load hone se pehle set hona chahiye
    window.chatbaseConfig = {
      chatbotId: CHATBOT_ID,
    };

    // Script already load ho chuki ho toh dobara load mat karo
    if (document.getElementById(CHATBOT_ID)) return;

    const script = document.createElement("script");
    // ⚠️ Zaroori: script ka id = chatbot ID hona chahiye (Chatbase ka requirement)
    script.id = CHATBOT_ID;
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(CHATBOT_ID);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
