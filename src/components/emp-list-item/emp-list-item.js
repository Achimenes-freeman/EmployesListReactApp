import './emp-list-item.css';

const EmpListItem = ({name, salary, increase}) =>{

    const classNames = "list-group-item d-flex justify-content-between";

    return(
        <li className={increase ? classNames + " increase" : classNames}>
            <span className="list-group-item-lable">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default EmpListItem;