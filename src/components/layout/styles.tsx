import {Theme} from '@material-ui/core/styles/createMuiTheme';
import {StyleRules} from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) : StyleRules => createStyles({
  main_content: {
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem',
    color: 'blue',
    border: 'solid 1px gray',
  },
});

export default styles;
