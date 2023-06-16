import './InputDate.css';
import DatePicker from 'react-datepicker';

export default function InputDate({ onChange, selectedDate }) {
  return (
    <>
      <div>
        <DatePicker
          className='date-component w-full'
          selected={selectedDate}
          placeholderText='DD/MM/YYYY'
          onChange={onChange}
          dateFormat='dd/MM/yyyy'
          showMonthDropdown
          showYearDropdown
        />
      </div>
    </>
  );
}
