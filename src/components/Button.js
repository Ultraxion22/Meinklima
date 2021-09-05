import React from 'react';

export default function Button(props) {
    return (
    <div>
        <button className="btn btn-danger">{props.categoria}</button>
    </div>
);

}
