import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function MyComponent({ message }, ref) {
  const [inputValue, setInputValue] = React.useState("");

  function showAlert() {
    console.log("This is an alert from child");
    alert(message);
  }

  React.useImperativeHandle(ref, () => ({
    changeValue: handleInputChange,
    showAlert
  }));

  const handleInputChange = React.useCallback(({ target: { name, value } }) => {
    setInputValue(value);
  }, []);
  return <input value={inputValue} onChange={handleInputChange} />;
}

const MyCoolComponent = React.forwardRef(MyComponent);

function App() {
  const reff = React.useRef();
  function changeChildValue() {
    reff.current.changeValue({ target: { value: "LOOL" } });
  }
  function showChildALert() {
    reff.current.showAlert({ target: { value: "LOOL" } });
  }
  return (
    <>
      <MyCoolComponent message="Hii" ref={reff} />
      <br />
      <button onClick={showChildALert}>Show child alert!</button>
      <br />
      <button onClick={changeChildValue}>
        Change input child Value with LOOL
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
