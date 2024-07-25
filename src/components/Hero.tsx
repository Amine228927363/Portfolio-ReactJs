import { HERO_CONTENT } from "../constants/constant";
import ProfilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className=" pb-16 font-thin tracking-tighter text-6xl font-sans"
            >
              MohamedAmine Salah
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.75 }}
              src={ProfilePic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
