'use server';

import fs from 'fs'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function print() {
    console.log('testing print action');
}

export async function readDoc() {
    const file = await fs.promises.readFile('./src/tests/testFile.txt', 'utf-8');
    console.log({ file });
    return file
}

export async function writeDoc(text?: string) {
    const data = 'this is test data'
    await fs.promises.writeFile('./src/tests/testFile.txt', text ?? data);
    const file = await fs.promises.readFile('./src/tests/testFile.txt', 'utf-8');
    console.log({ file });
}

export async function addDoc(text?: string) {
    const data = 'this is test data'
    await fs.promises.appendFile('./src/tests/testFile.txt', text ?? data);
    const file = await fs.promises.readFile('./src/tests/testFile.txt', 'utf-8');
    console.log({ file });
    revalidatePath('/tests')
    redirect('/tests')
}
