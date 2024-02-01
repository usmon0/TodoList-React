import "./Button.scss";

export const Button = ({ nameClass, txt, func }) => {
  return (
    <>
      <button onClick={() => func()} className={nameClass}>
        <p>{txt}</p>
      </button>
    </>
  );
};
