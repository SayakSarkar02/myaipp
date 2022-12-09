require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "post request kayse kare",
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

    console.log(response.data.choices[0].text);
})();