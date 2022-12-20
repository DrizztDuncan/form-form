export default function Landing() {
  return (
    <main className="bg-theme-blue flex flex-col justify-center items-center">
      <div className=" sm:w-[328px] mt-[60px]  m-auto">
        <h1 className=" text-white leading-10	">There is no one</h1>
        <h2 className="text-white text-center font-bold leading-10 tracking-[.2em]">
          who loves pain
        </h2>
      </div>

      <button className=" text-white bg-primary w-[200px] h-14 mt-[32px] rounded-btn drop-shadow-btn z-10">
        <h3 className=" tracking-[.2em]">FORM</h3>
      </button>

      {/* wave */}
      <img className="absolute top-40" src="./curve-1.svg" />
      <img className="absolute top-[18rem]" src="./curve-2.svg" />
      <img className="absolute top-[43rem]" src="./curve-3.svg" />

      <article
        className="
      flex flex-col items-center bg-sec-blue sm:w-[366px] md:w-[720px] sm:h-[489px] md:h-[350px] 
      mt-[32px] mb-12 text-theme-blue rounded-form border-primary border-2 z-10 relative
      "
      >
        {/* ship */}
        <img className="absolute -top-6 -right-4" src="./ship-1.svg" />
        <img className="absolute -top-4 -right-4" src="./paddle.svg" alt="" />
        <img className="absolute -bottom-10 left-2" src="./ship-2.svg" />

        <div className="flex mt-[32.5px]">
          <img src="./cactus.svg" />
          <h2 className="font-bold">paragraph</h2>
          <img src="./cactus.svg" />
        </div>
        <ul
          className=" list-decimal sm:w-[300px] md:w-[688px] list-outside mt-[24.5px] 
        mx-4 text-base font-normal"
        >
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>

        <div className="flex mt-[32.5px]">
          <img src="./cactus.svg" />
          <h2 className="font-bold">paragraph</h2>
          <img src="./cactus.svg" />
        </div>
        <ul
          className="mt-[24.5px]  sm:w-[300px] md:w-[688px] text-base font-normal 
        box-border	list-decimal list-outside"
        >
          <li>
            Quisque sodales leo&nbsp;
            <span className="underline underline-offset-1 font-bold">
              vitae vulputate auctor.
            </span>
          </li>

          <li>
            Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a
            pellentesque blandit.
          </li>
          <li>
            Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
          </li>
          <li>
            Donec ultrices sapien&nbsp;
            <span className="font-bold">vitae leo venenatis ullamcorper.</span>
          </li>
        </ul>
      </article>

      {/* wave anime */}
      <div className=" overflow-hidden  w-screen">
        <div className="w-auto flex  animate-wave">
          <img className=" max-w-none " src="./wave.svg" alt="" />
          <img className=" max-w-none " src="./wave.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
