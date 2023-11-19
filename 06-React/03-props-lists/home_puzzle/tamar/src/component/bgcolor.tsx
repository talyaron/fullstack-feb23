import React, { FC } from 'react'

interface BgColorProps {
    type: string;
}

const BgColor: FC<BgColorProps> = ({type}) => {
switch (type) {
    case 'cat': return "purple"

    case 'dog': return 'blue'

    case 'fish': return 'yellow'

    case 'snake': return 'gray'
}
}

export default BgColor
