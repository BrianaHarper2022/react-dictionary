import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword)
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
 

    function handleResponse(response) {
        setResults(response.data)
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
    function load() {
        setLoaded(true);
        search();
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
            </div>
        );
    } else {
        load();
        return "Loading!"
    }
}
