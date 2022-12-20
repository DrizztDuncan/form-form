export default function Form() {
  return (
    <section className=" flex flex-col justify-center items-center bg-secondary">
      <div
        className="flex flex-col items-center bg-sec-blue sm:w-[366px]  md:w-[720px]
        mt-20 mb-12 text-theme-blue rounded-form border-primary border-2 
        z-10 relative"
      >
        {/* topic */}
        <div
          className="absolute z-10 -top-5 left-[4.8rem] w-[123px] h-[43px] rounded-btn 
        border-primary border-2 bg-white text-center text-lg font-bold
          flex justify-center items-center tracking-[.2em] text-primary
          "
        >
          FORM
        </div>
        <img
          src="./turtle.svg"
          alt=""
          className=" z-10 absolute -top-8 left-40"
        />
        {/* form */}

        <div></div>
        <label className=" mt-[40px] mb-2 text-left sm:w-[326px] md:w-[680px] ">
          store <span className="text-primary">*</span>
        </label>
        <input className=" sm:w-80 md:w-11/12 h-14 rounded-form border border-theme-blue"></input>

        <label className=" mt-5 mb-2 text-left  sm:w-[326px] md:w-[680px]  ">
          name <span className="text-primary">*</span>
        </label>
        <input className=" sm:w-80 md:w-11/12 h-14 rounded-form border border-theme-blue"></input>

        <label className=" mt-5 mb-2 text-left  sm:w-[326px] md:w-[680px] ">
          phone <span className="text-primary">*</span>
        </label>
        <input className=" sm:w-80 md:w-11/12 h-14 rounded-form border border-theme-blue"></input>

        <label className=" mt-5 mb-2 text-left  sm:w-[326px] md:w-[680px] ">
          Amount of consumption <span className="text-primary">*</span>
        </label>
        <input className=" sm:w-80 md:w-11/12 h-14 rounded-form border border-theme-blue"></input>

        <label className=" mt-5 mb-2 text-left  sm:w-[326px] md:w-[680px] ">
          Payment <span className="text-primary">*</span>
        </label>
        <input className=" sm:w-80 md:w-11/12 h-14 mb-10 rounded-form border border-theme-blue"></input>
      </div>

      <button className="text-white font-bold bg-primary mb-14 w-[200px] h-14 mt-[32px] rounded-btn">
        <h3>submit</h3>
      </button>
    </section>
  );
}
