import React from 'react';
import { SketchPicker, ChromePicker} from 'react-color';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
// import { click } from '@testing-library/user-event/dist/click';

//
class Queue extends Array {
    enqueue(val) {
        this.push(val);
    }

    dequeue() {
        return this.shift();
    }

    peek() {
        return this[0];
    }

    isEmpty() {
        return this.length === 0;
    }
}
//
// let paletteQueue = new Queue()
/*
 ["#333333", "#FF9F00", "#FFE900", "#B7FF00", 
         "#00FF59", "#00FFBF", "#00E5FF", "#0077FF", 
         "#3300FF", "#A600FF", "#FF00E1", "#FF0062",
         "#000000", "#9B9B9B", "#FFFFFF", "#F22330"]
*/
function ColorWheel() {
    let clicked = 0
    const buttonRef = useRef(null)
    const [color, setColor] = useState("#000000") 
    const [palette] = useState({
        preset: (["#FF001E", "#FF9F00", "#FFE900", "#B7FF00", "#00FF59", "#00E5FF", "#3300FF", "#A600FF", "#FF00E1", "#000000", "#9B9B9B", "#FFFFFF"]),
    })

    // const [isFull, setIsFull] = useState(false)
   
    const updatePaletteColor = (color) => {
        clicked = clicked + 1
        // paletteQueue.enqueue(color)
        // setPalette(paletteQueue)
        if(!palette.preset.includes(color.hex) && clicked === 1) {
            const colors = palette.preset.slice(0)
            colors.unshift(color)
            colors.pop()
            palette.preset = colors
        }
        if(buttonRef.current.disabled) {
            handleReset()
            // clicked = 0
        }
    }

    const handleClick = event => {
        buttonRef.current.disabled = true
        // buttonRef.display = false
        updatePaletteColor(color)
        console.log('button clicked')
      };

    const handleReset = event => {
        buttonRef.current.disabled = false
        console.log('button enabled')
    };

    // const checkIfFull = () => {
    //     if(palette.length == 10){
    //         setIsFull(true)
    //     }
    // }

    useEffect(()=>{
        console.log(">> Color: " + color)
        console.log(">> List: " + palette)
      },[color, palette])


    return (
        <div className="App" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="sketchpicker text-slate-800">
                <SketchPicker
                className='max-w-xs'
                    color={color}
                    onChange={ color => {
                        setColor(color.hex)
                    }}
                    width="20rem"
                    disableAlpha={true}
                    presetColors={palette.preset}
                />

                {/* <div  height='2rem' className='bg-orange-400 mx-w-xs grid grid-rows-2 grid-cols-5 grid-flow-row gap-1 ' > 
                    {palette.map((colors) => {
                        return (
                        <div 
                        className='mb-1 p-2 rounded-lg bg-slate-400 font-sans text-[6px] text-white'
                        width='1.5rem'
                        height='1.5rem'
> 
                        {colors}
                        </div>
                        )
                    })}
                </div> */}

                <div 
                className="buttons bg-blue-200"
                width="20rem" > 
                    <button 
                    ref={buttonRef}
                    className='bg-green-400 p-2 rounded-xl'
                    onClick={() => {
                        handleClick()
                    }}>Confirm</button>

                    {/* <button 
                    className='bg-orange-400 p-2 rounded-xl'
                    onClick={() => (
                        console.log(palette)
                    )}>Save Palette</button> */}
                </div>
            </div>
        </div>
    );
}

export default ColorWheel;