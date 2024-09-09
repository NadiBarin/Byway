import Card from '../card/Card';
import './categories.css'

const Categories = () => {
    return ( 
        <section className="categories">
            <div className="container">
            <div className="categories__header">
                <h2 className="title-2">Top Categories</h2>
                
            </div>
            <div className="categories__card">
                <Card title="Astrology" p="11 Courses" /> 
                <Card title="Development" p="12 Courses" />
                <Card title="Marketing" p="12 Courses" />
                <Card title="Physics" p="14 Courses" />
                
            </div>

            </div>
            

        </section>

    );
}

export default Categories;