import Notification from '../components/Notification';
import { connect } from 'react-redux';
import { notifications } from '../store/textTransform'
import { removeNotification } from '../store/textTransform'

const mapStateToProps = state => ({
  mode: state.notifications.mode,
  color: state.notifications.color,
  isLoading: state.textTransform.isLoading
})

export default connect(mapStateToProps, {removeNotification})(Notification);
