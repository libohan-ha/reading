import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

export function BookInput({ value, onChange, disabled }: Props) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="请输入书籍名称..."
        className="w-full p-4 border rounded-lg shadow-inner 
                 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}