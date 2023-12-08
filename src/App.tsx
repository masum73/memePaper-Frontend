/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState<any>(null);
  useEffect(() => {
    getRandomQuote();
  }, []);
  const getRandomQuote = () => {
    fetch("http://localhost:5000/api/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data[0]);
        setQuote(data.data[0]);
      });
  };
  return (
    <>
      <div className="flex flex-wrap h-screen">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen absolute z-10">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Meme Paper
              </a>
            </div>
          </nav>
          <div className="h-screen w-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <div className="max-w-100 mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-70 "></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-2">
                    <p className="text-slate-800">
                      {quote?.quote} - {quote?.quoteBy}
                    </p>
                    <blockquote
                      onClick={getRandomQuote}
                      className=" cursor-pointer block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                    >
                      Get Quote →
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
