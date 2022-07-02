import React from 'react'
import { connect } from 'react-redux'
import { onIncrementiks } from './redux/store';
const Likes = (props) => {
    return (
        <div>
            <button onClick={props.onIncrementiks}>{props.like}</button>
            <button >dislike</button>
        </div>
    )
}
function mapStateToProps(state) {
    console.log(state);
    return {
        like: state.likes
    }
}
export default connect(mapStateToProps,{onIncrementiks})(Likes)