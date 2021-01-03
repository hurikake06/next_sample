import withStyles from '@material-ui/core/styles/withStyles';

const decorate = withStyles(({ palette, spacing }) => ({
  main_content: {
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  },
}));

export default decorate