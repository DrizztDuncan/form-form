import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col justify-center items-center bg-secondary"
    >
      {/* form wrapper */}
      <div
        className="flex flex-col items-center bg-sec-blue w-4/5  md:w-2/3 lg:w-1/2
        mt-20 mb-12 text-theme-blue rounded-form border-primary border-2 
        z-10 relative"
      >
        {/* topic */}
        <div
          className="absolute z-10 -top-5 left-16 sm:left-40 lg:left-60 w-[123px] h-[43px] 
           rounded-btn 
        border-primary border-2 bg-white text-center text-lg font-bold
          flex justify-center items-center tracking-[.2em] text-primary
          "
        >
          FORM
        </div>
        <img
          src="./turtle.svg"
          alt=""
          className=" z-10 absolute -top-8  left-36 sm:left-[15rem] lg:left-80"
        />
        {/* form */}

        <label className=" mt-[40px] mb-2 text-left w-4/5 md:w-11/12 ">
          store <span className="text-primary">*</span>
        </label>
        <input className=" w-4/5 md:w-11/12 h-14 rounded-form border border-theme-blue"></input>

        <label className=" mt-5 mb-2 text-left w-4/5 md:w-11/12 ">
          name <span className="text-primary">*</span>
        </label>
        <input
          {...register("name", {
            required: true,
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 10 },
            pattern: "^[\u4e00-\u9fa5]+$|^[a-zA-Zs]+$",
          })}
          placeholder="Name"
          type="text"
          className=" w-4/5 md:w-11/12 h-14 rounded-form border border-theme-blue  px-4 "
        ></input>

        <label className=" mt-5 mb-2 text-left w-4/5 md:w-11/12 ">
          phone <span className="text-primary">*</span>
        </label>
        <input
          {...register("phone", {
            required: true,
            maxLength: 20,
            minLength: 10,
            pattern: "09d{2}-?d{3}-?d{3}",
          })}
          placeholder=" Phone Number "
          type="tel"
          className=" w-4/5 md:w-11/12 h-14 rounded-form border border-theme-blue  px-4 "
        ></input>

        <label className=" mt-5 mb-2 text-left w-4/5  md:w-11/12 ">
          Amount of consumption <span className="text-primary">*</span>
        </label>
        <input
          {...register("amounts", {
            required: true,
            maxLength: 2,
            minLength: 1,
            pattern: "/(^d{1,9}$)/g",
          })}
          placeholder=" 20 "
          type="number"
          className=" w-4/5 md:w-11/12 h-14 rounded-form border border-theme-blue  px-4"
        ></input>

        <label className=" mt-5 mb-2 text-left w-4/5  md:w-11/12 ">
          Payment <span className="text-primary">*</span>
        </label>
        <input className=" w-4/5 md:w-11/12 h-14 mb-10 rounded-form border border-theme-blue px-4"></input>
      </div>

      <button
        type="submit"
        className="text-white font-bold bg-primary w-[200px] h-14 mt-[32px] rounded-btn"
      >
        <h3>submit</h3>
      </button>
      <div className=" mt-6 mb-14 text-rose-400 ">
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <p>*please enter CN/ENG letters between 3 - 10</p>
          )}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>*please enter your phone number</p>}
        />
        <ErrorMessage
          errors={errors}
          name="amounts"
          render={({ message }) => <p>*number between 1 - 100</p>}
        />
      </div>
    </form>
  );
}
