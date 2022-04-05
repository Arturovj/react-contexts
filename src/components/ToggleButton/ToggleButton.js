import React from "react"
import { useTheme } from "../../contexts/ThemeContext";
import './ToggleButton.scss'

function ToggleButton() {

    const { toggleTheme } = useTheme();
    
    return(
        <div >
        <label for="theme" className="theme">
        <span className="theme__toggle-wrap">
          <input
          onClick={toggleTheme} 
            id="theme"
            class="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
          />
          <span className="theme__fill"></span>
          <span  className="theme__icon">
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
          </span>
        </span>
      </label>
      </div>
    )
}

export default ToggleButton