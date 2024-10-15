import React from 'react'

import './Card.css'
import {ReactComponent as Nopriority} from '../../Assets/Images/No-priority.svg'
import {ReactComponent as Low} from '../../Assets/Images/Low Priority.svg'
import {ReactComponent as Medium} from '../../Assets/Images/Medium Priority.svg'
import {ReactComponent as High} from '../../Assets/Images/High Priority.svg'
import {ReactComponent as Urgent} from '../../Assets/Images/Urgent Priority.svg'
export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><Nopriority /></div>,
                        1: <div className="card-tag-icon"><Low /></div>,
                        2: <div className="card-tag-icon"><Medium/></div>,
                        3: <div className="card-tag-icon"><High/></div>,
                        4: <div className="card-tag-icon"><Urgent/></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
