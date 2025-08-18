import { create } from 'zustand'

export type Store = {
    count: number,
    increment: () => void,
    setNumber: (num: number) => void
};


const useCounterStore = create<Store>((set) => {
    return {
        count: 0,
        increment: () => set(state => ({ count: state.count + 1 })),
        setNumber: (num: number) => set(() => ({ count: num }))
    }
})

export default useCounterStore