using Further.Abp.Localization;
using Volo.Abp.Application.Services;

namespace Further.Abp.Services;

/* Inherit your application services from this class. */
public abstract class AbpAppService : ApplicationService
{
    protected AbpAppService()
    {
        LocalizationResource = typeof(AbpResource);
    }
}