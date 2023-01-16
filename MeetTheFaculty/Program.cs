
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var settings = builder.Configuration.GetSection("ApplicationSettings");

//builder.Services.AddSingleton(GraphDatabase.Driver("neo4j://localhost:7687", AuthTokens.Basic("neo4j", "jelena00")));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
