const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>

      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI GPT-4</span>
      </h1>
      <h2 className=' mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};


export default Hero