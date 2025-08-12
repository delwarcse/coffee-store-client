import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, PhotoUrl } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining= coffees.filter(cof=>cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div className="my-2 card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={PhotoUrl}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full p-5">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Category: {category}</p>
                </div>
                <div className="card-actions">

                    <div className="join join-vertical">
                        <button className="bg-blue-700 text-white font-semibold btn join-item">View</button>
                       <Link to={`updatecoffee/${_id}`}>
                        <button className="bg-green-700 w-full text-white font-semibold btn join-item">Edit</button>
                       </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="bg-red-700 text-white font-bold btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;