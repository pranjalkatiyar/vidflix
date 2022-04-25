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