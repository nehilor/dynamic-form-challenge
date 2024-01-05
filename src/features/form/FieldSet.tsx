import React from 'react';

interface FieldProps {
  id: string;
  placeholder?: string;
  required?: boolean;
  type: string;
  options?: string[];
}

interface FieldSetProps {
  field: FieldProps;
  value: any;
  onFieldChange: (value: any) => void;
}

const FieldSet: React.FC<FieldSetProps> = ({ field, value, onFieldChange }) => {
  return (
    <div>
      <label htmlFor={field.id}>{field.placeholder}</label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.id}
          value={value}
          onChange={(e) => onFieldChange(e.target.value)}
        />
      ) : field.type === 'select' ? (
        <select
          id={field.id}
          value={value}
          onChange={(e) => onFieldChange(e.target.value)}
        >
          <option value="" disabled>
            {field.placeholder}
          </option>
          {field.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          value={value}
          onChange={(e) => onFieldChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default FieldSet;
