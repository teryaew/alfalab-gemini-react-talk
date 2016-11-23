import React from "react";

import {
  Appear, BlockQuote, Code, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle/lib";

import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  firstScreen : require('../assets/i/first-screen.png')
};

preloader(images);

const theme = createTheme({
  primary: "#FFF",
  tertiary: "#EF3124"
}, {
  primary: "Apercu Pro Mono"
});

export default class Presentation extends React.Component {
  render() {
    let gg = <span><span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>G</span>G</span>;

    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "fade"]} transitionDuration={350}>

          { /* 1 */ }

          <Slide
            transition={["fade"]}
            bgImage={images.firstScreen.replace("/", "")}
            style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          >
          </Slide>


          { /* 2 */ }

          <Slide transition={["fade"]}>
            <List style={{ lineHeight: '1.5' }}>
              <ListItem>About</ListItem>
              <ListItem>Vanilla demo</ListItem>
              <ListItem>React demo</ListItem>
              <ListItem>Gemini meets aruif</ListItem>
              <ListItem>Plans & news</ListItem>
            </List>
          </Slide>

          { /* 3 */ }

          <Slide transition={["fade"]}>
            <Heading size={4} lineHeight={1.5} textFont="primary">
              gemini
            </Heading>
            <List style={{ lineHeight: '1.5' }}>
              <ListItem>2014</ListItem>
              <ListItem>Самый популярный из Я?</ListItem>
              <ListItem>Мало альтернатив</ListItem>
              <ListItem>Множество браузеров</ListItem>
              <ListItem>Гибкие настройки</ListItem>
            </List>
          </Slide>

          { /* 4 */ }

          <Slide transition={["fade"]}>
            <a href="http://localhost:3001" target="_blank" style={{ textDecoration: 'none' }}>
              <Heading size={4} lineHeight={1.5} textFont="primary">
                Vanilla demo
              </Heading>
            </a>
          </Slide>

          { /* 5 */ }

          <Slide transition={["fade"]}>
            <Heading size={4} lineHeight={1.5} textFont="primary">
              gemini-react
            </Heading>
            <List style={{ lineHeight: '1.5' }}>
              <ListItem>3 месяца от роду</ListItem>
              <ListItem>От автора gemini</ListItem>
              <ListItem>Пионеры</ListItem>
            </List>
          </Slide>

          { /* 6 */ }

          <Slide transition={["fade"]}>
            <a href="http://localhost:3002" target="_blank" style={{ textDecoration: 'none' }}>
              <Heading size={4} lineHeight={1.5} textFont="primary">
                React demo
              </Heading>
            </a>
          </Slide>

          { /* 7 */ }

          <Slide transition={["fade"]}>
            <Heading size={4} lineHeight={1.5} textFont="primary">
              gemini & arui-feather
            </Heading>
            <List style={{ lineHeight: '1.5' }}>
              <ListItem>Типовой тест</ListItem>
              <ListItem>Tips & tricks</ListItem>
              <ListItem>CI</ListItem>
            </List>
          </Slide>

          { /* 8 */ }

          <Slide transition={["fade"]}>
            <Heading size={4} lineHeight={1.5} textFont="primary">
              Plans & news
            </Heading>
          </Slide>

          { /* 9 */ }

          <Slide transition={["fade"]}>
            <Heading size={4} lineHeight={1.5} textFont="primary">
              Fin
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
