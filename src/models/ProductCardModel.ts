import { FixMeLater } from "./FixMeLater"

export interface IProductCard {
    item: FixMeLater
    classNameCard: string | undefined
}

export type IButtonEvent = React.MouseEvent<HTMLButtonElement>
