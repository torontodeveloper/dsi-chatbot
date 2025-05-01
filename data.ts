import chatgpt from './public/chatgpt.png'
import llama from './public/llama.jpeg'
import gemini from './public/gemini.jpg'
export const CORE_MODELS = [
    {
      image: chatgpt,
      title: 'gptTurbo',
      description:
      "GPT-3.5 Turbo models can understand and generate natural language or code and have been optimized for chat using the Chat Completions API but work well for non-chat tasks as well. As of July 2024, use gpt-4o-mini in place of GPT-3.5 Turbo, as it is cheaper, more capable, multimodal, and just as fast. GPT-3.5 Turbo is still available for use in the API.",
    },
    {
      image: llama,
      title: 'llama3',
      description:
      "The open-source AI models you can fine-tune, distill and deploy anywhere. Choose from our collection of models: Llama 3.1, Llama 3.2, Llama 3.3.",
  },
    {
      image: gemini,
      title: 'gemini',
      description:
      "Gemini 2.5 models are capable of reasoning through their thoughts before responding, resulting in enhanced performance and improved accuracy.",
  },
   
  ];
  
  export const EXAMPLES = {
    gptTurbo: {
      title: 'GPT-3.5Turbo',
      description:
        'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    llama3: {
      title: 'Llama3',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    gemini: {
      title: 'Gemini',
      description:
        'Components accept arbitrary inputs called props. They are like function arguments.',
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
  };