import React, { useEffect } from 'react'
import memesData from "../memesData.js"

export default function Meme() {
    
// reneders meme component
    
    const [meme, setMeme] = React.useState({
        // form state variable
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemes, setAllMemes] = React.useState({});
    React.useEffect(() => {
        // calling api and saving in state variable
        const apiCaller = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data);
        }
        apiCaller();
        return () => {
            // clean-up function
        }
    }, [])

    const handleChange = (e) => {
        // to handle state change in top-text and bottom-text input box
        const { name, value } = e.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    const urlgenerator = () => {
        // to gather a image url and change url state variable to newly generated url
        let ranNum = Math.floor(Math.random() * allMemes.data.memes.length + 1);
        let url = allMemes.data.memes[ranNum].url;
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
            }
        })
    }
    
    return (
        <main>
            <form className='form' action="">
                <span className='input-boxes'>
                    <span>
                        <label >Top Text
                            <input
                                type="text"
                                placeholder='Enter top text.'
                                name='topText'
                                onChange={handleChange}
                                value={meme.topText}
                            />
                        </label>
                    </span>
                    <span>
                        <label >Bottom Text
                            <input
                                type="text"
                                placeholder='Enter bottom text.'
                                name='bottomText'
                                onChange={handleChange}
                                value={meme.bottomText}
                            />
                        </label>
                    </span>
                </span>
                <button className='submit-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        urlgenerator();
                    }}
                >Get a new meme image 🖼</button>

            </form>
            <div className="meme">
                <img className='meme--image' src={meme.randomImage} alt="Meme Image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>

    )
}
