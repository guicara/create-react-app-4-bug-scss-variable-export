import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import colors from './template/colors.scss';

function App() {
  console.log('colors', colors.colorBlack);

  return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Create React App 4.0.0
          </p>
          <p>
            Variable fetched from SCSS file<br /><i>(with :export and webpack's css-loader)</i>:
          </p>
          <p>
            {colors.colorBlack}
          </p>
        </header>
      </div>
  );
}

export default App;
