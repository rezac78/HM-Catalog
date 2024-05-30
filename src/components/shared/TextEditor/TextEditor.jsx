const TextEditor = ({ text, padding = "1", colorer = false }) => {
  const numberRegex = /\d+/g;
  return (
    <div>
    {text.split(".").map((line, index) => {
      const matches = line.match(numberRegex) || [];
      return (

          {line}
      );
    })}
  </div>
  );
};
export default TextEditor;
