import React from 'react'

export default function EventCard({ event }) {
  return (
    <li className="flex flex-col border cursor-pointer group rounded-xl font-roboto ">
      <div className="relative w-full transition-transform duration-200 ease-out border rounded-xl h-80 drop-shadow-xl group-hover:scale-105">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="flex-1 my-[1.125rem] mx-5 ">
        <p className="text-xl font-medium"> {event.title}</p>
        <p className="mt-3 text-base text-lg text-[#525252] ">
          Date <span className="">• time </span>
        </p>
        <address className="text-gray-500 line-clamp-2">Address, City</address>
      </div>
      <p className="flex items-center mx-5 font-bold ">Entrance Fee</p>
    </li>
  )
}