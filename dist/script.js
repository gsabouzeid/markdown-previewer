const defaultText =
'# This is a h1 heading\n\n## This is an h2 element\n\nHere is a link to my **GitHub**: [gsabouzeid](https://github.com/gsabouzeid)\n\nHere is an example of a paragraph element in HTML: `<p>Hello World!</p>`\n\n```\n//Here is a code block\n\nconst helloWorld = () => {\n  return "Hello World!" \n}\n```\n\nHere is a list of my favorite things:\n- Basketball\n- Listening to music\n- Video Games\n\n> Here is a block quote\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)';

const App = () => {
  const [text, setText] = React.useState(defaultText);

  marked.use({
    breaks: true });


  const handleChange = e => {
    setText(e.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "main" }, /*#__PURE__*/
    React.createElement("textarea", { id: "editor", rows: 20, cols: 60, onChange: handleChange }, text), /*#__PURE__*/
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked.parse(text) } })));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));