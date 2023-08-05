import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newThemeValue = prevState.theme === 'light' ? 'dark' : 'light'
          localStorage.setItem('theme', newThemeValue)

          return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
          }
        })
      }
    }
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme)  // menerapkan tema berdasarkan nilai dari local storage saat laman dibuka pertama kalinya
  }

  componentDidUpdate(prevProps, prevState) {  // method lifecycle ini selalu dieksekusi setiap kali state mengalami perubahan
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme)
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <ToggleTheme />
          <p>Hello, World</p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
