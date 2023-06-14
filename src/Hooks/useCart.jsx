import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useCart = () => {
    const {user}=useContext(AuthContext);
    const { refetch, data:cart = [] } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn:  async () =>{
            const response = await fetch(`https://summer-photography-camp-server-eight.vercel.app/carts?email=${user.email}`)
            return response.json();
          },
      })
      return [cart,refetch];
       
};

export default useCart;