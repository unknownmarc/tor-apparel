import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { AppleCardsCarouselDemo } from "./components/ui/Cardcarousel";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav" " main"`,
      }}
    >
      <GridItem area="nav" justifyContent={"left"}>
        <Navbar></Navbar>
      </GridItem>

      <GridItem area="main">
        <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      </GridItem>
    </Grid>
  );
}

export default App;
