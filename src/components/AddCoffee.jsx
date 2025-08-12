import Swal from 'sweetalert2';
// import toastr from 'toastr';
// import 'toastr/build/toastr.min.css';
const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const PhotoUrl = form.PhotoUrl.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, PhotoUrl };
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
                // this is not working - option 1
                if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                }

                //this is working - option 2       
                // if (data.insertedId) {
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
            <h2 className="text-center text-3xl font-bold mb-4">Add A Coffee</h2>
            <p className="font-sm text-center mb-8">Coffee is a beverage brewed from roasted, ground coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content, but decaffeinated coffee is also commercially available. </p>
            <form onSubmit={handleAddCoffee}>
                {/* Form Row  Name & Quantity*/}
                <div className="md:flex gap-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Coffee Name</legend>
                            <input type="text" name="name" className="input w-full" placeholder="Coffee Name" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Available Quantity</legend>
                            <input type="text" name="quantity" className="input w-full" placeholder="Available Quantity" />
                        </fieldset>
                    </div>
                </div>
                {/* Form Row Supplier & Taste*/}
                <div className="md:flex gap-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Supplier</legend>
                            <input type="text" name="supplier" className="input w-full" placeholder="Supplier" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Taste</legend>
                            <input type="text" name="taste" className="input w-full" placeholder="Taste" />
                        </fieldset>
                    </div>
                </div>
                {/* Form Row Category & Details */}
                <div className="md:flex gap-7 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category</legend>
                            <input type="text" name="category" className="input w-full" placeholder="Category" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Details</legend>
                            <input type="text" name="details" className="input w-full" placeholder="Details" />
                        </fieldset>
                    </div>
                </div>
                {/* Form Row Photo Url */}
                <div className="w-full">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo Url</legend>
                        <input type="text" name="PhotoUrl" className="input w-full" placeholder="Photo Url" />
                    </fieldset>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mt-3.5 bg-black text-white" />
            </form>
        </div>
    );
};

export default AddCoffee;