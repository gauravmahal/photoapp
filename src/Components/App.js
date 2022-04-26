import { connect } from "react-redux"
import Main from "./Main"
import { bindActionCreators } from 'redux'
import { removePost } from '../redux/actions'

function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators({ removePost }, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProp)(Main)

export default App