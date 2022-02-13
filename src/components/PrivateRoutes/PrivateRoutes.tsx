import { Navigate, Outlet, useLocation } from 'react-router-dom';
import StandardPage from '../../pages/StandardPage/StandardPage';
import { useAppSelector } from '../../redux/hooks';

/**
 * Applied to react-router for all routes that require the user
 * to be logged in. As with any front-end code, this can be avoided,
 * so should not be relied upon for security.
 */
export default function PrivateRoutes() {
    const location = useLocation();
    const isAuthed = useAppSelector((state) => state.auth.isAuthed);
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    // If the user is signed in, return the supplied component
    return isAuthed ? (
        <StandardPage>
            <Outlet />
        </StandardPage>
    ) : isLoading ? (
        <div></div>
    ) : (
        // Otherwise, redirect to the login screen
        <Navigate to="/login" replace state={{ from: location }} />
    );
}
