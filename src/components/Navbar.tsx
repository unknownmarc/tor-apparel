import { Image } from "@chakra-ui/react";

import logo from "../assets/TORlogo.jpeg";

const Navbar = () => {
  return <Image src={logo} w={"20%"} h={"auto"} objectFit={"contain"} />;
};

export default Navbar;
