import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: '0',
    marginTop: '30px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50vh',
    padding: '10%',
    borderRadius: '10px',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '-4px -3px 12px 2px rgba(0,0,0,0.43)',
    [theme.breakpoints.down('xs')]: {
      height: '50vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '40vh',
    },
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  img: {
    width: '250px',
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
    },
    alignSelf: 'center',
  },

  actions: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
  },
}))

export default styles;