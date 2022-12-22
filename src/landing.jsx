export default function Landing() {
  return (
    <main className="bg-theme-blue flex flex-col justify-center items-center">
      <div className=" w-[328px] mt-[60px]  m-auto">
        <h1 className=" text-white leading-10	">There is no one</h1>
        <h2 className="text-white text-center font-bold leading-10 tracking-[.2em]">
          who loves pain
        </h2>
      </div>

      <button className=" text-white bg-primary w-[200px] h-14 mt-[32px] rounded-btn drop-shadow-btn z-10">
        <h3 className=" tracking-[.2em]">FORM</h3>
      </button>

      {/* wave */}
      <img className="absolute top-40 overflow-hidden " src="./curve-1.svg" />
      <img
        className="absolute top-[18rem] overflow-hidden "
        src="./curve-2.svg"
      />
      <img
        className="absolute top-[43rem] md:top-[32rem] overflow-hidden "
        src="./curve-3.svg"
      />

      <article
        className="
      flex flex-col items-center bg-sec-blue w-4/5 md:w-2/3 lg:w-1/2 h-full
      mt-[32px] mb-12 text-theme-blue rounded-form border-primary border-2 z-10 relative"
      >
        {/* ship */}
        <img className="absolute -top-6 -right-4" src="./ship-1.svg" />
        <img
          className="absolute -top-4 -right-4 animate-paddle"
          src="./paddle.svg"
          alt=""
        />
        <img className="absolute -bottom-10 left-2" src="./ship-2.svg" />
        <img
          src="./firework.svg"
          alt=""
          className="absolute -bottom-10 -left-4 animate-firework "
        />

        <div className="flex mt-[32.5px]">
          <img src="./cactus.svg" />
          <h2 className="font-bold">paragraph</h2>
          <img src="./cactus.svg" />
        </div>
        <ul
          className=" list-decimal w-4/5 md:w-5/6 list-outside mt-[24.5px] 
          mx-8 text-base font-normal "
        >
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>

        <div className="flex mt-[32.5px]">
          <img src="./cactus.svg" />
          <h2 className="font-bold">paragraph</h2>
          <img src="./cactus.svg" />
        </div>
        <ul
          className=" list-decimal w-4/5 md:w-5/6 list-outside mt-[24.5px] 
          mx-8 pb-10 text-base font-normal "
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
      <div className=" overflow-hidden  w-screen mt-5">
        <div className="w-auto flex  animate-wave">
          <img className=" max-w-none " src="./wave.svg" alt="" />
          <img className=" max-w-none " src="./wave.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
