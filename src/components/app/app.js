import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpList from '../emp-list/emp-list';
import EmpAddForm from '../emp-add-form/emp-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Alena R.', salary: 3000, increase:true, id: 1},
                {name:'Vadim Sh.', salary: 1000, increase:false, id: 2},
                {name:'Dmitry G.', salary: 800, increase:true, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmpList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmpAddForm/>
            </div>
        );
    }
}

export default App;