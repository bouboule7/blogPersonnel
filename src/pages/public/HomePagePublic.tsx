import clsx from "clsx";
import { useLoaderData } from "react-router-dom";



function HomePage() {
	const data= useLoaderData();
	 return (<div className={clsx(
		'w-full h-full bg-blue-500'
	 )}>
		  HomePage public
	 </div>);
}

export default HomePage;