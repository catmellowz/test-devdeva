import './InputName.css';

export default function InputName({
  label,
  className,
  onChange,
  value,
  name,
}) {
  return (
    <>
      <input
        className={`input-name-container w-full ${className}`}
        type='text'
        placeholder={label}
        onChange={onChange}
        value={value}
        name={name}
      />
    </>
  );
}
