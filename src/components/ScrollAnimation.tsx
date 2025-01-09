import { motion } from 'framer-motion';
import type { FC } from 'react';

export const ScrollAnimation: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            Content that animates when scrolled into view
        </motion.div>
    );
}; 