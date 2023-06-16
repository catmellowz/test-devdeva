import './InputList.css';

export default function InputList({ name, onChange, value }) {
  return (
    <>
      <select
        className='input-list-container w-full'
        onChange={onChange}
        value={value}
        name={name}
      >
        <option value='-'>-- Please select Gender --</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Other'>Other</option>
      </select>
    </>
  );
}
