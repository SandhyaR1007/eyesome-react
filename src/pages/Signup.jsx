import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import bannerHero from "../assets/bannerHero.jpg";
import { Logo } from "../components";
import { useAuthContext } from "../contexts";
import { useEffect, useState } from "react";

const Signup = () => {
  const { signupHandler, signingUp, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let id;
    if (isAuthenticated) {
      id = setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userDetails });
    signupHandler(userDetails);
  };

  const isDisabled =
    signingUp ||
    !userDetails.username ||
    !userDetails.email ||
    !userDetails.password;
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

            <form
              action=""
              className="flex flex-col gap-5 py-5"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                <input
                  type="text"
                  className="border rounded-md p-1.5 shadow-sm"
                  placeholder="Username"
                  value={userDetails.username}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col">
                <input
                  type="email"
                  className="border rounded-md p-1.5 shadow-sm"
                  placeholder="Email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </label>
              <label className="flex flex-col">
                <input
                  type="password"
                  className="border rounded-md p-1.5 shadow-sm"
                  placeholder="Password"
                  value={userDetails.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
              </label>
              <div className="w-full py-2   flex flex-col gap-4 items-center">
                <button
                  type="submit"
                  className="btn-primary w-2/3 text-lg text-center"
                  disabled={isDisabled}
                >
                  {signingUp ? "Signing up..." : "Create Account"}
                </button>
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="underline text-base
            "
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
