import './Button.css';

export default function Button({ className, text, onClick }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {text}
    </button>
  );
}
