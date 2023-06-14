import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart,refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = row =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${row._id}`,{
                method:'DELETE'
             })
             .then(res=> res.json())
             .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }
    return (
        <div>
            <Helmet>
                <title>Imagine Studio | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold flex gap-5">
                <h2 className="text-xl ">Total Classes Added:{cart.length}</h2>
                <h2 className="text-xl ">Total Classes Price:${total}</h2>
                <button className="btn btn-outline btn-success">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <td>
                                    {index + 1}

                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.picture} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                  {row.className}
                                   
                                    
                                </td>
                                <td className="text-end">${row.price}</td>
                                <td>
                                    <button onClick={()=> handleDelete(row)} className="btn btn-ghost btn-xs bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;