function App() {
  return (
    <>
      <div className="flex flex-wrap h-screen">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                Meme Paper
              </a>
            </div>
          </nav>
          <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
            <div className="max-w-100 mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-70 "></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-2">
                    <p className="text-slate-800">
                      Learn how to make a glowing gradient background!
                    </p>
                    <a className="block text-indigo-400 group-hover:text-slate-800 transition duration-200">
                      Get Quote →
                    </a>
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
