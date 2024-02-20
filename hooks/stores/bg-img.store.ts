import { create } from 'zustand'

type BgImgState = {
    imgSrc: string,
    blurLevel: string,
    opacityValue: number,
    marginLeft: number,
    marginRight: number,
    marginTop: number,
    marginBottom: number,
    setImgSrc: (src: string) => void,
    setBlurLevel: (blurLevel: string) => void,
    setOpacityValue: (opacity: number) => void
    setMarginLeft: (left: number) => void
    setMarginRight: (right: number) => void
    setMarginTop: (top: number) => void
    setMarginBottom: (bottom: number) => void
}

const useBgImgStore = create<BgImgState>()(
    (set) => ({
        imgSrc: '',
        blurLevel: 'none',
        opacityValue: 1.0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        setImgSrc: (src) => set(() => ({ imgSrc: src })),
        setBlurLevel: (blurLevel) => set(() => ({ blurLevel: blurLevel })),
        setOpacityValue: (opacity) => set(() => ({ opacityValue: opacity })),
        setMarginLeft: (left) => set(() => ({ marginLeft: left })),
        setMarginRight: (right) => set(() => ({ marginRight: right })),
        setMarginTop: (top) => set(() => ({ marginTop: top })),
        setMarginBottom: (bottom) => set(() => ({ marginBottom: bottom })),
    })
)

export default useBgImgStore;