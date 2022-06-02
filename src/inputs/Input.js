import * as React from "react";

function Input({handleSubmit}) {
  const [value, setValue] = React.useState("sdfasdfs");

  return (
    <form data-testid="form-submit" onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        data-testid="input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="input"
        className="p-4"
        placeholder="Enter your value here"
      />
      <button data-testid="btn-submit" className="btn p-4 block m-y-2" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Input;
