/* content.es6 */
import { connect } from 'react-redux';
import { Content } from '../components/content/content';

// === Redux Mappings ===
const mapStateToProps = ({ config }) => ({
  config,
});

const mapDispatchToProps = dispatch => ({});

export const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
