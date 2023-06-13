import Instructors from "../../Instructors/Instructors/Instructors";


const PopularInstructor = () => {
    return (
        <div  className="mb-24">
            <h2 className="text-3xl text-center  bg-green-200 p-2"><span className="p-1 rounded-xl bg-sky-600">popular </span> Instructors</h2>
            <Instructors></Instructors>
        </div>
    );
};

export default PopularInstructor;