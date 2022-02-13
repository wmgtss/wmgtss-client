import SignUpForm from './SignUpForm/SignUpForm';
import { Route, Routes } from 'react-router-dom';
import Error from '../Error/Error';

/**
 * Similarly to LoginPage, this is probably redundant at this point
 */
export default function SignUpPage() {
    return (
        <Routes>
            <Route path="" element={<SignUpForm />} />

            <Route
                path="/*"
                element={<Error title="404" message="Not Found" />}
            />
        </Routes>
    );
}
