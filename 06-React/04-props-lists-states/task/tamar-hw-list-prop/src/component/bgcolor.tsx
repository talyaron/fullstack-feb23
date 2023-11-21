import React, { FC } from 'react'

interface BgColorProps {
    category: string;
}

const BgColor: FC<BgColorProps> = ({category}) => {
switch (category) {
    case 'smartphones': return "purple"

    case 'laptops': return 'blue'

    case 'fragrances': return 'yellow'

    case 'skincare': return 'green'

    case 'groceries': return 'orang'

    case 'home-decoration': return 'red'

}
}

export default BgColor
