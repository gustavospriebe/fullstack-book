"use client";

import { useState } from "react";
import { NewItemForm } from "./NewItemForm";

interface AddNewItemProps {
    dark?: boolean;
    onAdd(text: string): void;
    toggleButtonText: string;
}

export const AddNewItem = ({
    dark,
    onAdd,
    toggleButtonText,
}: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);

    if (showForm) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text);
                    setShowForm(false);
                }}
            />
        );
    }

    return (
        <div
            // dark={dark}
            onClick={() => setShowForm(true)}
            className={`bg-[#ffffff3d] rounded-[3px] border-none cursor-pointer max-w-[300px] py-[10px] px-3 text-left w-full hover:bg-[#ffffff52] ${
                dark ? "text-white" : "text-black"
            }`}
        >
            {toggleButtonText}
        </div>
    );
};
