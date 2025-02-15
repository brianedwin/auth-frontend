import { useEffect, useState } from "react";
import { getUser, logoutUser } from "../utils/auth";
import { useRouter } from "next/router";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await getUser(token);
                setUser(res.data);
            } catch (error) {
                router.push("/login");
            }
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        logoutUser();
        router.push("/login");
    };

    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between">
            <div>My App</div>
            <div>
                {user && <span className="mr-4">Welcome, {user.email}</span>}
                <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </div>
        </nav>
    );
}
