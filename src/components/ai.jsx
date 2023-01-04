import React from "react";
import logo from "../images/logo.svg";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai"

// const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default function Ai() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const summary = async (e)=>{
    e.preventDefault();
    console.log(input);
    const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: input,
          temperature: 0.3,
          max_tokens: 200,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
        console.log(response);
        const text = response.data.choices[0].text.replace("\n\n","");
        setData(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={summary} className="form">
          <input type="text" placeholder="enter text" className="input_box" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button type="submit" className="App-link">
            <h2 className="but_text">Magic</h2>
          </button>
        </form>
        <div className="container"><p className="newLine">{data}</p></div>
      </header>
    </div>
  );
}
