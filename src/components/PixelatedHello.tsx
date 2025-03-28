import DoubleStackButton from "./DoubleStackButton";

export default function PixelatedHello() {
    // Create the pixelated effect with small squares
    const createPixelBorder = () => {
        // This creates the pixelated border effect
        return (
            <>
                {/* Top-left corner pixels */}
                <div className="absolute left-0 top-0 h-4 w-4 bg-[#1a1b26]"></div>
                <div className="absolute left-4 top-0 h-4 w-4 bg-[#1a1b26]"></div>
                <div className="absolute left-0 top-4 h-4 w-4 bg-[#1a1b26]"></div>

                {/* Bottom-right corner pixels */}
                <div className="absolute bottom-0 right-0 h-4 w-4 bg-[#1a1b26]"></div>
                <div className="absolute bottom-0 right-4 h-4 w-4 bg-[#1a1b26]"></div>
                <div className="absolute bottom-4 right-0 h-4 w-4 bg-[#1a1b26]"></div>

                {/* Top-right corner pixels */}
                <div className="absolute right-0 top-0 h-4 w-4 bg-[#1a1b26]"></div>
                <div className="absolute right-4 top-4 h-4 w-4 bg-[#1a1b26]"></div>

                {/* Bottom-left corner pixels */}
                <div className="absolute bottom-0 left-0 h-4 w-4 bg-[#1a1b26]"></div>
                <div className="absolute bottom-4 left-4 h-4 w-4 bg-[#1a1b26]"></div>
            </>
        );
    };

    return (
        <div className="flex h-[500px] flex-col justify-between">
            <div className="flex grow cursor-progress items-center justify-center">
                <div className="relative mx-auto h-4/5 w-4/5">
                    {/* Main purple rectangle */}
                    <div className="relative flex h-full w-full items-center justify-center bg-catpuccin-mauve transition-all duration-300 hover:bg-catpuccin-red">
                        {/* Pixelated text */}
                        <div className="text-center">
                            <h2 className="mb-4 font-pixel text-6xl text-black">
                                HELLO
                            </h2>
                            <h2 className="font-pixel text-6xl text-black">
                                WORLD
                            </h2>
                        </div>

                        {/* Pixelated border effect */}
                        {createPixelBorder()}
                    </div>
                </div>
            </div>

            <div className="">
                <DoubleStackButton icon="🤖">
                    Ask AI (coming soon)
                </DoubleStackButton>
            </div>
        </div>
    );
}
