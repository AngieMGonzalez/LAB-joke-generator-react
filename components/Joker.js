import React from 'react';
import PropTypes from 'prop-types';

export default function Joker({ joke, btnText }) {
  console.warn('Joker', joke, btnText);
  // if it is not get punch line aka if it is get another joke or get a goke, i wanna see the punchline!
  // if the bbtn is get a punch line i dont want them to see nothing i dont want them to see the punchline yet
  return (
    <>
      <h1>{joke.setup}</h1>
      <h4>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h4>
    </>
  );
}

Joker.propTypes = {
  // define the props w/ shape bec its an object
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
