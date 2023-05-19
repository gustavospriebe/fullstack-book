interface CardProps {
    text: string;
}

export default function Card({ text }: CardProps) {
    return (
        <div className="shadow-3xl mb-2 max-w-[300px] cursor-pointer rounded-[3px] bg-white px-4 py-2">
            {text}
        </div>
    );
}
