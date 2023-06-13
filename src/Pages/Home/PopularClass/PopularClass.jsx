import { useEffect, useState } from "react";
import AllPopularClasses from "./AllPopularClasses";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div className="my-24">
            <h2 className="text-3xl text-center"><span className="p-2 rounded-xl bg-sky-600">popular </span> Classes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    classes.map(allClass => <AllPopularClasses
                        key={allClass.id}
                        allClass={allClass}>

                    </AllPopularClasses>)
                }

            </div>

        </div>
    );
};

export default PopularClass;