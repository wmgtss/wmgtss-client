import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Route, Routes } from 'react-router-dom';
import Error from '../Error/Error';

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
