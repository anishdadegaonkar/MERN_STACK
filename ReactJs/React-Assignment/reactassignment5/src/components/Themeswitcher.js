import React from 'react';

const Themeswitcher = ({ theme, toggleTheme }) => {
  return (
    <div className="form-check form-switch mt-5">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </label>
    </div>
  );
};

export default Themeswitcher;
