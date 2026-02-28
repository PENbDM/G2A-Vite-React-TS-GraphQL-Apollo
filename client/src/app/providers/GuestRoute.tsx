import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/entities/user/model/auth-store";

export const GuestRoute = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    // If logged in, don't let them see Login/Register, send them Home
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // If not logged in, show the Login/Register page (Outlet)
    return <Outlet />;
};