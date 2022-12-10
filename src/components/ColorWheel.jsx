import React from 'react';
import { SketchPicker, ChromePicker} from 'react-color';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import {db} from '../firebase-config'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

function ColorWheel() {
    const buttonRef = useRef(null)
    const [color, setColor] = useState('#000000') 
    const [preset, setPreset] = useState(
        ['#FF001E', '#FF9F00', '#FFE900', '#B7FF00', '#00FF59', '#00E5FF', '#3300FF', '#A600FF', '#FF00E1', '#000000', '#9B9B9B', '#FFFFFF']
    )
    const [newTask, setNewTask] = useState("")
    const palettesCollectionRef = collection(db, "palettes")
    const [newPalette, setNewPalette] = useState([])
   
    const addPaletteColor = (color) => {
        console.log(preset.includes(color));
        if(!preset.includes(color.toUpperCase())) {
            const newPresets = [
                color.toUpperCase(),
                ...preset.slice(0, 10)
            ]
            console.log(newPresets)
            setPreset(newPresets)
        }
    }  

    const handleClick = event => {
        addPaletteColor(color)
        console.log('button clicked')
    };

    const createPalettes = async () => {
        setNewTask(preset)
        await addDoc(palettesCollectionRef, {paletteArray: newTask})
    } 

    const deletePalettes = async (id) => {
        const noteDoc = doc(db, "palettes", id)
        await deleteDoc(noteDoc)
    }

    useEffect(()=>{
        const getPalettes = async () => {
            const data = await getDocs(palettesCollectionRef)
            setNewPalette(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
        }; 
        // here we call the function to refresh the results 
        getPalettes()
    },[color, preset])


    return (
        <div className="App" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="sketchpicker text-slate-800">
                <SketchPicker
                className='max-w-md'
                    color={color}
                    onChange={ color => {
                        setColor(color.hex)
                    }}
                    width="100%"
                    disableAlpha={true}
                    presetColors={preset}
                />

                <div 
                className="buttons" style={{background: "#FFFFFF"}}
                width="20rem" > 
                    <button 
                    ref={buttonRef}
                    className='p-2 rounded-xl'
                    onClick={() => {
                        handleClick()
                    }} style={{background: "#A7BF93", border: '1px solid #74634F'}}>Add Color To Palette</button>
                </div>

                {/* <div className=' rounded-lg flex flex-row justify-between mb-2'> 
                    <textarea className='p-1 text-zinc-800 rounded-lg' onChange={(event) => {setNewTask(event.target.value)}}/> 
                    <button className='p-1 rounded-lg' name='create todo' onClick={createPalettes} style={{background: "#F8E9D2", border: '1px solid #74634F'}}> Submit Palette</button> 
                </div>
                
                {newPalette.map((task) => {
                    return (
                    <div className='flex flex-row gap-1 justify-between mb-1'> 
                    <h1 className='p-1 w-3/4 rounded-lg text-left' style={{background: "#FFFFFF"}}> {task.paletteArray} </h1> 
                    <button className='p-1 rounded-lg' task='delete' onClick={() => {deletePalettes(task.id)}} style={{background: "#FFFFFF", border: '1px solid #74634F'}}> done </button>
                    </div>
                    )
                })} */}
            </div>
        </div>
    );
}

export default ColorWheel;
