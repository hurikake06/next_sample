import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles'

interface Props extends WithStyles<typeof styles> {
  classes: any,
  children: any,
  foo: string
}

const Layout = ({ classes, children, foo }: Props) => (
  <>
    <div>〜〜〜　コンポーネントごとのレイアウトa　{`aaa:${foo}`}〜〜〜</div>
    <div className={classes.main_content} style={{ color: 'green' }}>{children}</div>
  </>
);

export default withStyles(styles)(Layout);
