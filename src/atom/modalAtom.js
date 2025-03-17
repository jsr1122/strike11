import { atom } from "recoil";

const authScreenAtom = atom({
    key: 'authScreenAtom',
    default: false,
})

export default authScreenAtom;