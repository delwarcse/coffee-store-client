// import React, { useEffect } from 'react';
// import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Users2 = () => {

    const { isPending, error, isError, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })




    // const [users,setUsers]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setUsers(data)
    //     })
    // },[])

    const handleUserDelete = id => {
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


                //delete from the database
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // const remainingUsers=users.filter(user=>user._id !== id);
                            // setUser(remainingUsers);
                        }
                    })
            }
        });
    }
    if (isPending) {
        return <span className="loading loading-spinner text-primary 
    text-center text-7xl mt-40 ml-40"></span>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div>
            {/* <h2 className='text-3xl'>Users: {users.length}</h2> */}
            <h2 className='text-3xl text-center'>Users2 using TanStack Query state management</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>LastLoginTime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id} user={user}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <button className="btn">E</button>
                                    <button
                                        onClick={() => handleUserDelete(user._id)}
                                        className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users2;