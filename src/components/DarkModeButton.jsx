import React, { useEffect,useState } from 'react';


function DarkModeButton() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
      function toggleTheme() {        setTheme(theme === 'light' ? 'dark' : 'light');

}
  return (
    <div>
        <button onClick={toggleTheme}>
            switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>

  
    </div>
  )
}

export default DarkModeButton