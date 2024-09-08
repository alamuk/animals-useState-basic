import Button from '../stateManament/Button';

export default function ButtonPage() {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          classname="mb-5"
          onClick={handleClick}
        ></Button>
      </div>
      <Button>Something</Button>
    </div>
  );
}
