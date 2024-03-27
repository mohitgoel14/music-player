import SignUp from "@/components/SignUp";

export default function () {
  return (
    <body className="bg-gradient-to-r from-emerald-200 to-emerald-100">
      <div className="overflow-y-hidden">
        <p className="p-4 bg-gradient-to-r from-emerald-600 to-emerald-400 text-center text-green-50 font-medium text-2xl">
          Welcome to the World of Music!!
        </p>
        <SignUp />
      </div>
    </body>
  );
}
