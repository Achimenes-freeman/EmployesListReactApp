import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmpList from '../emp-list/emp-list';
import EmpAddForm from '../emp-add-form/emp-add-form';

import './app.css';

function App() {

    const data = [
        {name:'Alena R.', salary: 800, increase:true, id: 1},
        {name:'Vadim Sh.', salary: 1000, increase:false, id: 2},
        {name:'Dmitry G.', salary: 2000, increase:true, id: 3},
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmpList data={data}/>
            <EmpAddForm/>
        </div>
    );
}

export default App;