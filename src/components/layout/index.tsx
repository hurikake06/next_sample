import * as React from 'react';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import styles from './styles';

interface Props extends WithStyles<typeof styles> {
  classes: any,
  children: any,
}

const Layout = ({classes, children}: Props) => (
  <>
    <div>〜〜〜コンポーネントごとのレイアウト〜〜〜</div>
    <div className={classes.main_content} style={{color: 'green'}}>
      {children}
    </div>
  </>
);

export default withStyles(styles)(Layout);
