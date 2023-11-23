import React, { FC } from 'react'

interface BgColorProps {
    category: string;
}

const BgColor: FC<BgColorProps> = ({category}) => {
switch (category) {
    case 'smartphones': return "indianred"

    case 'laptops': return 'blue'

    case 'fragrances': return 'darksalmon'

    case 'skincare': return 'green'

    case 'groceries': return 'orange'

    case 'home-decoration': return 'red'

}
}

export default BgColor
