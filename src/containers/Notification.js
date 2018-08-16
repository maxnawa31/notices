import Notification from '../components/Notification';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  mode: state.notifications.mode,
  color: state.notifications.color,
  isLoading: state.textTransform.isLoading
})

export default connect(mapStateToProps, null)(Notification);
