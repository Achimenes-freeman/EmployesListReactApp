import './app-info.css';

const AppInfo = ({data}) =>{
    const empIncrease = data.filter(item => item.increase);

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Achimenes</h1>
            <h2>Общее число сотрудников: {data.length} </h2>
            <h2>Премию получат: {empIncrease.length}</h2>
        </div>
    );
}

export default AppInfo;