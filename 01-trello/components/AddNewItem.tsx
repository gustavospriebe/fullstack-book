"use client";

import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./AddItemButton";

interface AddNewItemProps {
    dark?: boolean;
    toggleButtonText: string;
}

export const AddNewItem = ({ dark, toggleButtonText }: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const [text, setText] = useState("");
    const [textList, setTextList] = useState([]);

    if (showForm) {
        return (
            <NewItemForm
                setText={setText}
                text={text}
                setShowForm={setShowForm}
            />
        );
    }

    return (
        <AddItemButton dark={dark} setShowForm={setShowForm}>
            {toggleButtonText}
        </AddItemButton>
    );
};
