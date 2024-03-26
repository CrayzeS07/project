import { nanoid } from "@reduxjs/toolkit";
import { Home } from "../layout/pages/home/Home";
import { Category } from "../layout/pages/category/category";

export default [
    {
        component: <Home />,
        id: nanoid()
    },
    {
        component: <Category />,
        path: "category/:slug",
        id: nanoid()
    }
]