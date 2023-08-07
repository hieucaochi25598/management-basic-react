import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ROUTE } from "./constants/routes";

const AdminLayout = React.lazy(
    () => import("./layouts/AdminLayout/AdminLayout")
);
const ProductPage = React.lazy(() => import("./pages/ProductPage/ProductPage"));
const UserPage = React.lazy(() => import("./pages/UserPage/UserPage"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route
                        path={ROUTE.ROOT}
                        element={<Navigate to={ROUTE.PRODUCTS} />}
                    />
                    <Route path={ROUTE.PRODUCTS} element={<ProductPage />} />
                    <Route path={ROUTE.USERS} element={<UserPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
