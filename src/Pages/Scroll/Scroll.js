import React, {useState} from "react";
import {Waypoint} from "react-waypoint";
import {useSpring, animated} from "react-spring";
import './Scroll.css'

function Scroll() {

    const [toggleTxt, setToggleText] = useState(false)
    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? 'translateX(0)' : 'translateX(-50%)'
    })
    
    return (
        <div className="scroll">
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facere facilis ipsa iusto natus neque, nobis odit porro similique sit! Aliquid aut impedit quam recusandae repellendus voluptatum. A aliquam architecto consequuntur distinctio, incidunt laboriosam minima neque nihil perspiciatis quia repellendus repudiandae sed voluptatem. Aut cum dolor ea, enim eos esse eveniet ex facilis itaque molestias nemo non odit officiis optio, quia quod rem suscipit tenetur vel vitae. Ab accusantium amet, commodi consequuntur cum dolorem, facilis harum ipsam laudantium minima nulla optio praesentium qui repellendus similique voluptate voluptatibus! Beatae eius excepturi officiis reiciendis ullam? Ad commodi ducimus earum esse in libero nam quidem ut. A alias architecto beatae eius excepturi facilis illo nisi numquam possimus sequi? Accusantium aspernatur cumque eaque eos et impedit iusto nam perspiciatis rerum sed. Accusantium alias debitis deleniti dolore dolores, doloribus ducimus eius error ex fugiat illum incidunt ipsa, iure magni maiores mollitia non porro quam quod rem repudiandae sed tenetur, totam veniam veritatis. Animi delectus eligendi, eos expedita incidunt itaque minima mollitia necessitatibus neque, nihil perferendis perspiciatis, quaerat quia sint temporibus veniam vero vitae. At atque blanditiis corporis cum dolores, eaque eius fuga id incidunt inventore iure minima nam nemo odit, porro quas qui recusandae, reiciendis?
            </p>

            <Waypoint
                bottomOffset='30%'
                onEnter={() => {
                    if (!toggleTxt){
                        setToggleText(true)
                    }
                }
                }
            />
            <animated.div style={animation} className='cta-section'>
                <h2>N'en ratez pas une miette !</h2>
                <form>
                    <label htmlFor='email'>Inscrivez- vous</label>
                    <input type='text' id='email' />
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facere facilis ipsa iusto natus neque, nobis odit porro similique sit! Aliquid aut impedit quam recusandae repellendus voluptatum. A aliquam architecto consequuntur distinctio, incidunt laboriosam minima neque nihil perspiciatis quia repellendus repudiandae sed voluptatem. Aut cum dolor ea, enim eos esse eveniet ex facilis itaque molestias nemo non odit officiis optio, quia quod rem suscipit tenetur vel vitae. Ab accusantium amet, commodi consequuntur cum dolorem, facilis harum ipsam laudantium minima nulla optio praesentium qui repellendus similique voluptate voluptatibus! Beatae eius excepturi officiis reiciendis ullam? Ad commodi ducimus earum esse in libero nam quidem ut. A alias architecto beatae eius excepturi facilis illo nisi numquam possimus sequi? Accusantium aspernatur cumque eaque eos et impedit iusto nam perspiciatis rerum sed. Accusantium alias debitis deleniti dolore dolores, doloribus ducimus eius error ex fugiat illum incidunt ipsa, iure magni maiores mollitia non porro quam quod rem repudiandae sed tenetur, totam veniam veritatis. Animi delectus eligendi, eos expedita incidunt itaque minima mollitia necessitatibus neque, nihil perferendis perspiciatis, quaerat quia sint temporibus veniam vero vitae. At atque blanditiis corporis cum dolores, eaque eius fuga id incidunt inventore iure minima nam nemo odit, porro quas qui recusandae, reiciendis?
            </p>
        </div>
    )
}

export default Scroll;