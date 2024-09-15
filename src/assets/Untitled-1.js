// //chat list      {filteredDoctors.length > 0 ? (
//         <div className="flex flex-col gap-2">
//           {filteredDoctors.map((doctor, index) => (
//             <div
//               key={index}
//               className="flex items-center bg-white rounded-lg cursor-pointer"
//               onClick={() => handleChatOpen(doctor)}
//             >
//               {/* Placeholder profile image */}
//               <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4">
//                 {doctor.firstName.charAt(0).toUpperCase()}
//               </div>
//               {/* Doctor details */}
//               <div>
//                 <h1 className="font-bold text-lg">{`Dr. ${doctor.lastName} ${doctor.firstName}`}</h1>
//                 <p className="text-sm text-gray-500">{doctor.specialty}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No doctors found matching your search</p>
//       )}
