import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, PhotoUrl } = coffee;
      const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const PhotoUrl = form.PhotoUrl.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, PhotoUrl };
        console.log(updatedCoffee);

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                // this is not working - option 1
                if (data.modifiedCount) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                }

                //this is working - option 2       
                // if (data.modifiedCount) {
                //     toastr.success('User Added Successfully!', 'Success', {
                //         closeButton: true,
                //         progressBar: true,
                //         timeOut: 3000
                //     });
                // }

                //this is working - option 3
                // if (data.insertedId) {
                //     alert('User Added Successfully!');
                // }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24 m-8">
            <h2 className="text-center text-3xl font-bold mb-4">Update Coffee : {name}</h2>
            <p className="font-sm text-center mb-8">Coffee is a beverage brewed from roasted, ground coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content, but decaffeinated coffee is also commercially available. </p>
            <form onSubmit={handleUpdateCoffee}>
                {/* Form Row  Name & Quantity*/}
                <div className="md:flex gap-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Coffee Name</legend>
                            <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Coffee Name" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Available Quantity</legend>
                            <input type="text" name="quantity" defaultValue={quantity} className="input w-full" placeholder="Available Quantity" />
                        </fieldset>
                    </div>
                </div>
                {/* Form Row Supplier & Taste*/}
                <div className="md:flex gap-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Supplier</legend>
                            <input type="text" name="supplier" defaultValue={supplier} className="input w-full" placeholder="Supplier" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Taste</legend>
                            <input type="text" name="taste" defaultValue={taste} className="input w-full" placeholder="Taste" />
                        </fieldset>
                    </div>
                </div>
                {/* Form Row Category & Details */}
                <div className="md:flex gap-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category</legend>
                            <input type="text" name="category" defaultValue={category} className="input w-full" placeholder="Category" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Details</legend>
                            <input type="text" name="details" defaultValue={details} className="input w-full" placeholder="Details" />
                        </fieldset>
                    </div>
                </div>
                {/* Form Row Photo Url */}
                <div className="w-full">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo Url</legend>
                        <input type="text" name="PhotoUrl" defaultValue={PhotoUrl} className="input w-full" placeholder="Photo Url" />
                    </fieldset>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block mt-3.5 bg-black text-white" />
            </form>
        </div>
    );
};

export default UpdateCoffee;