import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../actions/mathTodos'

class Timer extends Component {
    constructor(props) {console.log('init');
        super(props)
    }

    syncAddHandle() {
        const { onSyncAdd } = this.props
        setTimeout(onSyncAdd, 1000)
    }

    render() {console.log('render');
        const { value, onIncrement, onDecrement, onIncrementOdd } = this.props;
        return (
            <div>
                { value }
                <button onClick={ onIncrement }>+</button>
                <button onClick={ onDecrement }>-</button>
                <button onClick={ onIncrementOdd }>increment odd</button>
                <button onClick={ this.syncAddHandle.bind(this) }>syncAdd</button>
            </div>
        )
    }
}

function mapStateToProps(state) {console.log('mapStateToProps');
    const { value } = state
    return {
        value
    }
}

// function mapDispatchToProps(dispatch) {console.log('mapDispatchToProps');
//     return {
//         onIncrement: () => dispatch(action('INCREMENT')),

//         onDecrement: () => dispatch(action('DECREMENT')),

//         onIncrementOdd: () => dispatch(action('ODD')),

//         onSyncAdd: () => dispatch(action('SYNC'))
//     }
// }

const mapDispatchToProps = {
    onIncrement: () => action('INCREMENT'),

    onDecrement: () => action('DECREMENT'),

    onIncrementOdd: () => action('ODD'),

    onSyncAdd: () => action('SYNC')
}

// function mergeProps(stateProps, dispatchProps, owerProps) {console.log('mergeProps');
//     return Object.assign({}, stateProps, dispatchProps, owerProps)
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
    // mergeProps
)(Timer)
