import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword)
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);

    function handleImages(response) {
        setPhotos(response.data.photos);
    }
 
    function handleResponse(response) {
        setResults(response.data)
        const imagesApiKey = "a94b5f688aoee508a9b7fca6t23274ef"
        const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${imagesApiKey}`
        axios
            .get(imagesApiUrl, { headers: { Authorization: `Bearer ${imagesApiKey}` } })
            .then(handleImages);
    }

    function load() {
        setLoaded(true);
        search();
    }

    function search() {
        let apiKey = "a94b5f688aoee508a9b7fca6t23274ef"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }
   
   if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <form onSubmit={handleSubmit}>
                        <label>What word do you want to look up?</label>
                        <input type="search" onChange={handleKeywordChange} autoFocus={true} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        i.e. programming, software, coding
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading!"
    }
}
