import "./App.css";
import { Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { AppleCardsCarouselDemo } from "./components/ui/Cardcarousel";

import { SpotlightPreview } from "./components/spotlighttext/Spotlightcomponent";
import { TracingBeamDemo } from "./components/tracing beam/tracingbeamcomponent";
import { GlobeDemo } from "./components/globe/globeElement";
import { SignupFormDemo } from "./components/form/FormElement";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav" " main"`,
      }}
    >
      {" "}
      <GridItem area="nav" justifyContent={"left"}>
        <Flex justify={"center"}>
          <Navbar></Navbar>
        </Flex>
      </GridItem>
      <GridItem area="main">
        <SpotlightPreview></SpotlightPreview>
        <AppleCardsCarouselDemo></AppleCardsCarouselDemo>

        <GlobeDemo></GlobeDemo>
      </GridItem>
    </Grid>
  );
}

export default App;
