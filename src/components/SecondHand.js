import styled from "styled-components"

export default function SecondHand( { time, dimensions } ) {

    return <StyledSecondHand
        width="10"
        height="500"
        viewbox="0 0 10 500"
        elapsed={ time.getUTCSeconds() }
    >
        <path d="m 5 0 l 5 500 l -10 0 z" />
    </StyledSecondHand>;

}

const StyledSecondHand = styled.svg`
    position: absolute;
    top: 0;
    left: 50%;
    max-height: 50vh;
    z-index: -1;
    transform: translate( -50%, 0 ) rotate( ${ ( { elapsed } ) => elapsed * 6 }deg );
    transform-origin: bottom center;
    transition: transform 0.1s cubic-bezier( 0.4, 2, 0.5, 0.4 );
`;