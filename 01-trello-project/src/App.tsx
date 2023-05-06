import { AddNewItem } from "./components/AddNewItem";
import Card from "./components/Card";
import { Column } from "./components/Column";

function App() {
    return (
        <div className="flex flex-row items-start bg-[#3179ba] w-full min-h-screen p-5">
            <Column text="To Do">
                <Card text="Generate app scaffold" />
            </Column>
            <Column text="In Progress">
                <Card text="Learn Typescript" />
            </Column>
            <Column text="Done">
                <Card text="Begin to use static typing" />
            </Column>
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}
            />
        </div>
    );
}

export default App;
