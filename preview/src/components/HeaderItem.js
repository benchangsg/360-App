import React from 'react'

const HeaderItem = (props) => {
    return (
        <div>
            <li class="nav-item">
            <a class="nav-link" href={props.title}>
                {props.title}
                <span class="visually-hidden">(current)</span>
            </a>
            </li>
        </div>
    )
}

export default HeaderItem



