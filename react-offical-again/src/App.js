import React from 'react';

// 一个使用到ThemedButton组件的中间组件
// 创建context实例
const themes = {
  light: {
    foreground: '#ffffff',
    background: '#222222',
  },
  dark: {
    foreground: '#000000',
    background: '#eeeeee',
  },
};
const ThemeContext = React.createContext(
  // themes.dark
  {
    background: 'red',
    color: 'white'
  }
);

class Header extends React.Component {
  render() {
    return (
      <Title>Hello React Context API</Title>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <h1 style={{ background: context.background, color: context.color }}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      // 当没有最近的Provider,context取默认值
      // 在这里把ThemeContext.Provider注释掉就会取默认值
      <ThemeContext.Provider value={{ background: 'green', color: 'white' }}>
        <Header />
      </ThemeContext.Provider>
    );
  }
}
export default App
