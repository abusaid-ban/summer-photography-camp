import { Link, useRouteError } from "react-router-dom";
import image from '../src/assets/404.png'


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center">
      <h1>Oops!</h1>
      <p>Sorry, there is no page with this path name.</p>
      <Link to='/'>
      <button className="btn  btn-warning mt-5">Back To Home</button>

      </Link>
     <div>
     <img  className="w-50 mx-auto mt-5" src={image} alt="" />
      
     </div>
    </div>
  );
}