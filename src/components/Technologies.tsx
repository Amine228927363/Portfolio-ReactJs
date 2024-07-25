import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const Technologies = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -400 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-800 pb-24"
    >
      <h1 className="my-20 text-center text-4xl ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4  ">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faReact} color="cyan" size="4x" bounce />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faVuejs} color="green" size="4x" bounce />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faNodeJs} color="green" size="4x" bounce />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FontAwesomeIcon icon={faPython} size="4x" color="yellow" bounce />
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
