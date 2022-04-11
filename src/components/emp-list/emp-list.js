import EmpListItem from '../emp-list-item/emp-list-item';

import './emp-list.css';

const EmpList = ({data, onDelete}) =>{

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmpListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;