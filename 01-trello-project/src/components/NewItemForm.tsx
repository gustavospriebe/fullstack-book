import { useState } from "react";

interface NewItemFormProps {
    onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState("");

    return (
        <form className="flex w-full max-w-[300px] flex-col items-start">
            <input
                className="rounder-[3px] shadow-3xl mb-2  w-full border-none px-4 py-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
            ></input>
            <button
                className="rounder-[3px] border-none bg-[#5aac44] px-3 py-[6px] text-center text-white shadow-none"
                onClick={() => {
                    onAdd(text);
                }}
            >
                Create
            </button>
        </form>
    );
};
