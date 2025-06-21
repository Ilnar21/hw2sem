using CarsAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Подключение к PostgreSQL через строку подключения из appsettings.json
builder.Services.AddDbContext<CarContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<CarContext>();
    db.Database.Migrate();

    // Если база пустая — добавить данные
    if (!db.Cars.Any())
    {
        var cars = new List<Car>
        {
            new Car { Brand = "Lamborghini", Name = "Lamborghini Urus", Price = "232K", Rate = "$42/h", Recommend = "94%", Img = "https://file.aiquickdraw.com/imgcompressed/img/compressed_f71fac8651cb239b369c8774380e31a7.webp", Description = "The Lamborghini Urus is a high-performance luxury SUV with striking design and incredible power.", Specs = "4.0L V8 Twin-Turbo, 641 HP, 8-Speed Automatic, AWD", Owner = "John Doe", Contact = "123-456-7890" },
            new Car { Brand = "Lamborghini", Name = "Lamborghini Aventador", Price = "500K", Rate = "$55/h", Recommend = "98%", Img = "https://realluxury.it/media/tz_portfolio_plus/article/cache/noleggia-lamborghini-aventador-svj-roadster-62-7_o.jpg", Description = "The Lamborghini Aventador is a flagship supercar known for its stunning looks and ferocious performance.", Specs = "6.5L V12, 730 HP, 7-Speed Dual Clutch, AWD", Owner = "Jane Smith", Contact = "987-654-3210" },
            new Car { Brand = "Lamborghini", Name = "Lamborghini Huracán", Price = "350K", Rate = "$48/h", Recommend = "96%", Img = "https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-2plo-p-kartinki-lamba-na-prozrachnom-fone-4.png", Description = "The Lamborghini Huracán is a sleek, high-performance sports car with aggressive styling.", Specs = "5.2L V10, 610 HP, 7-Speed Dual Clutch, AWD", Owner = "Carlos Mendez", Contact = "345-678-9012" },
            new Car { Brand = "Lamborghini", Name = "Lamborghini Revuelto", Price = "650K", Rate = "$70/h", Recommend = "99%", Img = "https://lamborghiniporrentruy.com/content/uploads/2024/11/revuelto-vueensemble-strict2.png", Description = "A high-performance hybrid supercar from Lamborghini, featuring stunning speed and futuristic design.", Specs = "6.5L V12 Hybrid, 1015 HP, 8-Speed Dual Clutch, AWD", Owner = "Sarah Johnson", Contact = "567-890-1234" },

            // Добавь остальные машины аналогично, по примеру выше
        };

        db.Cars.AddRange(cars);
        db.SaveChanges();
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
