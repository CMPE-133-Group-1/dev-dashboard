import React from 'react';
import { SketchPicker} from 'react-color';
import { useState } from 'react';

function ColorWheel() {
    const state = {
        activeColor: "FFFFFF",
        presetColors: ["#FF001E", "#FF9F00", "#FFE900", "#B7FF00", "#00FF59", "#00FFBF",
                    "#00E5FF", "#0077FF", "#3300FF", "#A600FF", "#FF00E1", "#FF0062",
                    "#000000", "#9B9B9B", "#FFFFFF"]
    }
    

    const handleChangeComplete = (colorHex) => {
        this.setState({activeColor: colorHex.hex.toUpperCase()})
    }

    const handleClick = (id, currentColor) => {
        this.props.addColor(id, currentColor)
        if (!state.presetColors.includes(currentColor)) {
            this.setState(state => {
                const colors = state.presetColors.slice(0) 
                colors.unshift(currentColor)
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
                    className='text-black'
                    color={state.activeColor}
                    onChangeComplete={handleChangeComplete}
                    disableAlpha={true}
                    width="96%"
                    presetColors={state.presetColors}
                />
                <button onClick={handleClick}>Confirm</button>
            </div>
        </div>
    );
}

export default ColorWheel;
