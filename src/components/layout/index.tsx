import withStyles from '@material-ui/core/styles/withStyles';
import decorate from './style'
import React from 'react';

interface props {
  classes: any,
  children: any
}

const layout = class extends React.Component<props> {
  public render() {
    const { classes, children } = this.props
    return (
      <div className={classes.main_content}>LLLL{children}</div>
    );
  }
}

export default decorate(layout);
