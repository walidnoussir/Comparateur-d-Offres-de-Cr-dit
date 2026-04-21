const Info = ({ value, title, children }) => {
  return (
    <div className="flex gap-2">
      {children}
      <p>
        {title} : <span>{value}</span>
      </p>
    </div>
  );
};

export default Info;
