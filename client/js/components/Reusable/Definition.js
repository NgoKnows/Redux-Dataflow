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
                        return (
                            <div key={value}>
                                {value}<br/>
                            </div>
                        )
                    })}
                </ReactTooltip>
            </span>
        );
    }
}

const STYLES = {
    word : {
        textDecoration : 'underline',
        cursor         : 'pointer'
    }
};

Definition.propTypes = {
    word       : PropTypes.string.isRequired,
    definition : PropTypes.array.isRequired
};

export default Radium(Definition);
