import React from 'react';
import { SketchPicker} from 'react-color';
import { useState } from 'react';

function ColorWheel() {
    const [color, setColor] = useState({
        activeColor: "#267E92",
        presetColors: ["#FF001E", "#FF9F00", "#FFE900", "#B7FF00", "#00FF59", "#00FFBF",
        "#00E5FF", "#0077FF", "#3300FF", "#A600FF", "#FF00E1", "#FF0062",
        "#000000", "#9B9B9B", "#FFFFFF"]
    });
    

    const handleChangeComplete = (hexColor) => {
        setColor({activeColor: hexColor.hex.toUpperCase()})
    }

    const handleClick = (hexValue, activeColor) => {
        setColor({activeColor: hexValue})
        if (!color.presetColors.includes(activeColor)) {
            setColor(color => {
                const colors = color.presetColors.slice(0) 
                colors.unshift(activeColor)
                colors.pop()
                return {
                    presetColors: colors 
                }
            })
        }
    } 

    return (
        <div className="App" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="sketchpicker">
                <SketchPicker
                    color={color}
                    onChange={ color => {
                        setColor(color.hex);
                    }}
                    // onChangeComplete={handleChangeComplete}
                    disableAlpha={true}
                    width="96%"
                    // activeColor={color.activeColor}
                    presetColors={color.presetColors}
                />
                <button onClick={handleClick}>Confirm</button>
            </div>
        </div>
    );
}

export default ColorWheel;
