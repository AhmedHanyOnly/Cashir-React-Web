
export const BoxInfo = ({ number, text, color, icon: Icon }) => {
  return (
    <div className={`box-info ${color}`}>
      <div className="num">{number}</div>
      <div className="text">{text}</div>
      <div className="bg-icon">
        <Icon size={60} />
      </div>
    </div>
  );
};
