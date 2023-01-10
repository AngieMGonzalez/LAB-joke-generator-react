import { Button } from 'react-bootstrap';
import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/Joker';

function Home() {
  // it needs to be an empty object bc in documentation we get back we get an object
  // joke is a state variable - state changes
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');
  const user = { displayName: 'Pal' };

  const setButton = (text) => {
    setBtnText(text);
  };

  // if it is get a joke or get another joke we call getAJoke which calls the API call
  const getAJoke = () => {
    // I DECIDE the keys of setup and punchline; setup and deliver have to match the API call
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
    });
    setButton('Get Punchline');
  };

  return (
    <div>
      <h2>Get Joked {user.displayName}!</h2>
      <Joker joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke'
        ? <Button type="button" onClick={getAJoke}>{btnText}</Button>
        : <Button type="button" onClick={() => setButton('Get Another Joke')}>{btnText}</Button>}
    </div>
  );
}

export default Home;
