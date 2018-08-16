import Notification from '../components/Notification';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  mode: state.notifications.mode,
  color: state.notifications.color
})

export default connect(mapStateToProps, null)(Notification);
