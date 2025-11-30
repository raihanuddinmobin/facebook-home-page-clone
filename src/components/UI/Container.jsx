export default function Container({ children, ...rest }) {
  return (
    <div className="mx-5" {...rest}>
      {children}
    </div>
  );
}
