import { useSelector } from "react-redux";

import styled from "styled-components"

export default function Dial() {

    const { height, width } = useSelector( state => state.client );

    return <StyledDial
        width={ width }
        height={ height }
        viewbox={ `0 0 ${ height } ${ width }` }
    >
        <circle
            cx={ Math.floor( width / 2 ) }
            cy={ Math.floor( height / 2 ) }
            r={ Math.min( Math.floor( width / 2 ), Math.floor( height / 2 ) ) }
        />
    </StyledDial>

}

const StyledDial = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;