import React from 'react'
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const AiReview = (props: Props) => {
    return (
        <div className='flex flex-row justify-start items-start gap-1'>
            {/* <p className='text-slate-300 text-xl'> {'✨:'} </p>  */}
            <TypeAnimation
                sequence={[
                    ' Domino\'s is a solid choice for reliable and affordable pizza. Their crust is consistently good, and they offer a wide variety of toppings to choose from.  They\'re also known for their fast carry-out and delivery times.  While it may not be the most gourmet pizza out there, it\'s a good option for a casual meal.', // Types 'One'
                    1000, // Waits 1s
                    () => {
                        console.log('Sequence completed');
                    },
                ]}
                speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1.2em', display: 'inline-block', color: 'white' }}
            // preRenderFirstString = {true}
            />
        </div>
    )
}

export default AiReview