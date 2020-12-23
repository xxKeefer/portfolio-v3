import React from "react";
import theme from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Navbar, DisplaySection, ContentCard, ProjectCard } from "./components";
import { HeroSection } from "./components";
import { Container, Grid } from "@material-ui/core";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

//Make font awesome available everywhere in App
library.add(fab, fas);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar></Navbar>
        <Container>
          <Grid container alignContent="space-around">
            <Grid item xs={12}>
              <DisplaySection
                hero={true}
                title={{
                  pre: "Daniel John ",
                  accent: "Keefer ",
                  etc: "",
                }}
                subtitle="Professional Web Wizard for Hire."
              >
                <HeroSection></HeroSection>
              </DisplaySection>
            </Grid>
            <Grid item xs={12}>
              <DisplaySection
                title={{
                  pre: "Spells and ",
                  accent: "power ",
                  etc: "at my fingertips.",
                }}
                subtitle="Take a peak at the magic in my spellbook."
              >
                <ContentCard
                  title="Git and Github"
                  description="Super important skill to have. I love being able to experiment on different branches and have the confidence that I can revert all changes when I need to. Additionally being able to share my code online is awesome."
                  faLib="fab"
                  faIcon="github"
                />
                <ContentCard
                  title="Ruby and Rails"
                  description="I love the syntax of Ruby and just  being able to write what I am think in essentially human readable language and have it just work. Also, knowing there is a 'Rails Way' to refer to really gives me confidence that i am writing exceptional code."
                  faLib="fas"
                  faIcon="gem"
                />
                <ContentCard
                  title="React"
                  description="I have written a few little apps now with React including this website. I was lucking enough to start with Hooks already being a thing. I really love that I can use React to write SPA, leave server management behind with JAMstack and even go on to write react-native apps!"
                  faLib="fab"
                  faIcon="react"
                />
                <ContentCard
                  title="Node.js"
                  description="I find my self more orientated to Back End work as I love getting code to actual DO things. Spending a lot of time getting a button aligned is kind of tedious. Connecting multiple API's together to make someone's business run smoother gives me the fizz."
                  faLib="fab"
                  faIcon="node-js"
                />
                <ContentCard
                  title="Mocha and Chai"
                  description="When it comes to testing my go to is Mocha and Chai in combination with Supertest and Sinon, while I have used Jest before I just like Mocha and Chai better. I want to spend more time getting better at CD/CI and other DevOps stuff in the future."
                  faLib="fas"
                  faIcon="coffee"
                />
                <ContentCard
                  title="Databases"
                  description="I have used both, I prefer a noSQL option as it provides more flexibility and especially with Mongo data structure looking so similar to JSON it makes it really intuitive I feel."
                  faLib="fas"
                  faIcon="database"
                />
                <ContentCard
                  title="Cloud Services"
                  description="I like to host my SPA's on Netlify and my API's on Heroku. I have used AWS S3 and Cloudinary to host images before. I am familiar with both Stripe and Square for processing payments and have dabbled with Auth0 for authentication."
                  faLib="fas"
                  faIcon="cloud-upload-alt"
                />
              </DisplaySection>
            </Grid>
            <Grid item xs={12}>
              <DisplaySection
                title={{
                  pre: "",
                  accent: "Works",
                  etc: "of wonder and splendour!",
                }}
                subtitle="A collection of things that I have poured my heart into."
              >
                <ProjectCard
                  project="Portfolio Version One"
                  stack="HTML - CSS - Vanilla JS"
                  details="MAR 2020 - SOLE DEVELOPER"
                  imgSrc="https://res.cloudinary.com/xxkeefer/image/upload/v1608212076/personal-website/portfolio-v1_qq2jy3.png"
                  description="The first iteration of this website, designed to meet the criteria of the assignment set to me by Coder Academy at the time."
                  links={{
                    github: "https://github.com/xxKeefer/portfolio",
                    www: "https://xxkeefer.netlify.app/",
                  }}
                ></ProjectCard>
                <ProjectCard
                  project="Plus Points Calculator"
                  stack="React Javascript"
                  details="APR 2020 - SOLE DEVELOPER"
                  imgSrc="https://res.cloudinary.com/xxkeefer/image/upload/v1608212074/personal-website/ppcalc-clip_qcd7ul.png"
                  description="A Calculator that helps customers calculate the time it'll take to save Telstra Plus Points.Current Points: How many you have,Monthly Spend: The cost of your typical bill,Product Points: The points cost of the item you want,Bonus Points: the points from a bonus offer your taking up if there is one."
                  links={{
                    github: "https://github.com/xxKeefer/plus-points-calc",
                    www: "https://ppcalc.herokuapp.com/",
                  }}
                ></ProjectCard>
                <ProjectCard
                  project="Simple React Pokedex"
                  stack="React - API's"
                  details="MAY 2020 - SOLE DEVELOPER"
                  imgSrc="https://res.cloudinary.com/xxkeefer/image/upload/v1608212074/personal-website/pokedex_tpl7ac.png"
                  description="Just a fun little play around with async code using the axios library to fetch data from the PokeAPI and dynamically render react components with the information retrieved."
                  links={{
                    github: "https://github.com/xxKeefer/react-pokedex",
                    www: "",
                  }}
                ></ProjectCard>
                <ProjectCard
                  project="Party Playlist Maker"
                  stack="Vanilla JS - Node JS"
                  details="SEP 2020 - BACKEND DEVELOPER"
                  imgSrc="https://res.cloudinary.com/xxkeefer/image/upload/v1608215603/personal-website/PPMv1_vumrzv.png"
                  description="While working with a partner over the course of three days we managed to build this little Javascript app. Built with Node and Vanilla Javascript, it collects Spotify user data with Spotify’s web API, displays songs that two or more playlists have in common and shows a data visualisation of song data within the playlist."
                  links={{
                    github:
                      "https://github.com/xxKeefer/spotify-party-playlist",
                    www: "https://spotify-party-playlist-maker.netlify.app/",
                  }}
                ></ProjectCard>
                <ProjectCard
                  project="PPMv2"
                  stack="MERN STACK"
                  details="OCT 2020 - FULL STACK DEVELOPER"
                  imgSrc="https://res.cloudinary.com/xxkeefer/image/upload/v1608215677/personal-website/PPMv2_yfecif.png"
                  description="The first time around we were told not to use React for Party Playlist Maker the second time we decided to go for it. Deployed the Front to Netlify and the API to Heroku. Working with the same partner over another three day sprint we complete rewrote the app to be React based."
                  links={{
                    github: "https://github.com/xxKeefer/ppm-v2",
                    www: "https://ppmv2.netlify.app/",
                  }}
                ></ProjectCard>
              </DisplaySection>
            </Grid>
            <Grid item xs={12}>
              <DisplaySection
                title={{
                  pre: "Does",
                  accent: "a wizard",
                  etc: "even have spare time?",
                }}
                subtitle="A little bit more about me and what motivates me."
              >
                <ContentCard
                  title="My Family"
                  description="I married the love of my life Iris and have two beautiful little girls Emilia and Imogen. A lot of my motivation to perform at work is so I can provide for them. We like trips to Zoos, the Beach and various theme parks on the weekends."
                  faLib="fas"
                  faIcon="hand-holding-heart"
                />
                <ContentCard
                  title="Star Trek"
                  description="I have watched Star trek since I was young. I'm not young enough to be a Kirk fan, but Jean Luc Picard has been an idol of mine since for ever. Thwarting foes with calm logical thinking, strong leadership, human kindness and superior wit and intellect. He has always inspired me to 'boldly go' where ever I go."
                  faLib="fas"
                  faIcon="hand-spock"
                />
                <ContentCard
                  title="Linux Tinkerer"
                  description="I have recently made the switch from Windows, the only thing I use it for now is games that can't run on Linux. I am especially fond of Ubuntu based Distros, I'm currently enjoying Pop_os 20.04 on my desktop. I really enjoy the greater customization option available to me and its just easier to develop on Linux"
                  faLib="fab"
                  faIcon="ubuntu"
                />
                <ContentCard
                  title="Board Games"
                  description="While DnD is technically a 'Board Game', I am also a bit of a geek for boardgames. I hafve grown out of Monopoly and moved on to bigger more intricate games like Scythe, Twilight Imperium, Blood on the Clock Tower and GloomHaven to name a few. It helps me maintain friendships and gives my friends and I a reason to hang out."
                  faLib="fas"
                  faIcon="dice"
                />
                <ContentCard
                  title="Video Games"
                  description="While there are a few games I like to play with my friends, my game time is usually more about me. I love Overwatch and am also currently playing through CyberPunk 2077. I like to play competitive games as well as RPG's to unwind. All of my games are on PC."
                  faLib="fas"
                  faIcon="gamepad"
                />
                <ContentCard
                  title="Philosophy"
                  description="I often find myself in those moments your mind wanders thinking about the meta of things. Why people think or feel certain ways about topics and the nature of existence to appreciating to thinking deeply about the way a piece of art was created and the minutiae of technical skill employed."
                  faLib="fas"
                  faIcon="question-circle"
                />
                <ContentCard
                  title="Dungeons & Dragons"
                  description="I have been playing DnD with the same friends I have had since highschool for more than ten years now. I love the creative story telling and drama aspects of the game as well as creative problem solving required to impress the Game Master with a clever solution to the problem he has posed to the heroic characters."
                  faLib="fas"
                  faIcon="dragon"
                />
              </DisplaySection>
            </Grid>
          </Grid>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
