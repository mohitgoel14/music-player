export default function signUp() {
  return (
    <div className="w-96 py-10 flex flex-col  justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto my-32">
      <p className="text-2xl underline pb-4 text-center font-medium">
        SignIn To Enter
      </p>
      <p className="text-xl text-center font-medium">
        Enter your Email Address:
      </p>
      <input
        className="px-2 py-1 text-center text-black text-lg mx-8 font-medium mb-4 rounded-md"
        type="text"
        placeholder="xyz@gmail.com"
      />
      <p className="pl-1 text-center text-xl font-medium">
        Enter your Password:
      </p>
      <input
        className="px-2  py-1  text-black text-center text-lg mx-8 font-medium mb-8 rounded-md"
        type="text"
        placeholder="*********"
      />
      <button className="py-2 cursor-pointer px-10 text-xl font-medium mx-14 mb-2 rounded-md bg-white text-emerald-600 active:bg-white active:text-black hover:bg-gray-900 hover:text-white">
        Login
      </button>
      <p className="text-center underline">T&C Apply</p>
    </div>
  );
}
