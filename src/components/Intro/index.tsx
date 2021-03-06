import { motion } from "framer-motion";
import { Box, SubBox, Text } from "./styles";
import Me from "../../data/ReadyPlayerMe-Avatar.png";

export interface IntroProps {
  click: boolean;
}

const Intro = ({ click }: IntroProps) => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello, </h1>
          <h3>Welcome to my website.</h3>
          {/* <h6>I'm a technology, enthusiast.</h6> */}
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
