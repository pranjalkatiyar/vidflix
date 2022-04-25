<<<<<<< HEAD
import React,{useState,useContext,useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import {Loading} from '../components'
import { Header } from "../components";
import "./styles.css";
import Row from "../components/board/Row";
import request from "../request";
import Banner from "../components/board/Banner";
import NavBar from "../components/board/NavBar";

export function BrowseContainer({slides}){

const [profile,setProfile]=useState({});

const [loading,setLoading]=useState(true);

const {firebase} = useContext(FirebaseContext);

const user=firebase.auth().currentUser;

useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },1000);
  }, [profile.displayName]);

    return profile.displayName?(
      <>
     {loading ?<Loading src={user.photoURL}/>:<Loading.ReleaseBody/>}
     <NavBar/>
      <Banner/>
      <Row title="VIDFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
      </>

    ):(<SelectProfileContainer user={user} setProfile={setProfile} />
    );
}
=======
import { Header } from "../components";
import Card from "../components/card";

<><Header src="joker1">
    <Header.Frame>
        <Header.Group>


            <Header.Logo to={ROUTES.HOME} src={logo} alt="Vidflix" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onclick={() => setCategory('series')}>Series</Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onclick={() => setCategory('films')}>Films</Header.TextLink>
        </Header.Group>

        <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>

                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                    <Header.Group>
                        <Header.Picture src={user.photoURL} />
                        <Header.TextLink>user.displayName</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.TextLink onclick={() => firebase.auth().signOut}> Sign out</Header.TextLink>
                    </Header.Group>
                </Header.Dropdown>
            </Header.Profile>
        </Header.Group>
    </Header.Frame>
    <Header.Feature>
        <Header.FeatureCallOut>Watch Joker now</Header.FeatureCallOut>
        <Header.Text>
            Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who
            co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin
            Phoenix as the Joker and provides a possible origin story for the character. Set in 1981, it follows
            Arthur Fleck, a failed clown and aspiring stand-up comedian whose descent into insanity and nihilism
            inspires a
            violent counter-cultural revolution against the wealthy in a decaying and destroyed Gotham City.
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
    </Header.Feature>
</Header><Card.Group>
        {slideRows.map((slideItem)=>
        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
        </Card>
        ))}
    </Card.Group></>
>>>>>>> d7066056d9cb6ee786a9709e7040fa67879378f8
