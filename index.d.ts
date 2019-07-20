type fn = (content: string) => string;

declare interface KLOptions {
    customCSS?: string;
}
interface IkeyLight {
    color: string;
    options?: KLOptions;
    match(content: string, key: string, filter: fn): string;
}

declare class KeyLight implements IkeyLight {
    color: string;
    options: KLOptions;
    constructor(color: string, options?: KLOptions);
    match(content: string, key: string, filter?: fn): string;
}
export default KeyLight;
