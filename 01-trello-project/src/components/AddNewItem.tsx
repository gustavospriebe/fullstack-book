"use client";

import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./AddItemButton";

interface AddNewItemProps {
    dark?: boolean;
    toggleButtonText: string;
    onAdd(text: string): void;
}

export const AddNewItem = ({
    onAdd,
    dark,
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
        <AddItemButton dark={dark} setShowForm={setShowForm}>
            {toggleButtonText}
        </AddItemButton>
    );
};
