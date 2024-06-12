import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Dialog } from "@headlessui/react";


import axios from "axios";
export default function HousingCard({ auth, housing }) {
    function handleReserve() {

    if (auth.user) {
        setShowModal(true);
    } else {
        window.location.href = '/login';
    }
    }
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };
    const [dateBegin, setDateBegin] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());

    const handleDateBegin = (e) => {
        const newDate = new Date(e.target.value);
        if (newDate < dateEnd && newDate >= new Date()) {
            setDateBegin(new Date(e.target.value));
        }
    };

    const handleDateEnd = (e) => {
        const newDate = new Date(e.target.value);
        if (newDate >= dateBegin) {
            setDateEnd(new Date(e.target.value));
        }
    };
    



    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full"
                src={housing.image}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{housing.name}</div>
                <p className="text-gray-700 text-base">{housing.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    ${housing.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {housing.rating}
                </span>
                <button
                    onClick={handleReserve}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Reserve
                </button>
            </div>
            <Transition.Root show={showModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <svg
                                            className="h-6 w-6 text-green-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Reservation
                                        </Dialog.Title>
                                        <div>
                                            <input
                                                type="date"
                                                onChange={handleDateBegin}
                                                value={dateBegin.toISOString().split('T')[0] || new Date().toISOString().split('T')[0]}
                                                className="border px-2 py-1 rounded-lg mt-2"
                                                id="date_begin"
                                            />
                                            <input
                                                type="date"
                                                onChange={handleDateEnd}
                                                value={dateEnd.toISOString().split('T')[0] || new Date().toISOString().split('T')[0]}
                                                className="border px-2 py-1 rounded-lg mt-2"
                                                id="date_end"
                                            />
                                            <input
                                                type="number"
                                                min={1}
                                                max={5}
                                                className="border px-2 py-1 rounded-lg mt-2"
                                                id="guests"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        onClick={closeModal}
                                    >
                                        Reserve
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );



}
