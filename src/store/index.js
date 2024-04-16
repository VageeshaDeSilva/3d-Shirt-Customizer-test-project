import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#3a80e9',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
})

export default state;