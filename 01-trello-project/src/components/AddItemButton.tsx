"use server";
interface AddItemButtonProps {
    children: React.ReactNode;
    dark?: boolean;
    setShowForm(bool: boolean): void;
}

export const AddItemButton = ({
    dark,
    children,
    setShowForm,
}: AddItemButtonProps) => {
    return (
        <div
            onClick={() => setShowForm(true)}
            className={`w-full max-w-[300px] cursor-pointer rounded-[3px] border-none bg-[#ffffff3d] px-3 py-[10px] text-left hover:bg-[#ffffff52] ${
                dark ? "text-black" : "text-white"
            }`}
        >
            {children}
        </div>
    );
};
