import React, { useState, useEffect } from "react";

import MyProgress from "./Pages/MyProgress.jsx";
import './AdminScreen.scss';

export default function AdminScreen(props) {

    const [screenWidth, setScreenWidth] = useState(400);

    function renderControlPanel() {
        const { height, width } = useWindowDimensions();
        return (<div className="control-panel" style={{"width":(width - screenWidth) + "px"}}>
            Control Panel
        </div>)
    }

    function renderScreen() {
        const { height, width } = useWindowDimensions();
        return (<div className="screen-panel" style={{"width": screenWidth + "px"}}>
          <div style={{transform: `scale(${height/952})`, transformOrigin: "top right"}}>
            <div className="phone-screen">
                <MyProgress token="demo"/>
            </div>
          </div>
        </div>)
    }

    return (<div>
        {renderControlPanel()}
        {renderScreen()}
        </div>
    )
}

/* Window dimension functions */
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }