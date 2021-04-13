import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
  image: {
    height: '250px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTop: `4px rgb(238,49,49) solid`,
  },
  grid: {
    display: 'flex',
  },
  title: {
    fontSize: '20px',
    padding: '0 10px',
  },

  name: {
    fontSize: '19px',
    background: '#ed45d4',
    borderRadius: '5px',
    color: '#fff',
    padding: '0 15px',
    top: '-25px',
    position: 'relative',
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
  description: {
    textIndent: '30px',
  },
  activeCard: {
    borderBottom: '4px solid #fc9642',
    borderTop: 'none',
    boxShadow: '-18px -17px 0px -11px rgba(31,143,252,0.58)',
  },

})

export default styles
