import React from 'react';

export default function HighlightText({ text, highlights = [], color = 'text-purple-500' }) {
  if (!text || highlights.length === 0) return <>{text}</>;

  // Escape special regex characters in highlight words
  const escapedWords = highlights.map(word => word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className={color}>{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
