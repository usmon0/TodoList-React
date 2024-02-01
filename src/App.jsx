import "./App.scss";
import { Main } from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [inText, setInText] = useState("");
  const [inValue, setInValue] = useState([]);

  function AddArr() {
    if (inText) {
      setInValue([
        ...inValue,
        {
          text: inText,
          id: Date.now(),
          isComplate: false,
        },
      ]);
    }
    setInText("");
  }

  function del(id) {
    setInValue(inValue.filter((el) => el.id !== id));
  }

  function textF(word) {
    setInText(word);
  }

  function delAll() {
    setInValue([]);
  }

  function dellComp() {
    setInValue(inValue.filter((el) => el.isComplate === false));
  }

  function checkComplate(id) {
    setInValue(
      inValue.map((el) => {
        if (el.id === id) {
          return {
            text: el.text,
            id: el.id,
            isComplate: !el.isComplate,
          };
        } else {
          return el;
        }
      })
    );
    console.log(inValue);
  }

  function redo(id, value) {
    setInValue(
      inValue.map((el) => {
        if (el.id == id) {
          return {
            text: value,
            id: el.id,
            isComplate: el.isComplate,
          };
        } else {
          return el;
        }
      })
    );
  }

  return (
    <>
      <Main
        del={del}
        state={inText}
        text={textF}
        addArr={AddArr}
        todos={inValue}
        toggle={checkComplate}
        delAll={delAll}
        delComp={dellComp}
        redo={redo}
        arr={inValue}
      ></Main>
    </>
  );
}

export default App;
