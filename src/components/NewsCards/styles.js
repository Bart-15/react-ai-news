import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    container : {
        padding: '0 5%',
        width:'100%',
        margin:'0',
        marginTop:'30px'

    },
    card : {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'45vh',
        padding:'10%',
        borderRadius:'10px',
        color:'#fff',
        cursor:'pointer',
        boxShadow:'-4px -3px 12px 2px rgba(0,0,0,0.43)'
    },
    infoCard : {
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
    }


})

export default styles;