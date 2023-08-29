/** @type import('prettier').Config */
const config = {
  bracketSameLine: true,
  singleAttributePerLine: true,
  trailingComma: "es5",
  tabWidth: 4,
  semi: true,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cn", "cva"],
};
export default config;
