import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const AllAppointments = () => {
  const { appointments, aToken, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) getAllAppointments();
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Appointments</h1>
      <div className="w-full flex flex-col gap-4 pt-5">
        {appointments.length === 0 && (
          <p className="text-sm text-gray-600">No appointments found.</p>
        )}

        {appointments.map((item, index) => (
          <div
            key={index}
            className="border border-indigo-200 rounded-xl overflow-hidden p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <p className="text-neutral-800 text-lg font-medium">
                {item.patientName || item.userName || "Unknown Patient"}
              </p>
              <p className="text-zinc-600 text-sm">Doctor: {item.doctorName}</p>
              <p className="text-zinc-600 text-sm">Date: {item.date}</p>
              <p className="text-zinc-600 text-sm">Time: {item.time}</p>
              <p className="text-zinc-600 text-sm">Status: {item.status}</p>
            </div>
            <div className="mt-3 sm:mt-0 flex gap-2">
              <button
                onClick={() => cancelAppointment(item._id)}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
