export default function Foot() {
  return (
    <div className="relative">
      <div className=" absolute bg-secondary  -z-20 h-10 w-full top-0"></div>
      <div className="pt-10 bg-theme-blue rounded-t-btn flex flex-col justify-center items-center">
        <p className="text-xl text-white tracking-[.2em] mt-10 ">
          Neque porro quisquam
          <br />
          est qui dolorem!
        </p>
        <img src="./store.svg" className=" mt-6 mb-10 " />
      </div>
    </div>
  );
}
