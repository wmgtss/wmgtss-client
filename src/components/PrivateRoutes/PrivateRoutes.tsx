import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function PrivateRoutes() {
    const location = useLocation();
    const isAuthed = useAppSelector((state) => state.auth.isAuthed);
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    return isAuthed ? (
        <Outlet />
    ) : isLoading ? (
        <div></div>
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
}
