import { Link, Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import HousingCard from "./Card/HousingCard";
import { useEffect, useState } from "react";
export default function Welcome({ auth }) {
    const [roomsJSX, setRoomsJSX] = useState(null);
    
    useEffect(() => {
        axios.get("/rooms").then((response) => {
            console.log(auth)
            const rooms = response.data.rooms;
            const roomsJSXArray = rooms.map((housing) => (
                <HousingCard
                    auth={auth}
                    key={housing.id}
                    housing={housing}
                />
            ));
            setRoomsJSX(roomsJSXArray);
        });
    }, []);
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className=" flex items-center gap-2">
                            <nav className="-mx-3 flex flex-1 justify-center items-center">
                                {auth.user ? (
                                    <>
                                        <Link
                                            href={route("dashboard")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Dashboard
                                        </Link>
                                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                                            <div className="ms-3 relative">
                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <span className="inline-flex rounded-md">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-500 bg-slate-700 hover:text-slate-700 focus:outline-none transition ease-in-out duration-150"
                                                            >
                                                                {auth.name}

                                                                <svg
                                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </span>
                                                    </Dropdown.Trigger>

                                                    <Dropdown.Content>
                                                        <Dropdown.Link
                                                            href={route(
                                                                "profile.edit"
                                                            )}
                                                        >
                                                            Profile
                                                        </Dropdown.Link>
                                                        <Dropdown.Link
                                                            href={route(
                                                                "logout"
                                                            )}
                                                            method="post"
                                                            as="button"
                                                        >
                                                            Log Out
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {roomsJSX ?? <div>Loading...</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
