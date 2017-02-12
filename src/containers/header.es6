/* header.es6 */
import { connect } from 'react-redux';
import { Header } from '../components/header/header';

// === Redux Mappings ===
const mapStateToProps = ({ config }) => ({
  config,
});

const mapDispatchToProps = dispatch => ({});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
