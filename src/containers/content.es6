/* content.es6 */
import { connect } from 'react-redux';
import { Content } from '../components/content/content';

// === Redux Mappings ===
const mapStateToProps = ({ config, nav }) => ({
  config,
  nav,
});

const mapDispatchToProps = dispatch => ({});

export const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
