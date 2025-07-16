import React, { useState } from "react";
import {
  CircleDollarSign,
  Star,
  Heart,
  Clover,
  Gem,
  Gift
} from "lucide-react";

const SYMBOLS = [
  { icon: CircleDollarSign, name: "dollar" },
  { icon: Star, name: "star" },
  { icon: Heart, name: "heart" },
  { icon: Clover, name: "clover" },
  { icon: Gem, name: "gem" },
  { icon: Gift, name: "gift" }
];

const getRandomSymbol = () => {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
};

const SlotMachine = () => {
  const [reels, setReels] = useState([
    getRandomSymbol(),
    getRandomSymbol(),
    getRandomSymbol()
  ]);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("");

  const spin = () => {
    setSpinning(true);
    setMessage("");

    const interval = setInterval(() => {
      setReels([getRandomSymbol(), getRandomSymbol(), getRandomSymbol()]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const final = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
      setReels(final);
      setSpinning(false);

      const names = final.map((s) => s.name);
      const unique = new Set(names);

      if (unique.size === 1) {
        setMessage("🎉 Jackpot! All match!");
      } else if (unique.size === 2) {
        setMessage("✨ Two matched!");
      } else {
        setMessage("💔 No match.");
      }
    }, 1500);
  };

  return (
    <div
      style={{
        width: "360px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>🎰 Slot Machine</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "16px",
          border: "1px solid #eee",
          borderRadius: "8px",
          marginBottom: "20px",
          backgroundColor: "#f9f9f9"
        }}
      >
        {reels.map((symbol, idx) => {
          const Icon = symbol.icon;
          return <Icon key={idx} size={48} color="#333" />;
        })}
      </div>
      <button
        onClick={spin}
        disabled={spinning}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: spinning ? "not-allowed" : "pointer",
          backgroundColor: spinning ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          transition: "background-color 0.2s"
        }}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {message && (
        <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "500" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default SlotMachine;
