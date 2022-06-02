import * as React from "react";

function Form() {
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setValue((value) => (value = e.target.value));
  }

  return (
    <React.Fragment>
      <form data-testid="form" onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          value={value}
          type="text"
          name="text"
          placeholder="Type your text"
          data-testid="input"
        />
        <button data-testid="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default Form;
