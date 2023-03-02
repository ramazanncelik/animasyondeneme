import { motion } from "framer-motion";

function Karavanlar1({ karavanImage }) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, }} variants={{
                offscreen: {
                    opacity: 0,
                    y:50
                },
                onscreen: {
                    opacity: 1,
                    y:50,
                    transition: {
                        type: "spring",
                        duration: 3
                    }
                }
            }}
            style={{ width: '48%', float: 'left' }} className="bg-white d-grid gap-2 m-1">

            <div className="w-100 d-flex justify-content-center align-items-center">
                <img src={karavanImage} style={{ width: 200, height: 200 }} alt={karavanImage} />
            </div>
            <p>
                Enim ipsum eiusmod aute consectetur ut. Excepteur eu est ea proident ex amet cillum eu labore adipisicing nostrud proident dolore. Ad occaecat do commodo nisi commodo consequat consequat dolor.

                Aute qui consectetur amet dolore reprehenderit enim pariatur qui. Fugiat eu magna ut esse tempor labore veniam. Sint aliquip cupidatat deserunt aute aliquip amet in quis ea proident do veniam. Magna proident laboris nulla anim incididunt laboris. Aute enim id in ex adipisicing sunt anim commodo exercitation adipisicing.
            </p>

            <button className="w-100 btn btn-dark rounded p-1">
                İncele
            </button>

        </motion.div>
    );
}

export default Karavanlar1