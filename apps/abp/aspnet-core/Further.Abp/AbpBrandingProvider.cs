using Microsoft.Extensions.Localization;
using Further.Abp.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Further.Abp;

[Dependency(ReplaceServices = true)]
public class AbpBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<AbpResource> _localizer;

    public AbpBrandingProvider(IStringLocalizer<AbpResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
