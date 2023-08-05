import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
          }
        })
      }
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <p>Hello, World</p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
