import * as React from "react";

const useField = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, setValue, onChange };
};

export default useField;
