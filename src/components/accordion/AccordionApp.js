import Accordion from './Accordion';

export default function AccordionApp() {
  const items = [
    {
      id: 'jh2e',
      label: 'Use React',
      content: 'Hello this is a React content to show',
    },
    {
      id: 'kfjr5',
      label: 'Use JS',
      content: 'Hello this is a JS content to show',
    },
    {
      id: 'gkdog5',
      label: 'Use Python',
      content: 'Hello this is a Python content to show',
    },
  ];
  return <Accordion items={items} />;
}
