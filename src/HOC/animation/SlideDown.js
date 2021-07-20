import { useSpring, animated } from 'react-spring'
import React from "react";

export default function SlideDown(Component) {

    const style = useSpring({
        to: {
            marginTop: '0'
        }, from: {
            marginTop: '-100px'

        },config: {
            duration:1000
        }
    })

    return (
        <animated.div style={style}>
            <Component />
        </animated.div>
    );
};