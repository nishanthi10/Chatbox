import React from "react";

export default function SmallEmojiPicker({ onSelect }) {
  const emojis = ["😊", "🥰", "😍", "😂", "😛", "❤️", "👍", "👎"];

  return (
    <div
      style={{
        position: "absolute",
        top: "-45px",
        right: "0",
        background: "white",
        padding: "6px 10px",
        borderRadius: "20px",
        display: "flex",
        gap: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 500,
      }}
    >
      {emojis.map((e) => (
        <span
          key={e}
          style={{ cursor: "pointer", fontSize: "20px" }}
          onClick={() => onSelect(e)}
        >
          {e}
        </span>
      ))}
    </div>
  );
}
