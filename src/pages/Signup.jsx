import bannerHero from "../assets/bannerHero.jpg";

const Signup = () => {
  return (
    <main className="grid  grid-rows-1 lg:grid-cols-2 w-full md:w-2/3  lg:w-full h-screen m-auto">
      <section className=" hidden lg:block max-h-screen  rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <div className="py-10 px-24 flex items-center justify-center w-full">
        <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full">
          <div className="font-monoton text-3xl hover:text-red-600 cursor-pointer text-center">
            eyesome
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold mb-3">Sign up</h1>

            <form action="" className="flex flex-col gap-3">
              <label className="flex flex-col">
                Username
                <input
                  type="text"
                  className="border rounded-md p-1.5 shadow-sm"
                />
              </label>
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

          <div className="w-full py-2  bg-black text-white flex flex-col gap-4 items-center">
            <button className="btn-rounded-secondary flex items-center gap-2 md:text-sm lg:text-base">
              Sign up
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
