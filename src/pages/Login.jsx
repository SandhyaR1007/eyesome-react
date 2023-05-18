import bannerHero from "../assets/bannerHero.jpg";
import { Logo } from "../components";

const Login = () => {
  return (
    <main className="grid  grid-rows-1 lg:grid-cols-2 w-full  h-screen m-auto">
      <section className=" hidden lg:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
          <Logo />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-3 text-center">
              Login to your account
            </h1>

            <form action="" className="flex flex-col gap-3">
              <label className="flex flex-col">
                Email
                <input
                  type="email"
                  className="border rounded-md p-1.5 shadow-sm"
                />
              </label>
              <label className="flex flex-col">
                Password
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                />
              </label>
            </form>
          </div>

          <div className="w-full py-2   flex flex-col gap-4 items-center ">
            <button className="btn-primary w-2/3 text-lg text-center">
              Login
            </button>
            <button className="btn-secondary w-2/3 text-sm md:text-base text-center">
              Login with Test Credentials
            </button>
            <p className="underline text-gray-600">Create New Account</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
