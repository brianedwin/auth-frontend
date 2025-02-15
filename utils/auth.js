import axios from "axios";

export const checkAuthStatus = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) return { isAuthenticated: false };

        const res = await axios.get("/auth/user", {
            headers: { Authorization: `Bearer ${token}` },
        });

        return { isAuthenticated: true, user: res.data };
    } catch (error) {
        return { isAuthenticated: false };
    }
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};
