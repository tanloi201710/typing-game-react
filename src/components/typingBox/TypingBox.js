import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent, Paper, TextField, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import { v4 } from 'uuid';

import * as data from '../quoteData/QuoteData';
import Word from './word/Word';
import MessageBox from '../messagebox/MessageBox';

function TypingBox({ quoteIndex, isPlaying, onDone }) {
    const classes = useStyles();
    const [isShowMsg,setIsShowMsg] = useState(true);
    let typedwords = [];

    let words = [];
    let wordIndex = 0;

    const [quotes] = [data.quotes];
    const quote = quotes[quoteIndex];
    words = quote.split(' ');

    const close = useCallback(() => {
        setIsShowMsg(false);
    }, []);

    const handleClose = () => {

    };
    const handleTyping = (e) => {
        const typedValueElement = document.getElementById('textField');
        const quoteElement = document.getElementById('quoteElement');
        const currentWord = words[wordIndex];
    
        const typedValue = e.target.value;
        if(typedValue === currentWord && wordIndex === words.length - 1) {
          const message = `CONGRATULATION! You finished`;
          onDone();
          typedValueElement.value = '';
          alert(message);
        } else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
            typedValueElement.value = '';
            const currentWordElement = quoteElement.childNodes[wordIndex];
            wordIndex++;
            typedwords = [...typedwords, currentWordElement];
            for(const wordElement of typedwords) {
                wordElement.classList.remove(classes.highlight);
                wordElement.classList.add(classes.typedWords);
            };
            quoteElement.childNodes[wordIndex].classList.add(classes.highlight);
        } else if(currentWord.startsWith(typedValue)) {
          typedValueElement.classList.remove(classes.error);
        } else {
          typedValueElement.classList.add(classes.error);
        }
    };
    
    useEffect(() => {
        if(isPlaying){
            const typedValueElement = document.getElementById('textField');
            const quoteElement = document.getElementById('quoteElement');
            quoteElement.childNodes[wordIndex].classList.add(classes.highlight);
            typedValueElement.focus();
        };
    }, [isPlaying,wordIndex,classes.highlight]);
    return (
        <>
            <Card className={classes.card}>
                <div className={classes.card_header}>
                    <Typography className={classes.timer}>1:00</Typography>
                    <CloseIcon className={classes.closeIcon} onClick={handleClose} />
                </div>
                <CardContent>
                    <Paper id="quoteElement" variant="outlined" className={classes.paper}>
                        {words.map((word) => { return (
                            <Word word={word} key={v4()} />
                        ) })}
                    </Paper>
                </CardContent>
                <div className={classes.input}>
                <TextField placeholder={isPlaying ? words[0] : 'click play button to start'} id="textField" fullWidth variant="outlined" onChange={handleTyping} />
                </div>
            </Card>
            {
                isShowMsg && <MessageBox close={close} />
            }
        </>
    )
}

export default TypingBox
