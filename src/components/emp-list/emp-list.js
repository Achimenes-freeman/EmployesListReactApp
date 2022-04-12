import EmpListItem from '../emp-list-item/emp-list-item';

import './emp-list.css';

const EmpList = ({data, onDelete, onToggleProp, onChangeSalary}) =>{

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmpListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value)}/>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;