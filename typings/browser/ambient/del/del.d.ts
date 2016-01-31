// Compiled using typings@0.6.3
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/40c60850ad6c8175a62d5ab48c4e016ea5b3dffe/del/del.d.ts
// Type definitions for del v1.2.0
// Project: https://github.com/sindresorhus/del
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "del" {
    import glob = require("glob");

    function Del(pattern: string): Promise<string[]>;
    function Del(pattern: string, options: Del.Options): Promise<string[]>;

    function Del(patterns: string[]): Promise<string[]>;
    function Del(patterns: string[], options: Del.Options): Promise<string[]>;

    module Del {
        function sync(pattern: string, options?: Options): string[];
        function sync(patterns: string[], options?: Options): string[];

        interface Options extends glob.IOptions {
            force?: boolean
        }
    }

    export = Del;
}