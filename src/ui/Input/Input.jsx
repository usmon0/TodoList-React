import "./Input.scss";

export const Input = ({ nameClass, func, value }) => {
  return (
    <>
      <input
      value={value}
        onChange={(e) => {
          func(e.target.value);
        }}
        className={nameClass}
        type="text"
      />
    </>
  );
};
