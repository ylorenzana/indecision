import React from 'react';

const Action = (props) => (
    <div>
      <button 
        className="big-button"
        onClick={props.pickOption}
        disabled={!props.hasOptions}
      >Roll the dice
      </button>
    </div>
);

export default Action;
