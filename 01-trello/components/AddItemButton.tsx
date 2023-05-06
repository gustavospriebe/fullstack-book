import React from "react";

type AddItemButtonProps = {
    children: React.ReactNode;
    dark?: boolean;
    setShowForm(bool: boolean): void;
};

export const AddItemButton = ({
    dark,
    children,
    setShowForm,
}: AddItemButtonProps) => {
    return (
        <div
            onClick={() => setShowForm(true)}
            className={`bg-[#ffffff3d] rounded-[3px] border-none cursor-pointer max-w-[300px] py-[10px] px-3 text-left w-full hover:bg-[#ffffff52] ${
                dark ? "text-white" : "text-black"
            }`}
        >
            {children}
        </div>
    );
};
