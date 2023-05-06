import { AddNewItem } from "@/components/AddNewItem";
import { Column } from "@/components/Column";

export default function Home() {
    return (
        <div className="flex flex-row items-start bg-[#3179ba] w-full min-h-screen p-5">
            <Column text="Planned" />
            <Column text="Ongoing" />
            <Column text="Done" />
            <AddNewItem
                toggleButtonText="+ Add another List"
                onAdd={console.log}
            />
        </div>
    );
}
