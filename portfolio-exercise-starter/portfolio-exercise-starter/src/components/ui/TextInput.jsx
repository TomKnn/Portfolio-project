// TextInput.jsx
import "./TextInput.css";

export const TextInput = ({ value, onChange }) => (
  <input
    className="text-input"
    type="text"
    value={value} // Bind de input aan de value van de state
    onChange={onChange} // Zorg ervoor dat onChange de state bijwerkt
  />
);
