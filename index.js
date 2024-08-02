import wasmInit, { add } from './pkg/wasm_add.js';

export const main = async() => {
    await wasmInit();
    const result = add(5, 3);
    console.log(`5 + 3 = ${result}`);
    return result;
}
