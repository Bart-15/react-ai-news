import React from 'react'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import useStyles from './styles'

const NewsCard = ({article:{source, description, publishedAt, title, urlToImage, url}, i}) => {
    const classes = useStyles()

    // console.log(infoCards)
    return (
      <Card className={classes.card}>
        <CardActionArea href={url} target='_blank'>
          <CardMedia
            className={classes.image}
            image={urlToImage || 'No image available'}
          />
          <div className={classes.header}>
            <Typography variant='body2' color='textSecondary' component='h2'>
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='h2'
              className={classes.name}
            >
              {source.name}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant='h5'>
            {title}
          </Typography>
          <CardContent>
            <Typography className={classes.description} variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size='small' color='primary'>
            Read more..
          </Button>
          <Typography variant='h5' color='textSecondary'>
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    )
}

export default NewsCard
