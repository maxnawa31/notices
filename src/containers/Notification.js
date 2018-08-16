import Notification from '../components/Notification';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  mode: state.mode,
  color: state.color
})

export default connect(mapStateToProps, null)(Notification);
