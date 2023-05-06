interface CardProps {
    text: string;
}

export default function Card({ text }: CardProps) {
    return (
        <div className="rounded-[3px] bg-white cursor-pointer mb-2 px-4 py-2 max-w-[300px] shadow-3xl">
            {text}
        </div>
    );
}
