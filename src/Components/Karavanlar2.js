import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

function Karavanlar2({ karavanImage }) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="w-[48%] float-left grid gap-2 m-[1%]"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div className="w-[100%] flex justify-center items-center">
                <img src={karavanImage} className='w-96 h-96' alt={karavanImage} />
            </div>
            <p>
                Enim ipsum eiusmod aute consectetur ut. Excepteur eu est ea proident ex amet cillum eu labore adipisicing nostrud proident dolore. Ad occaecat do commodo nisi commodo consequat consequat dolor.

                Aute qui consectetur amet dolore reprehenderit enim pariatur qui. Fugiat eu magna ut esse tempor labore veniam. Sint aliquip cupidatat deserunt aute aliquip amet in quis ea proident do veniam. Magna proident laboris nulla anim incididunt laboris. Aute enim id in ex adipisicing sunt anim commodo exercitation adipisicing.
            </p>
            <button className="w-[100%] border border-orange-500 rounded-lg text-orange-500 p-1">
                İncele
            </button>
        </motion.div>
    );
}

export default Karavanlar2