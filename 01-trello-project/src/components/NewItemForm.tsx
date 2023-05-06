interface NewItemFormProps {
    text: string;
    setText(text: string): void;
    setShowForm(bool: boolean): void;
}

export const NewItemForm = ({
    setText,
    text,
    setShowForm,
}: NewItemFormProps) => {
    return (
        <form className="max-w-[300px] flex flex-col w-full items-start">
            <input
                className="rounder-[3px] border-none shadow-3xl  mb-2 px-4 py-2 w-full"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button
                className="bg-[#5aac44] rounder-[3px] border-none shadow-none text-white px-3 py-[6px] text-center"
                onClick={() => {
                    setShowForm(false);
                }}
            >
                Create
            </button>
        </form>
    );
};
