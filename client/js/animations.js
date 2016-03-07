import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { velocityHelpers } from 'velocity-react'

const FadeAnimation = {
    // Register these with UI Pack so that we can use stagger later.
    In: velocityHelpers.registerEffect({
        calls: [
            [{
                opacity: 1,
            }, 1, {
                easing: 'ease-out'
            }]
        ],
    }),

    Out: velocityHelpers.registerEffect({
        calls: [
            [{
                opacity: 0,
            }, 1, {
                easing: 'ease-out'
            }]
        ],
    }),
};

export const enterFadeAnimation = {
    animation: FadeAnimation.In,
    stagger: 150,
    duration: 400,
    backwards: true,
    display: 'inherit',
    style: {
        // Since we're staggering, we want to keep the display at "none" until Velocity runs
        // the display attribute at the start of the animation.
        display: 'none',
    },
};

export const leaveFadeAnimation = {
    animation: FadeAnimation.Out,
    stagger: 100,
    duration: 500,
    backwards: true,
};