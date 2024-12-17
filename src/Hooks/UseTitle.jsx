import { useEffect } from "react";
import { updatePageTitle } from "../utils/updateTitle";

export function useTitle(title) {
    useEffect(() => {
        updatePageTitle(title);
    }, [title]);
};