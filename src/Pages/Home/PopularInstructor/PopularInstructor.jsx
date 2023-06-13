import Instructors from "../../Instructors/Instructors/Instructors";


const PopularInstructor = () => {
    return (
        <div  className="mb-24">
            <h2 className="text-5xl text-center"><span className="p-2 rounded-xl bg-sky-600">popular </span> Instructor</h2>
            <Instructors></Instructors>
        </div>
    );
};

export default PopularInstructor;