// TypeScript can't resolve modules with a nonstandard extension, only 'js', 'jsx', 'ts', 'tsx'

declare module '*.png' {
    const content: string;
    export = content;
}
