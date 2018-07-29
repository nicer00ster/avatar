import React from 'react';
import Spinner from 'react-spinkit';

const Loading = () => {
  return (
    <div style={styles}>
      <Spinner name="pacman" />
    </div>
  )
}

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default Loading;
