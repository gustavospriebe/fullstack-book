import { useState } from "react";

interface NewItemFormProps {
    onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState("");

    return (
        <form className="max-w-[300px] flex flex-col w-full items-start">
            <input
                className="rounder-[3px] border-none shadow-3xl  mb-2 px-4 py-2 w-full"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            ></input>
            <button
                className="bg-[#5aac44] rounder-[3px] border-none shadow-none text-white px-3 py-[6px] text-center"
                onClick={() => {
                    onAdd(text);
                }}
            >
                Create
            </button>
        </form>
    );
};
