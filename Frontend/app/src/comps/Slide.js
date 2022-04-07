import React, {useContext, useState} from 'react';
import "./Slide.css"
import App, { AppContext } from '../App';

function Slide() {
    const [hashtags, setHashtags] = useState('')
    const [state, setState, sentence, setSentence] = useContext(AppContext)
    

    const getHashtags = (sentence) => {
        if (sentence != "") {
            setState("return")
        }
        async function getBackend() {
        const res = await fetch('http://localhost:5000/test', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' ,
            },
            body: JSON.stringify(sentence),
            mode: 'cors'
        }
        ).then((x) => console.log(x))
        }
        getBackend()
    }

    const handleFormValueChange = (value) => {
        setSentence(value)
    }

    const Body = () => {
        switch (state) {
            case ("open") : return <div> <h1 className='header-text'> HASHTAG GENERATOR </h1> <h1 className='bighash'>#</h1> </div>
            case ("type") : return <input className='type-bar' type='text' 
                defaultValue={sentence} 
                onChange={(e) => {
                    e.preventDefault()
                    handleFormValueChange(e.currentTarget.value)
                }}
                onMouseOverCapture={(e) => {
                    setSentence(e.currentTarget.value)
                }}
                placeholder="generate hashtags" 
                onSubmit={(e) => {
                    e.preventDefault()
                    }} 
                />
            case ("return") : return <h1 className='header-text'> #hashtags </h1>
        }
    }


    return ( <div className="Slide">
        <Body />
        <p>{hashtags}</p>
    </div> );
}

export default Slide;