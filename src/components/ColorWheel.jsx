import React from 'react';
import { SketchPicker, ChromePicker} from 'react-color';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import {db} from '../firebase-config'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

function ColorWheel() {
    let clicked = 0
    const buttonRef = useRef(null)
    const [color, setColor] = useState("#000000") 
    const [palette] = useState({
        preset: (["#FF001E", "#FF9F00", "#FFE900", "#B7FF00", "#00FF59", "#00E5FF", "#3300FF", "#A600FF", "#FF00E1", "#000000", "#9B9B9B", "#FFFFFF"]),
    })
    const [palettes, setPalettes] = useState([])
    const palettesCollectionRef = collection(db, "palettes")
    const [newPalette, setNewPalette] = useState([]);
   
    const updatePaletteColor = (color) => {
        // clicked = clicked + 1
        if(!palette.preset.includes(color.hex)) {
            const colors = palette.preset.slice(0)
            colors.unshift(color)
            colors.pop()
            palette.preset = colors
            console.log(palette.preset)
        }
        // if(buttonRef.current.disabled) {
        //     handleReset()
        //     // clicked = 0
        // }
    }  

    const handleClick = event => {
        // buttonRef.current.disabled = true
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

    const createPalettes = async () => {
        await addDoc(palettesCollectionRef, {paletteArray: newPalette})
    } 

    const deletePalettes = async (id) => {
        const noteDoc = doc(db, "palettes", id)
        await deleteDoc(noteDoc)
    }

    useEffect(()=>{
        const getPalettes = async () => {
            const data = await getDocs(palettesCollectionRef)
            setPalettes(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
        }; 
        // here we call the function to refresh the results 
        getPalettes()
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
                    }}>Add Color To Palette</button>

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