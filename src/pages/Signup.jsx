import bannerHero from "../assets/bannerHero.jpg";
import { Logo } from "../components";

const Signup = () => {
  return (
    <main className="grid  grid-rows-1 md:grid-cols-2 w-full  h-screen m-auto ">
      <section className=" hidden md:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-10 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
          <Logo />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl font-bold mb-3">Sign up</h1>

            <form action="" className="flex flex-col gap-5 py-5">
              <label className="flex flex-col">
                <input
                  type="text"
                  className="border rounded-md p-1.5 shadow-sm"
                  placeholder="Username"
                />
              </label>
              <label className="flex flex-col">
                <input
                  type="email"
                  className="border rounded-md p-1.5 shadow-sm"
                  placeholder="Email"
                />
              </label>
              <label className="flex flex-col">
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                  placeholder="Password"
                />
              </label>
            </form>
          </div>

          <div className="w-full py-2   flex flex-col gap-4 items-center">
            <button className="btn-primary w-2/3 text-lg text-center">
              Create Account
            </button>
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <span
                className="underline text-base
            "
              >
                Login
              </span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
