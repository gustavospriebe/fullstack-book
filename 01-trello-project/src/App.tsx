import { AddNewItem } from "./components/AddNewItem";
import Card from "./components/Card";
import { Column } from "./components/Column";

function App() {
    return (
        <div className="flex min-h-screen w-full flex-row items-start bg-[#3179ba] p-5">
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

interface State {
    count: number;
}

interface Action {
    type: "increment" | "decrement";
}

const counterReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1,
            };
        case "decrement":
            return {
                count: state.count - 1,
            };
        default:
            throw new Error();
    }
};
