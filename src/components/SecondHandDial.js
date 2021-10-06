import styled from "styled-components"

const nGon = ( center, numberOfSides, radius, start = 0 ) => {
    const centerAng = 2 * Math.PI / Math.round( numberOfSides );
    let startAngle = Math.PI / 2 - ( start % 2 ? 0 : centerAng / 2 );
    let vertices = [ ...Array( numberOfSides ).keys() ].map( index => {
        const ang = startAngle + ( index * centerAng );
        return [
            Math.round( center[ 0 ] + radius * Math.cos( ang ) ),
            Math.round( center[ 1 ] - radius * Math.sin( ang ) )
        ];
    } );
    return [ vertices[ 0 ], ...vertices.slice( 1 ).reverse() ];
};

export default function SecondHandDial( { time, dimensions } ) {

    const viewportCenter = [ Math.floor( dimensions.width / 2 ), Math.floor( dimensions.height / 2 ) ]
    const handPaths = nGon( viewportCenter, 60, Math.min( viewportCenter[ 0 ], viewportCenter[ 1 ] ), 3, false ).map( vertex => `M ${ viewportCenter } L ${ vertex } Z` );

    return <>
        <StyledSecondHandDial
            width={ dimensions.width }
            height={ dimensions.height }
            viewbox={ `0 0 ${ dimensions.width } ${ dimensions.height }` }
        >
            <circle
                cx={ viewportCenter[ 0 ] }
                cy={ viewportCenter[ 1 ] }
                r={ Math.min( viewportCenter[ 0 ], viewportCenter[ 1 ] ) }
                fill="#eee"
            />
            <path d={ handPaths[ time.getUTCSeconds() ] } stroke="black" >
                <animate attributeName="d" />
            </path>
        </StyledSecondHandDial>
    </>

}

const StyledSecondHandDial = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;