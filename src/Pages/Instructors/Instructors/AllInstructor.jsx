const AllInstructor = ({instructor}) => {
    const {name,email,image} = instructor;
    console.log(image)
   
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="photo" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default AllInstructor;