import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ROUTE } from "./constants/routes";

const AdminLayout = React.lazy(
    () => import("./layouts/AdminLayout/AdminLayout")
);
const ProductPage = React.lazy(() => import("./pages/ProductPage/ProductPage"));
const UserPage = React.lazy(() => import("./pages/UserPage/UserPage"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTE.ROOT} element={<AdminLayout />}>
                        <Route
                            path={ROUTE.PRODUCTS}
                            element={<ProductPage />}
                        />
                        <Route path={ROUTE.USERS} element={<UserPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
