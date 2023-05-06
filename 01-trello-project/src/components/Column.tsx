import { FC } from "react";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
    text: string;
    children?: React.ReactNode;
}

export const Column: FC<ColumnProps> = ({ text, children }) => {
    return (
        <div className="bg-[#ebecf0] grow-0 p-2 rounded mr-5 w-[300px] min-h-[40px]">
            <div className="font-bold pt-[6px] pb-3 px-4 ">{text}</div>
            <AddNewItem toggleButtonText="+ Add another List" dark />
            {children}
        </div>
    );
};
