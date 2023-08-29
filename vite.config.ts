import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Unfonts({
            custom: {
                families: [
                    {
                        name: "Siyamrupali",
                        local: "Siyamrupali",
                        src: "./src/assets/fonts/Siyamrupali.ttf",
                        transform(font) {
                            return font;
                        },
                    },
                ],
                display: "swap",
                preload: true,
                injectTo: "head-prepend",
            },
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
