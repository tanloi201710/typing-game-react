import { Button, Card, CardContent, Paper, TextField, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CachedIcon from '@material-ui/icons/Cached';
import useStyles from "./styles";
import { useState } from "react";
import * as data from './components/quoteData/QuoteData';

function App() {
  const classes = useStyles();
  const [quoteIndex,setQuoteIndex] = useState(0);
  const [typedwords,setTypedWords] = useState([]);
  console.log('reload');

  let words = [];
  let wordIndex = 0;

  const [quotes] = [data.quotes];
  const quote = quotes[quoteIndex];
  words = quote.split(' ');

  const quoteElement = document.getElementById('quoteElement');
  const typedValueElement = document.getElementById('textField');
  const resetButton = document.getElementById('reset');

  const randomIndex = () => {
    return Math.floor(Math.random()* data.lengthQuote);
  };

  const handleClose = () => {
  };

  const handlePlay = () => {
    if(quoteElement.childNodes[0].className){
      quoteElement.childNodes[0].className += (' ' + classes.highlight);
    }
    typedValueElement.focus();
    resetButton.classList.add('Mui-disabled');
  };

  const handleTyping = (e) => {
    const currentWord = words[wordIndex];

    const typedValue = e.target.value;
    if(typedValue === currentWord && wordIndex === words.length - 1) {
      const message = `CONGRATULATION! You finished`;
      alert(message);
    } else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      typedValueElement.value = '';
      wordIndex++;
      quoteElement.childNodes[wordIndex].className += (' ' + classes.highlight);
    } else if(currentWord.startsWith(typedValue)) {
      typedValueElement.classList.remove(classes.error);
    } else {
      typedValueElement.classList.add(classes.error);
    }

  }

  const handleReload = () => {
    let newIndex = randomIndex();
    while(newIndex === quoteIndex) {
      newIndex = randomIndex();
    };
    setQuoteIndex(newIndex);
    wordIndex = 0;
  };

  return (
    <div className={classes.container}>
      <Typography variant="h2" gutterBottom >Typing Game!</Typography>
      <Card className={classes.card}>
        <div className={classes.card_header}>
          <Typography className={classes.timer}>1:00</Typography>
          <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        </div>
        <CardContent>
          <Paper id="quoteElement" variant="outlined" className={classes.paper}>
              {words.map((word) => { return (
                  <Typography 
                    variant="body1" 
                    color="textSecondary" 
                    key={word._id}
                    className={classes.word}
                  >
                    {`${word}`}&nbsp;
                  </Typography>
              ) })}
          </Paper>
        </CardContent>
        <div className={classes.input}>
          <TextField id="textField" fullWidth variant="outlined" onChange={handleTyping} />
        </div>
        <div className={classes.actions}>
          <Button 
            color="primary" 
            className={classes.button}
            onClick={handlePlay}
            variant="outlined"
            style={{ marginRight: '10px' }}
          >
            <PlayCircleOutlineIcon />
          </Button>
          <Button 
            color="secondary" 
            className={classes.button}
            onClick={handleReload}
            variant="outlined"
            id="reset"
          >
            <CachedIcon />
          </Button>
        </div>
      </Card>
      
    </div>
  );
}

export default App;
