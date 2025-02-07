import { Link, useRouteError } from "react-router-dom"

type ErrorType = {
    status: number;
    statusText: string;
}

const ErrorPage = () => {
    const error = useRouteError() as ErrorType;
  return (
    <div id="error-page" className="md:text-xl text-lg flex flex-col items-center justify-center gap-10 h-screen w-screen bg-firstPageBodyColor text-gray-400">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} - {error.statusText}</i>
      </p>
      <button className="text-white px-4 py-3 bg-blue-400 rounded-lg">
        <Link to={'/'}>Ana Menuye Dön</Link>
      </button>
    </div>
  )
}

export default ErrorPage