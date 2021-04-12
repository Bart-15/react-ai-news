import React, {useState, useEffect} from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles'
import { infoCards } from '../../infoCards'
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  const InfoCards = () => {
    return (
      <Grow in={checked}>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
                key={infoCard.id}
              >
                <Typography variant='h5'>{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography>
                    <strong>{infoCard.title.split(' ')[2]}</strong>
                    <br></br>
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  Try saying : {infoCard.text}{' '}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }

  if(!articles.length) {
    return (
      <>
        <div>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label={!checked ? 'How to use?' : 'Close'}
            style={{marginLeft:'40px'}}
          />
          <InfoCards />
        </div>
      </>
    )
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard article={article} i={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
