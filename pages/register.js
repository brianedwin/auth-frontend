import { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "../utils/api";
import { toast } from "react-toastify";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ email, password, role: "student" });
            toast.success("Registration successful! Check your email.");
            router.push("/login");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error registering user");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <form onSubmit={handleRegister} className="flex flex-col">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                    <button type="submit" className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Register</button>
                </form>
            </div>
        </div>
    );
}
