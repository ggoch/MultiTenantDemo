using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Further.Abp.Data;

public class AbpDbContextFactory : IDesignTimeDbContextFactory<AbpDbContext>
{
    public AbpDbContext CreateDbContext(string[] args)
    {
        AbpEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<AbpDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new AbpDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
