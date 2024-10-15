import React from 'react'

import './List.css'
import Card from '../Card/Card'
import {ReactComponent as Backlog} from '../../Assets/Images/Backlog.svg'
import {ReactComponent as ToDo} from '../../Assets/Images/To-do.svg'
import {ReactComponent as Inprogress} from '../../Assets/Images/in-progress.svg'
import {ReactComponent as Done} from '../../Assets/Images/Done.svg'
import {ReactComponent as Cancell} from '../../Assets/Images/Cancelled.svg'

import {ReactComponent as Nopriority} from '../../Assets/Images/No-priority.svg'
import {ReactComponent as Low} from '../../Assets/Images/Low Priority.svg'
import {ReactComponent as Medium} from '../../Assets/Images/Medium Priority.svg'
import {ReactComponent as High} from '../../Assets/Images/High Priority.svg'
import {ReactComponent as Urgent} from '../../Assets/Images/Urgent Priority colour.svg'

import {ReactComponent as Dot3} from '../../Assets/Images/3 dot menu.svg'
import {ReactComponent as Plus} from '../../Assets/Images/add.svg'



let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                    <Backlog/>
                                    </div>,
                                    'Todo': <div className="list-icon">
                                    <ToDo/>
                                    </div>,
                                    'In progress': <div className="list-icon">
                                    <Inprogress/>
                                    </div>,
                                    'Done': <div className="list-icon">
                                    <Done/>
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                    <Cancell/>
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><Nopriority/></div>,
                                    1: <div className="card-tag-icon"><Low/></div>,
                                    2: <div className="card-tag-icon"><Medium/></div>,
                                    3: <div className="card-tag-icon"><High/></div>,
                                    4: <div className="card-tag-icon"><Urgent/></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <Dot3/>
                    </div>
                    <div className="list-option-item">
                    <Plus/>
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
