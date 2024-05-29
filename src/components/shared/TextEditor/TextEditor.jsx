const TextEditor = ({ text, padding = "1", colorer = false }) => {
  const numberRegex = /\d+/g;
  return (
    <div>
      {text.split(".").map((line, index) => (
        <p className={`pt-${padding}`} key={index} style={{ margin: 0 }}>
          {line.split(numberRegex).reduce((acc, part, idx, arr) => {
            if (idx < arr.length - 1) {
              const match = line.match(numberRegex)[idx];
              acc.push(
                part,
                <span
                  key={`${index}-${idx}`}
                  className={colorer ? "text-blue" : ""}
                >
                  {match}
                </span>
              );
            } else {
              acc.push(part);
            }
            return acc;
          }, [])}
          {line.trim() && "."}
        </p>
      ))}
    </div>
  );
};
export default TextEditor;
