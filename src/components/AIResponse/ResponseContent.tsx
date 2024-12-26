import React from 'react';

interface Props {
  text: string;
}

export function ResponseContent({ text }: Props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md prose max-w-none">
      <div className="whitespace-pre-wrap">{text}</div>
    </div>
  );
}