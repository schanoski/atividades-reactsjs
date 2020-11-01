import React from 'react'

export default (props) =>(
    <div>
        <div class="card-header">
            {props.header}
        </div>
        <div class="card-body">
            {props.children}
        </div>
    </div>
)