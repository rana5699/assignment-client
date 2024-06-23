import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ListTable = ({ mySpot, onDelete }) => {
  const navigate = useNavigate();
  const { averageCost, imageUrl, location, touristSpotName, _id } = mySpot;

  const handleUpdate = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons;

    Swal.fire({
      title: "Are you sure?",
      text: "Want to update your information !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/update/${_id}`, { state: { mySpot } });
      }
    });
  };

  // handle delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        onDelete(_id);
      }
    });
  };

  return (
    <tbody className="my-44 mt-44">
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3 ">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={imageUrl} alt={touristSpotName} />
              </div>
            </div>
            <div>
              <div className="font-bold">{touristSpotName}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>$ {averageCost}</td>
        <td>
          {" "}
          <button
            onClick={handleDelete}
            className="btn btn-outline btn-link btn-sm hover:bg-cyan-600 hover:border-none"
          >
            Delete
          </button>
        </td>
        <th>
          <button
            onClick={handleUpdate}
            className="btn btn-outline btn-link btn-sm hover:bg-cyan-600 hover:border-none"
          >
            Update
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default ListTable;
