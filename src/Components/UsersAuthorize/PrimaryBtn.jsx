/* eslint-disable react/prop-types */
const PrimaryBtn = ({ text }) => {
  return (
    <div className="p-3 ">
      <button
        data-ripple-light="true"
        type="submit"
        className="block mt-3 w-full select-none rounded-lg bg-gradient-to-tr from-cyan-800 to-cyan-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;
