import clsx from "clsx";
import { Link } from "react-router-dom";



function LoginPage() {

	 return (
     <div className={clsx("flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8")}>
        <div className={clsx("w-full max-w-md space-y-8")}>
            <div>
                <img
                className={clsx("mx-auto h-20 w-auto")}
                src="https://cdn-icons-png.flaticon.com/512/2125/2125457.png"
                alt="Your Company"
                />
                <h2 className={clsx("mt-6 text-center text-3xl font-bold tracking-tight text-gray-900")}>
                Sing in to personal blog
                </h2>
                <p className={clsx("mt-2 text-center text-sm text-gray-600")}>
                Ou{' '}
                    <Link to="/register" className={clsx("font-medium text-indigo-600 hover:text-indigo-500")}>
                        se creer une nouvelle compte
                    </Link>
                </p>
            </div>
            <form className={clsx("mt-8 space-y-6")} action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className={clsx("-space-y-px rounded-md shadow-sm")}>
                    <div>
                        <label htmlFor="email-address" className={clsx("sr-only")}>
                        Adress Email
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className={clsx("relative block w-full p-3 rounded-t-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6")}
                        placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className={clsx("sr-only")}>
                        Password
                        </label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className={clsx("relative block w-full p-3 rounded-b-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6")}
                        placeholder="Password"
                        />
                    </div>
                </div>
                <div className={clsx("flex items-center justify-between")}>
                    <div className={clsx("flex items-center")}>
                        <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className={clsx("h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600")}
                        />
                        <label htmlFor="remember-me" className={clsx("ml-2 block text-sm text-gray-900")}>
                        Se souvenir de moi
                        </label>
                    </div>
                    <div className={clsx("text-sm")}>
                        <Link to="#" className={clsx("font-medium text-indigo-600 hover:text-indigo-500")}>
                        Mot de passe oublier?
                        </Link>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className={clsx("group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")}
                    >
                        <span className={clsx("absolute inset-y-0 left-0 flex items-center pl-3")}>
                        {/* <LockClosedIcon className={clsx("h-5 w-5 text-indigo-500 group-hover:text-indigo-400")} aria-hidden="true" /> */}
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>)
}

export default LoginPage;