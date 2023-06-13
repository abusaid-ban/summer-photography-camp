import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AllClasses from "./AllClasses";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    console.log(classes);

    return (
        <div>
            <Helmet>
                <title>Imagine Studio | Classes</title>
            </Helmet>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    classes.map(allClass => <AllClasses
                        key={allClass.id}
                        allClass={allClass}>

                    </AllClasses>)
                }

            </div>

        </div>
    );
};

export default Classes;