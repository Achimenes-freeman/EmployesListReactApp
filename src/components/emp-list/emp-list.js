import EmpListItem from '../emp-list-item/emp-list-item';

import './emp-list.css';

const EmpList = ({data}) =>{

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmpListItem key={id} {...itemProps}/>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmpList;