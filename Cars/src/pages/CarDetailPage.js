import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../components/CarList';



const CarDetailPage = () => {
    const { id } = useParams();
    const car = cars.find(car => car.id === parseInt(id));

    if (!car) {
        return <div className="container">Car not found</div>;
    }

    return (
        <div className="container">
            <aside className="sidebar">
                <h1 className="logo">caradver</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/cars">Assets</Link></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Sell Cars</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </nav>
                <div className="bottom-links">
                    <a href="#">Settings</a>
                    <a href="#" className="logout">Log out</a>
                </div>
            </aside>
            <main className="content">
                <div className="car-detail">
                    <div className="car-detail-image">
                        <img src={car.img} alt={car.name} />
                    </div>
                    <div className="car-detail-info">
                        <h1>{car.name}</h1>
                        <p className="price">{car.price}$</p>
                        <p className="description">{car.description}</p>
                        <div className="meta-info">
                            <p>Hourly rate: {car.rate}</p>
                            <p>Recommendation: {car.recommend}</p>
                            <p>Owner: {car.owner}</p>
                            <p>Contact: {car.contact}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CarDetailPage;
