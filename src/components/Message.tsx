
import { motion } from "motion/react";
export function Messages() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden  flex items-center justify-center p-4">
            {/* Background Image Container */}
            <img
                src="/bf.avif"
                alt="Classical landscape painting"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
            />
            <div className="relative max-w-6xl mx-auto w-full h-dvh  px-2 md:px-6">

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex justify-end"
                    >
                        <div className="bg-[#0A0C10] text-white font-mono text-base md:text-4xl px-10 py-6 rounded-[3rem] rounded-bl-none shadow-lg tracking-tight">
                            Is relay secure?
                        </div>
                    </motion.div>

                    {/* Second Bubble - Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex justify-start"
                    >
                        <div className="bg-[#F5F5F7] text-black font-mono text-base md:text-4xl px-10 py-6 rounded-[3rem] rounded-br-none shadow-lg tracking-tight">
                            Yes, designed for safe
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex justify-end"
                    >
                        <div className="bg-[#0A0C10] text-white font-mono  md:text-4xl px-10 py-6 rounded-[3rem] rounded-bl-none shadow-lg tracking-tight">
                            ..typing
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
