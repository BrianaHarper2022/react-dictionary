import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {

    if (props.results) {
        return (
          <div className="Results">
            <section>
              <h2>{props.results.word}</h2>
              <p>/{props.results.phonetic}/</p>
            </section>

            {props.results.meanings.map(function (meanings, index) {
                return (
                <div key={index}>
                    <Meaning meaning={meanings} />
                </div>
                );
            })}
          </div>
        );
      } else {
        return null;
      }
}