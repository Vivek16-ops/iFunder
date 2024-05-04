import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center  min-h-[40vh] gap-3 md:gap-5 p-2">
        <div className="heading flex flex-col md:flex-row items-center justify-center md:gap-2">
          <h1 className="text-lg md:text-4xl font-bold">Empowering Payments, Elite Projects.</h1>
          <lord-icon className="md:h-[40px] md:w-[40px] h-[20px] w-[20px]"
            src="https://cdn.lordicon.com/xljvqlng.json"
            trigger="loop"
            delay="1000"
            colors="primary:#30e8bd">
          </lord-icon>
        </div>
        <div className="text-center px-2">
          <p className="fond-bold text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur!</p>
        </div>
        <div className="buttons">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      {/* Creating Small Seperating Line  */}
      <div className="w-[100%] bg-white opacity-40 h-[1px] my-2"></div>

      <div>
        <div className="flex pt-3 items-center justify-center">
          <h2 className="font-bold md:text-2xl text-lg">Buy For Your Friends</h2>
          <lord-icon className='md:h-[40px] md:w-[40px] h-[20px] w-[20px]'
            src="https://cdn.lordicon.com/ulnswmkk.json"
            trigger="loop"
            delay="1000"
            colors="primary:#e8308c">
          </lord-icon>
        </div>

        <div className="px-3 py-5 flex items-center justify-around md:flex-row flex-col">
          <div className="items flex flex-col items-center justify-center md:w-[33%] w-[100%] py-4 md:py-0">
            <lord-icon
              src="https://cdn.lordicon.com/gjjvytyq.json"
              trigger="loop"
              delay="1500"
              colors="primary:#16c79e"
              style={{ width: '83px', height: '88px' }}>
            </lord-icon>
            <h2 className="font-bold text-lg">Low Cost</h2>
            <p className="font-bold">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, </p>
          </div>

          <div className="items flex flex-col items-center justify-center md:w-[33%] w-[100%] py-4 md:py-0">
            <lord-icon
              src="https://cdn.lordicon.com/kgdqzapd.json"
              trigger="loop"
              delay="1500"
              colors="primary:#16c79e"
              style={{ width: '83px', height: '88px' }}>
            </lord-icon>
            <h2 className="font-bold text-lg">Low Cost</h2>
            <p className="font-bold">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consem..</p>
          </div>

          <div className="items flex flex-col items-center justify-center md:w-[33%] w-[100%] py-4 md:py-0">
            <lord-icon
              src="https://cdn.lordicon.com/eodeknny.json"
              trigger="loop"
              delay="1500"
              colors="primary:#16c79e"
              style={{ width: '83px', height: '88px' }}>
            </lord-icon>
            <h2 className="font-bold text-lg">Low Cost</h2>
            <p className="font-bold">Lorem ipsum drferendis illum. lorem50.</p>
          </div>
        </div>
      </div>

      {/* Creating Small Seperating Line  */}
      <div className="w-[100%] bg-white opacity-40 h-[1px] my-2"></div>

      <div>
        <div className="flex pt-3 items-center justify-center gap-1">
          <h2 className="font-bold md:text-2xl text-lg">Some More Porjects Like This</h2>
          <lord-icon className='md:h-[40px] md:w-[40px] h-[20px] w-[20px]'
            src="https://cdn.lordicon.com/jnikqyih.json"
            trigger="loop"
            delay="1000"
            colors="primary:#16a9c7">
          </lord-icon>
        </div>

        <div className="px-3 py-5 flex items-center justify-around md:flex-row flex-col">

          <div className="items flex justify-center items-center md:w-[33%] w-[100%] py-4 md:py-0">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/ykmeh-NRDIc?si=HALSlVhosRWTBKP_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          
          <div className="items flex justify-center items-center md:w-[33%] w-[100%] py-4 md:py-0">
          <iframe width="400" height="300" src="https://www.youtube.com/embed/DmODW48bdkI?si=VUAEBxKhTqIUa9v-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          
          <div className="items flex justify-center items-center md:w-[33%] w-[100%] py-4 md:py-0">
          <iframe width="400" height="300" src="https://www.youtube.com/embed/OZkYROjFTzI?si=NlIR9uHpO2FAfhTG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

        </div>
      </div>

      <Script src="https://cdn.lordicon.com/lordicon.js" />
    </>
  );
}
