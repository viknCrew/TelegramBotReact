import { useRouteError } from "react-router-dom";
import {errorType} from "../types/error";

export default function ErrorPage() {
    // @ts-ignore
    const error:errorType = useRouteError();



    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl">{error.status}</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {error.statusText}
                </p>

                <p className="mt-4 text-gray-500">We can't find that page.</p>

                <a
                    href="#"
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}