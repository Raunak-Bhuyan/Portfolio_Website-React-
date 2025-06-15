import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl text-neutral-200"
            >
                Get in Touch
            </motion.h2>
            <div className="text-center tracking-tighter text-neutral-400">

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    <a href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                    </a>
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn: Raunak Bhuyan
                </a>
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                    Github: Raunak-Bhuyan
                </a>
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                        Instagram: raunak_bhuyan
                    </a>
                </motion.p>   

                <a href="#" className="border-b">
                    {CONTACT.top}
                </a>
            </div>
        </div>
    );
};

export default Contacts;
