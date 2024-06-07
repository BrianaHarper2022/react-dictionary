import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")

    function handleResponse(response) {
        console.log(response.data);
    }

    function search(event) {
        event.preventDefault();
        

        let apiKey = "a94b5f688aoee508a9b7fca6t23274ef"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`

        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} />
            </form>
        </div>
    )
}