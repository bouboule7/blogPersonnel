import clsx from "clsx";
import { Link } from "react-router-dom";



function NotFound() {
	 return (
     <div>
          <div className={
            clsx('relative z-10')} aria-labelledby="modal-title" role="dialog">
            <div className={clsx("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity")}></div>
            <div className={clsx("fixed inset-0 z-10 overflow-y-auto")}>
                <div className={clsx("flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0")}>
                <div className={clsx("relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg")}>
                    <div className={clsx("bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4")}>
                    <div className={clsx("sm:flex sm:items-start")}>
                        <div className= {clsx("mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10")}>
                        <svg className={clsx("h-6 w-6 text-red-600")} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        </div>
                        <div className={clsx("mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left")}>
                        <h3 className={clsx("text-xl font-semibold leading-6 text-gray-900")}>Page not found</h3>
                        <div className={clsx("mt-2")}>
                            <p className={clsx("text-m text-gray-500")}>
		                    La page que vous demander n'est pas disponible ou pourait etre en maintenance.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={clsx("bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6")}>
                    <Link to="/"  className={clsx("inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto")}>Retourner a la page d'accueil</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
	 </div>);
}

export default NotFound;