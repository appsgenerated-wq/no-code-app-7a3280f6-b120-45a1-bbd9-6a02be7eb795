import React from 'react';

const Input = ({ id, label, type = 'text', value, onChange, required = false, autoComplete, name, className = '' }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${className}`}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
