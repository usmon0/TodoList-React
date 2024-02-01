import "./Main.scss";
import { Button } from "../../ui/Button/Button";
import { Input } from "../../ui/Input/Input";
import { ListItem } from "../ListItem/ListItem";

export const Main = ({
  todos,
  addArr,
  text,
  state,
  del,
  toggle,
  delAll,
  delComp,
  redo,
  arr,
}) => {
  return (
    <main>
      <h1 className="h1">ToDo List</h1>
      <div className="todo__cont">
        <form onSubmit={() => addArr()} action="#" className="add__todo">
          <Input value={state} func={text} nameClass={"input"} />
          <Button nameClass={"add__btn"} txt={"Добавить"} />
        </form>
        {!!arr.length && (
          <>
            <div className="line"></div>
            <ul className="todo__list">
              {todos.map((el) => (
                <ListItem
                  funcDel={del}
                  text={el.text}
                  id={el.id}
                  toggle={toggle}
                  isComplate={el.isComplate}
                  redo={redo}
                />
              ))}
            </ul>
            <div className="del">
              <Button
                func={delComp}
                nameClass={"del__complete"}
                txt={"Удалить завершенные"}
              ></Button>
              <Button
                func={delAll}
                nameClass={"del__all"}
                txt={"Удалить все"}
              ></Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
