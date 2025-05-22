import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlant = ({ plant, plants, setPlants }) => {

  // Destructuring
  const { image, plantName, category,
    wateringFrequency, healthStatus, _id } = plant;

  // Handle delete
  const handleDelete = (_id) => {
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

        // Delete plant

        fetch(`http://localhost:3000/plants/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Plant has been deleted.",
                icon: "success"
              });


              // Remove the plant from the state
              const remainingPlants = plants.filter((item) => item._id !== _id);
              setPlants(remainingPlants);
            }

          })


      }
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden w-full mx-auto">
      <div className="relative">
        <img
          src={image}
          alt={plantName}
          className="w-full h-44 object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#1F7158] text-white text-xs px-3 py-1 rounded-full shadow">
          {healthStatus}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-[#1F7158]">{plantName}</h2>
        <p className="text-sm text-gray-600"><span className="font-medium">Category:</span> {category}</p>
        <p className="text-sm text-gray-600"><span className="font-medium">Watering:</span> {wateringFrequency}</p>
      </div>

      <div className="flex justify-between items-center px-4 pb-4 mt-2">
        <Link to={`/updatePlant/${_id}`}>
          <button className="bg-yellow-500 text-white text-sm px-4 py-1.5 rounded hover:bg-yellow-600 transition">
            Update
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white text-sm px-4 py-1.5 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyPlant;