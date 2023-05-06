import Card from "@/components/Card";
import { Column } from "@/components/Column";

export default function Home() {
    return (
        <div className="flex flex-row items-start bg-[#3179ba] w-full min-h-screen p-5">
            <Column text="Planned">
                <Card text="Generate app scaffold" />
            </Column>
            <Column text="In Progress">
                <Card text="Learn Typescript" />
            </Column>
            <Column text="Done">
                <Card text="Begin to use static typing" />
            </Column>
        </div>
    );
}
