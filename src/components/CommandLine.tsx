interface Props {
    text: string;
}

export default function CommandLine({ text }: Props) {
    return (
        <div className="mb-1 flex items-center">
            <span className="mr-2 text-white">root &gt;</span>
            <span className="text-white">{text}</span>
        </div>
    );
}
