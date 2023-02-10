import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/Home';
import Layout from './components/layout/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import Editor from './components/Editor';
import Admin from './components/Admin';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
    'Viewer': 2001,
    'Editor': 1984,
}

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                {/* we want to protect these routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.Viewer]} />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                    <Route path="editor" element={<Editor />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                    <Route path="admin" element={<Admin />} />
                </Route>
                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
                    <Route path="lounge" element={<Lounge />} />
                </Route> */}

                {/* catch all */}
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;