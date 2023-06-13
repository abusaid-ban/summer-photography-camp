import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AllClasses = ({allClass}) => {
    const {className,picture,seats,name,price,_id} = allClass;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
        const handleAddToCart = allClass =>{
        console.log(allClass);
        if(user && user.email){
            const classes = {classId: _id,name,picture,seats,price,className}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(classes)
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully on cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
              
            })
        }
        else{
            Swal.fire({
                title: 'Please Login Before add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{ state:{from:location}});
                }
              })
        }

    }
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="photo" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{className}</h2>
                    <h1 className="bg-green-600 text-white p-2 rounded-xl">Instructor Name:{name}</h1>
                    <p className=" p-2 rounded-xl"> Available Seat:{seats}</p>
                    <p className=" p-2 rounded-xl">Price:${price}</p>

                </div>
                <button onClick={()=>{handleAddToCart(allClass)}} className="btn btn-secondary border-0 w-50 mb-2 mx-auto">Add To Booked</button>
            </div>

        </div>
    );
};

export default AllClasses;
