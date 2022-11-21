export interface ISlide {
    url: string | undefined
    title: string
}

export interface IImageSlider {
    slides: ISlide[]
}