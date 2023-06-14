import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AllInstructor from "./allInstructor";

const Instructors = () => {
    const [instructors,setInstructors] = useState([]);
    useEffect(()=>{
        fetch('https://summer-photography-camp-server-eight.vercel.app/instructors')
        .then(res=> res.json())
        .then(data => setInstructors(data));
    },[])

   
    return (
        <div>
            <Helmet>
                <title>Imagine Studio | Instructors</title>
            </Helmet>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {
            instructors.map(instructor => <AllInstructor
                 key={instructor.roll }
                 instructor={instructor}></AllInstructor>)
           }
            
          </div>
        </div>
    );
};

export default Instructors;