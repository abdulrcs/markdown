import React from 'react';
import './App.css';
import marked from 'marked';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const placeholder = `# Welcome to Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![React Logo](https://nagarsoftwaresolution.com/wp-content/uploads/2020/02/icons8-react-native-256.png)
`;
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      input: placeholder,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)
  {
    this.setState({
      input : event.target.value,
    })
  }

  render()
  {
    return (
      <div>
        <div className="row App vh-100 vw-100">
        <textarea className="col bg-light" value={this.state.input} id="editor" onChange={this.handleChange}/>
          <div className="col bg-dark text-white"> 
          <div id="preview"
              dangerouslySetInnerHTML={{
                  __html: marked(this.state.input, {breaks:true})
              }}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
