import { FC } from "react";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
    text: string;
    children?: React.ReactNode;
}

export const Column: FC<ColumnProps> = ({ text, children }) => {
    return (
        <div className="mr-5 min-h-[40px] w-[300px] grow-0 rounded bg-[#ebecf0] p-2">
            <div className="px-4 pb-3 pt-[6px] font-bold ">{text}</div>
            {children}
            <AddNewItem
                toggleButtonText="+ Add another List"
                dark
                onAdd={console.log}
            />
        </div>
    );
};
