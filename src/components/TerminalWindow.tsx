import type { ReactNode } from "react";

interface Props {
    title: string;
    email?: string;
    children: ReactNode;
}

export default function TerminalWindow(props: Props) {
    return (
        <div className="overflow-hidden rounded-sm border border-catpuccin-sky">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-catpuccin-blue bg-catpuccin-base p-3">
                <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-catpuccin-green"></div>
                    <div className="h-3 w-3 bg-catpuccin-yellow"></div>
                    <div className="h-3 w-3 bg-catpuccin-mauve"></div>
                </div>
                <div className="flex-1 text-center">
                    {/* Empty center space */}
                </div>
                <div className="cursor-not-allowed text-catpuccin-subtext-1">
                    <span>×</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-catpuccin-crust p-6">
                <div className="mb-4 flex justify-between">
                    <div className="text-white">{props.title}</div>
                    {props.email && (
                        <div className="text-catpuccin-blue">{props.email}</div>
                    )}
                </div>

                <div className="flex flex-col lg:min-h-[60vh]">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
