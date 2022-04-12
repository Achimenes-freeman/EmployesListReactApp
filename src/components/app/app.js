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
                {name:'Alena R.', salary: 3000, increase:true, like: true, id: 1},
                {name:'Vadim Sh.', salary: 1000, increase:false, like: false, id: 2},
                {name:'Dmitry G.', salary: 800, increase:true, like: false, id: 3}
            ],
            term: '',
            filter: 'allEmp'
        };
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterEmp = (items, filter) => {
        switch(filter) {
            case 'allEmp':
                return items;
            case 'allIncrease':
                return items.filter(item => item.increase)
            case 'allSalary':
                return items.filter(item => item.salary > 1000)
            default:
                return items;     
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    onChangeSalary = (id, value) => {
        value = +value.slice(0, -1);
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: value}
                }
                return item;
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state;

        const searchVisibleData = this.searchEmp(data, term);
        const filterVisibleData = this.filterEmp(searchVisibleData, filter);

        return(
            <div className="app">
                <AppInfo data={data}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        onUpdateFilter={this.onUpdateFilter}
                        filter={filter}/>
                </div>
    
                <EmpList 
                    data={filterVisibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}/>
                <EmpAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;