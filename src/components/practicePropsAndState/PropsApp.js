import Dropdown from './Dropdown';
import { useState } from 'react';

export default function PropsApp() {
  const [selectOption, setSelectOption] = useState(null);
  const [select, setSelect] = useState(null);

  function handleSelect(option) {
    setSelect(option);
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} onChange={handleSelect} value={select} />
      <Dropdown options={options} onChange={handleSelect} value={select} />
    </div>
  );
}
