import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!!!</h2>
            <button className="bg-black p-2 text-lg font-bold text-white rounded-lg text-center items-center justify-center"><Link to="/">Go Back To Home page</Link></button>
        </div>
    );
};

export default ErrorPage;