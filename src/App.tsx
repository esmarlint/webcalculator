import "./App.css";

function App() {
  return (
    <>
      <main className='bg-red-500 w-[340px] mx-auto mt-14 rounded-xl overflow-hidden shadow-lg'>
        <div className='text-white bg-secondary p-5 flex justify-end'>
          100+200-10
        </div>

        <div className='text-white bg-secondary p-5 flex justify-between'>
          <h1 className='text-3xl font-semibold'>=</h1>
          <h1 className='text-3xl font-semibold'>310</h1>
        </div>

        <div className='bg-white p-5 h-[400px] grid grid-cols-4 '>
          {["%", "C", "←", "÷"].map((element) => (
            <button
              key={element}
              className='text-secondary bg-primary rounded-full text-[16px] font-semibold m-3 hover:bg-blue-500 transition-all active:ring-4'
            >
              {element}
            </button>
          ))}

          {Array.from({ length: 15 }, (_, index) => (
            <button
              key={index}
              className='text-secondary bg-[#edf9ff] rounded-full  text-[16px] font-semibold m-3 hover:bg-blue-500 transition-all active:ring-4'
            >
              {index}
            </button>
          ))}

          <button className='text-white text-[16px] font-semibold rounded-full m-3 bg-secondary hover:bg-blue-500 transition-all active:ring-4'>
            =
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
