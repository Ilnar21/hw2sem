import React from "react";
import {Link} from "react-router-dom";

const cars = [
    // Lamborghini
    { id: 1, brand: "Lamborghini", name: "Lamborghini Urus", price: "232K", rate: "$42/h", recommend: "94%", img: "https://file.aiquickdraw.com/imgcompressed/img/compressed_f71fac8651cb239b369c8774380e31a7.webp", description: "The Lamborghini Urus is a high-performance luxury SUV with striking design and incredible power.", specs: ["4.0L V8 Twin-Turbo", "641 HP", "8-Speed Automatic", "AWD"], owner: "John Doe", contact: "123-456-7890" },
    { id: 2, brand: "Lamborghini", name: "Lamborghini Aventador", price: "500K", rate: "$55/h", recommend: "98%", img: "https://realluxury.it/media/tz_portfolio_plus/article/cache/noleggia-lamborghini-aventador-svj-roadster-62-7_o.jpg", description: "The Lamborghini Aventador is a flagship supercar known for its stunning looks and ferocious performance.", specs: ["6.5L V12", "730 HP", "7-Speed Dual Clutch", "AWD"], owner: "Jane Smith", contact: "987-654-3210" },
    { id: 3, brand: "Lamborghini", name: "Lamborghini Huracán", price: "350K", rate: "$48/h", recommend: "96%", img: "https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-2plo-p-kartinki-lamba-na-prozrachnom-fone-4.png", description: "The Lamborghini Huracán is a sleek, high-performance sports car with aggressive styling.", specs: ["5.2L V10", "610 HP", "7-Speed Dual Clutch", "AWD"], owner: "Carlos Mendez", contact: "345-678-9012" },
    { id: 4, brand: "Lamborghini", name: "Lamborghini Revuelto", price: "650K", rate: "$70/h", recommend: "99%", img: "https://lamborghiniporrentruy.com/content/uploads/2024/11/revuelto-vueensemble-strict2.png", description: "A high-performance hybrid supercar from Lamborghini, featuring stunning speed and futuristic design.", specs: ["6.5L V12 Hybrid", "1015 HP", "8-Speed Dual Clutch", "AWD"], owner: "Sarah Johnson", contact: "567-890-1234" },
    { id: 5, brand: "Lamborghini", name: "Lamborghini Gallardo", price: "180K", rate: "$30/h", recommend: "87%", img: "https://www.pngplay.com/wp-content/uploads/13/Lamborghini-Galardo-Transparent-Image.png", description: "The Lamborghini Gallardo offers a thrilling driving experience with sharp handling and aggressive styling.", specs: ["5.2L V10", "502 HP", "6-Speed Manual", "AWD"], owner: "Michael Green", contact: "678-123-4567" },
    { id: 6, brand: "Lamborghini", name: "Lamborghini Sesto Elemento", price: "2M", rate: "$500/h", recommend: "100%", img: "https://www.rcobchod.cz/UserFiles/products/middle/102/rcs_2510_rastar-rc-auto-lamborghini-sesto-elemento-114-cerna_1.jpg", description: "The Lamborghini Sesto Elemento is a limited-edition supercar made to deliver pure performance.", specs: ["5.2L V10", "570 HP", "6-Speed Manual", "AWD"], owner: "Albert Marks", contact: "789-234-5678" },
    { id: 7, brand: "Lamborghini", name: "Lamborghini Veneno", price: "4M", rate: "$700/h", recommend: "100%", img: "https://content.scalecar.ru/clipart/29915/o20a3FQ09kLWOHzC-89.jpg", description: "Lamborghini Veneno is an extreme hypercar with unparalleled speed and agility.", specs: ["6.5L V12", "740 HP", "7-Speed Automated", "AWD"], owner: "Lucas Brown", contact: "890-345-6789" },
    { id: 8, brand: "Lamborghini", name: "Lamborghini Diablo", price: "250K", rate: "$40/h", recommend: "95%", img: "https://www.pngplay.com/wp-content/uploads/13/Lamborghini-Diablo-Transparent-Images.png", description: "A legendary Lamborghini supercar that set the standard for luxury and speed.", specs: ["5.7L V12", "485 HP", "5-Speed Manual", "AWD"], owner: "David White", contact: "901-456-7890" },
    { id: 9, brand: "Lamborghini", name: "Lamborghini Murcielago", price: "300K", rate: "$45/h", recommend: "97%", img: "https://radiogear.ru/media/catalog/product/cache/1/image/600x440/9df78eab33525d08d6e5fb8d27136e95/i/m/radioupravlyaemyj-avtomobil-mjx-lamborghini-murcielago-lp640-roadster-1-14-3.jpg", description: "The Murcielago offers exceptional performance and dramatic styling.", specs: ["6.2L V12", "580 HP", "6-Speed Manual", "AWD"], owner: "Sophia Miller", contact: "234-567-8901" },
    { id: 10, brand: "Lamborghini", name: "Lamborghini Countach", price: "1M", rate: "$400/h", recommend: "99%", img: "https://cdn.dealeraccelerate.com/bagauction/11/1919/113149/1920x1440/1987-lamborghini-countach-5000-qv", description: "An iconic Lamborghini supercar known for its sharp edges and aggressive styling.", specs: ["5.2L V12", "455 HP", "5-Speed Manual", "AWD"], owner: "John Brown", contact: "456-789-0123" },

    // Rolls-Royce
    { id: 11, brand: "Rolls-Royce", name: "Rolls-Royce Phantom", price: "600K", rate: "$120/h", recommend: "99%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Rolls-Royce Phantom is a symbol of luxury and elegance, offering impeccable comfort and refinement.", specs: ["6.75L V12", "563 HP", "8-Speed Automatic", "RWD"], owner: "William Knight", contact: "567-890-1234" },
    { id: 12, brand: "Rolls-Royce", name: "Rolls-Royce Cullinan", price: "650K", rate: "$130/h", recommend: "98%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Rolls-Royce Cullinan is an ultra-luxurious SUV with a serene driving experience.", specs: ["6.75L V12", "563 HP", "8-Speed Automatic", "AWD"], owner: "Olivia Harris", contact: "678-901-2345" },
    { id: 13, brand: "Rolls-Royce", name: "Rolls-Royce Ghost", price: "500K", rate: "$100/h", recommend: "97%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Ghost represents the epitome of modern luxury, with elegant styling and advanced technology.", specs: ["6.6L V12", "563 HP", "8-Speed Automatic", "RWD"], owner: "Ethan Taylor", contact: "789-012-3456" },
    { id: 14, brand: "Rolls-Royce", name: "Rolls-Royce Wraith", price: "450K", rate: "$90/h", recommend: "96%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "A grand coupe offering an unparalleled blend of performance and opulence.", specs: ["6.6L V12", "624 HP", "8-Speed Automatic", "RWD"], owner: "Ava Moore", contact: "890-123-4567" },
    { id: 15, brand: "Rolls-Royce", name: "Rolls-Royce Dawn", price: "500K", rate: "$110/h", recommend: "97%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Rolls-Royce Dawn is an elegant convertible that combines luxury and open-air excitement.", specs: ["6.6L V12", "563 HP", "8-Speed Automatic", "RWD"], owner: "Liam Harris", contact: "901-234-5678" },
    { id: 16, brand: "Rolls-Royce", name: "Rolls-Royce Silver Ghost", price: "1.5M", rate: "$500/h", recommend: "100%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "A vintage model with a storied history, the Silver Ghost is a true collector's item.", specs: ["7.4L V8", "40 HP", "4-Speed Manual", "RWD"], owner: "Charlotte Robinson", contact: "234-567-8901" },
    { id: 17, brand: "Rolls-Royce", name: "Rolls-Royce Corniche", price: "350K", rate: "$80/h", recommend: "94%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Rolls-Royce Corniche is a luxury convertible combining classic styling and modern comfort.", specs: ["6.75L V8", "200 HP", "3-Speed Automatic", "RWD"], owner: "Mason Lee", contact: "345-678-9012" },
    { id: 18, brand: "Rolls-Royce", name: "Rolls-Royce Park Ward", price: "700K", rate: "$150/h", recommend: "98%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Park Ward represents timeless elegance with its spacious interior and powerful engine.", specs: ["6.75L V12", "350 HP", "4-Speed Automatic", "RWD"], owner: "Sophia Jackson", contact: "456-789-0123" },
    { id: 19, brand: "Rolls-Royce", name: "Rolls-Royce Seraph", price: "400K", rate: "$85/h", recommend: "96%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Rolls-Royce Seraph combines luxury, sophistication, and incredible performance.", specs: ["5.4L V12", "322 HP", "4-Speed Automatic", "RWD"], owner: "Benjamin King", contact: "567-890-1234" },
    { id: 20, brand: "Rolls-Royce", name: "Rolls-Royce Camargue", price: "500K", rate: "$100/h", recommend: "97%", img: "https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG12.png", description: "The Rolls-Royce Camargue is a luxurious and rare vehicle, offering refined power and comfort.", specs: ["6.75L V8", "211 HP", "3-Speed Automatic", "RWD"], owner: "Emma Wilson", contact: "678-901-2345" }
];



const CarList = ({ brand, searchTerm = "" }) => {
    const filteredCars = cars.filter((car) => {
        const matchesBrand = brand ? car.brand === brand : true;
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesBrand && matchesSearch;
    });

    return (
        <div className="cars">
            {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                    <div key={car.id} className="car-card">
                        <Link to={`/car/${car.id}`}>
                            <h5>{car.recommend} Recommend</h5>
                            <img src={car.img} alt={car.name} />
                            <h3>{car.name}</h3>
                            <p>{car.price}</p>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="no-results">No cars found.</p>
            )}
        </div>
    );
};


export { cars };
export default CarList;
