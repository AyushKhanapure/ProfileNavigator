import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topnav from "./Topnav";

export default function Login() {
  return (
    <>
      <Topnav />
      <div className="relative isolate overflow-hidden bg-white ">
        <div
          style={{
            height: "100vh",
          }}
        >
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 -mt-16 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-black">
                Admin
              </h2>
              <h2 className="text-center text-2xl  leading-9 tracking-tight text-black">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-black">
                    Email Address
                  </label>
                  <div className="mt-2 flex flex-row z-9">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="pl-3 mt-2.5 absolute z-10"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-black"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2 flex flex-row z-9">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full pl-10 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <FontAwesomeIcon
                      icon={faLock}
                      className="pl-3 mt-2.5 absolute z-10"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
