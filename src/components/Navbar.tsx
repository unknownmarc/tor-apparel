import { Image } from "@chakra-ui/react";

import newlogo from "../assets/newlogo.webp";

const Navbar = () => {
  return <Image src={newlogo} w={"20%"} h={"auto"} objectFit={"contain"} />;
};

export default Navbar;
