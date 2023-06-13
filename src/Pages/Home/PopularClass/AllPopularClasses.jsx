
const AllPopularClasses = ({allClass}) => {
    const {className,picture,seats,students} = allClass;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="photo" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{className}</h2>
                    <p className="bg-orange-300 p-2 rounded-xl"> Available Seat:{seats}</p>
                    <p className="bg-sky-400 p-2 rounded-xl">Total Students:{students}</p>

                </div>
            </div>

        </div>
    );
};

export default AllPopularClasses;
