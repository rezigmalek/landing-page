import React from 'react';

export default function MagicButton({children}) {
  return (
    <button className="btn-magic" aria-pressed="false">
      {children}
    </button>
  );
}
