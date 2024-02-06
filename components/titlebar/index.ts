import dynamic from "next/dynamic";

const TitleBar = dynamic(() => import("./titlebar"), {
    ssr: false,
});

export { TitleBar };
