import styled from "styled-components"

export default function Dial( { time, dimensions } ) {

    return <>
        <StyledDial
            width={ dimensions.width }
            height={ dimensions.height }
            viewbox={ `0 0 ${ dimensions.height } ${ dimensions.width }` }
        >
            <circle
                cx={ Math.floor( dimensions.width / 2 ) }
                cy={ Math.floor( dimensions.height / 2 ) }
                r={ Math.min( Math.floor( dimensions.width / 2 ), Math.floor( dimensions.height / 2 ) ) }
                fill="#eee"
            />
            <text x="50" y="50">{ time.getUTCSeconds() }</text>
        </StyledDial>
    </>

}

const StyledDial = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;