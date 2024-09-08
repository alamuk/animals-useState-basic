import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from '../reuseableComponens/Panel';

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    // setIsOpen((currentIsOpen) => !currentIsOpen); // functional update. // the right way doing it
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setIsOpen(false);
    onChange(option);
  }

  const renderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1:"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // let content = 'Select ...';
  // if (selectionOptions) {
  //   content = selectionOptions.label;
  // }
  const content = (
    <span className="text-lg">
      {isOpen ? <GoChevronLeft /> : <GoChevronDown />}
    </span>
  );

  return (
    <div className="w-48 relative ">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        {value?.label || 'Select...'}

        {content}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
}
