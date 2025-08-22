/* eslint-disable import/no-anonymous-default-export */
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const __basename = path.basename(__filename, '.ts')
const __resolve = path.resolve('src/tests')
const ext = path.extname(__filename)

const parse = path.parse(__filename)

const final = path.resolve('/koko', path.dirname(fileURLToPath(import.meta.url)), 'join')
const final2 = path.join('/src', 'koko', path.dirname(fileURLToPath(import.meta.url)), 'join')


export const cc = __dirname + 'cc'
export const readFile = async () => {
    const result = await fs.promises.readFile(path.resolve('src/tests/testFile.txt'), 'utf-8')
    return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customeMap = (nums: number[], cb: (num: number) => any): any[] => {
    const res = []
    for (let i = 0; i < nums?.length; i++) {
        res.push(cb(nums[i]))
    }
    return res;
}

export default {
    __dirname, __filename, __basename, __resolve, readFile, ext, parse, final, final2
};



