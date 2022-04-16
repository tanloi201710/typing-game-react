import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useCallback, useState } from "react";

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CachedIcon from '@material-ui/icons/Cached';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import * as data from './components/quoteData/QuoteData';
import TypingBox from "./components/typingBox/TypingBox";

function App() {
  const classes = useStyles();

  const randomIndex = useCallback(() => {
    return Math.floor(Math.random()* data.lengthQuote);
  }, []);
  const defaultIndex = randomIndex();

  const [isPlaying,setIsPlaying] = useState(false);
  const [quoteIndex,setQuoteIndex] = useState(defaultIndex);

  const handlePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleReload = useCallback(() => {
    let newIndex = randomIndex();
    while(newIndex === quoteIndex) {
      newIndex = randomIndex();
    };
    setQuoteIndex(newIndex);
  }, [quoteIndex,randomIndex]);

  const onDone = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <div className={classes.container}>
      <Typography variant="h2" gutterBottom >Typing Game</Typography>
      <TypingBox 
        quoteIndex={quoteIndex}
        isPlaying={isPlaying}
        onDone={onDone}
      />
      <div className={classes.actions}>
          <Button 
            color="primary" 
            className={classes.button}
            onClick={handlePlay}
            variant="outlined"
            style={{ marginRight: '10px' }}
          >
            {isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
          </Button>
          <Button 
            color="secondary" 
            className={classes.button}
            onClick={handleReload}
            variant="outlined"
            id="reset"
            disabled={isPlaying}
          >
            <CachedIcon />
          </Button>
        </div>
    </div>
  );
}

export default App;
