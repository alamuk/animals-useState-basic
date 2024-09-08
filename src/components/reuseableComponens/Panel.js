import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const mainClassName = classNames(
    'border round p3 shadow bg-white w-full',
    className,
  );

  return (
    <div {...rest} className={mainClassName}>
      {children}
    </div>
  );
}
export default Panel;
