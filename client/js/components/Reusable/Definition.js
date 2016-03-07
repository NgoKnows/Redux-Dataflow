import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import ReactTooltip from 'react-tooltip'

class Definition extends Component {
    render() {
        const { word, definition } = this.props;

        return (
            <span>
                <span style={STYLES.word} data-tip data-for={word}>{word}</span>
                <ReactTooltip
                    id={word}
                    place="top"
                    type="info"
                    effect="solid"
                    class="definition"
                    multiline={true}
                >
                    {definition.map((value) => {
                        return <div>{value}<br/></div>
                    })}
                </ReactTooltip>
            </span>
        );
    }
}

const STYLES = {
    word: {
        textDecoration: 'underline',
        cursor: 'pointer'
    }
};

Definition.propTypes = {};
Definition.defaultProps = {};

export default Radium(Definition);
