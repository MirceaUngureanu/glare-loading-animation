import Head from 'next/head'
import {useState, useEffect} from 'react';

export default function Home() {
  const [loadingState, updateLoadingState] = useState(true);
  const [contentState, updateContentState] = useState({
    header: 'Loading',
    intro: 'Loading',
    list: [
      'Loading',
      'Loading',
      'Loading'
    ]
  });

  const content = {
    header: `Sorry, checking all the water in this area; there's an escaped fish.`,
    intro: `Sorry, checking all the water in this area; there's an escaped fish. You know how I sometimes have really brilliant ideas? It's a fez. I wear a fez now. Fezes are cool. I am the Doctor, and you are the Daleks!`,
    list: [
      `Yes! In your face, Gandhi!`,
      `So I really am important? How I feel when I'm drunk is correct?`,
      `Who are those horrible orange men?`
    ]
  };

  useEffect(() => {
    setTimeout(() => {
      updateContentState(content);
      updateLoadingState(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={loadingState ? 'loading' : ''}>
        <h1>{contentState.header}</h1>
        <p>{contentState.intro}</p>
        <ul>
          {Array.isArray(contentState.list) && contentState.list.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })}
        </ul>
      </main>

      <footer>

      </footer>

      <style jsx>{`
        .loading h1,
        .loading p,
        .loading li {
          color: transparent;
          background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
          background-size: 400%;
          animation: loading 1.2s ease-in-out infinite;
        }

        @keyframes loading {
          0% {
            background-position: 100% 50%;
          }
            100% {
            background-position: 0 50%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
