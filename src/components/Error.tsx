import React from 'react';

interface ErrorMsgProps {
  error: string;
}

export function ErrorMsg({ error }: ErrorMsgProps) {
  return (
    <div>
      <p className="text-center text-red-600">{error}</p>
    </div>
  );
}
