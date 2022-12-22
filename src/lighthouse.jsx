export default function LightHouse() {
  return (
    <section className=" bg-secondary flex justify-center ">
      <div className="text-center  mt-10 ">
        <div
          className="line-line relative before:content-[''] before:block before:bg-theme-blue 
        before:w-[1px] before:h-full before:absolute before:left-[-16px] before:rotate-[-20deg]
        after:block after:bg-theme-blue after:w-[1px] after:h-full after:absolute after:right-[-20px] 
        after:top-[-2px] after:rotate-[18deg]"
        >
          <p className=" text-primary font-bold ">13.32</p>
          <p className=" text-theme-blue font-bold ">
            who seeks after it and <br /> wants to have it
          </p>
        </div>
        <img src="./lighthouse.svg" alt="" className="mx-auto my-8" />
      </div>
    </section>
  );
}
