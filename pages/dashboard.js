import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "../utils/api";

export default function Dashboard() {
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

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Welcome {user?.email}</h2>
                <p className="text-center">Your Role: {user?.role}</p>
            </div>
        </div>
    );
}
