// polyfills
import '@babel/polyfill';
import 'babel-regenerator-runtime';
import { findAndActivateStoredWidgets } from '@humany/utils';
import { DefaultContactMethodsPlugin } from '@humany/widget-adapters';
import {
    AreaComponent,
    BackLinkComponent,
    BreadcrumbsComponent,
    CloseButtonComponent,
    ContactLinkComponent,
    ContactListComponent,
    ContactMethodComponent,
    CopyrightComponent,
    EmbeddedWidgetComponent,
    GuideCategoryBrowserComponent,
    GuideCategoryDropdownComponent,
    GuideCategoryListComponent,
    GuideCategoryTreeComponent,
    GuideComponent,
    GuideListComponent,
    HeaderComponent,
    ImageLinkComponent,
    NotFoundComponent,
    NotificationListComponent,
    NotificationRowComponent,
    RelatedGuideListComponent,
    RelatedTagListComponent,
    SearchComponent,
    SettingsComponent,
    TabStopComponent,
    TagListComponent,
    WidgetHeaderComponent,
} from '@humany/widget-components';
import { ConversationComponent } from '@humany/widget-conversation';
import { bootstrap, Humany, loadImplementation } from '@humany/widget-core';
import {
    AutoScrollPlugin,
    FavoritePlugin,
    LegacyResourcesPlugin,
    MiscBehaviorPlugin,
    ModalPlugin,
    ObserverPlugin,
} from '@humany/widget-plugins';
import { routingConfigurationApi } from '@humany/widget-routing';
import { storagePolicyConfigurationApi } from '@humany/widget-services';
import { Widget } from '@humany/widget-types-grid';

// tenant name
const tenantName = 'demo';

// implementation names
const implementationNames = ['clean-v5'];

(async () => {
    // add config api extensions
    const configurationApiExtensions = [routingConfigurationApi, storagePolicyConfigurationApi];

    // create runtime
    const environment = Humany.createFromGlobal({}, { configurationApiExtensions });

    // fetch implementations
    const implementations = await Promise.all(
        implementationNames.map((implementationName) =>
            loadImplementation(
                environment,
                `https://${tenantName}.humany.net/${implementationName}`
            )
        )
    );

    // bootstrap implementations and provide default configuration
    implementations.forEach((implementation) => {
        findAndActivateStoredWidgets(implementation);

        bootstrap(implementation, (config) => {
            // register widget types
            config.types.register('@humany/grid-widget', Widget);

            // register plugins
            config
                .plugin(LegacyResourcesPlugin)
                .plugin(DefaultContactMethodsPlugin)
                .plugin(ObserverPlugin)
                .plugin(ModalPlugin)
                .plugin(FavoritePlugin)
                .plugin(BackLinkComponent)
                .plugin(BreadcrumbsComponent)
                .plugin(WidgetHeaderComponent)
                .plugin(ContactListComponent)
                .plugin(ContactMethodComponent)
                .plugin(GuideCategoryDropdownComponent)
                .plugin(GuideCategoryBrowserComponent)
                .plugin(GuideCategoryListComponent)
                .plugin(GuideCategoryTreeComponent)
                .plugin(GuideListComponent)
                .plugin(GuideComponent)
                .plugin(HeaderComponent)
                .plugin(NotificationListComponent)
                .plugin(NotificationRowComponent)
                .plugin(SearchComponent)
                .plugin(TagListComponent)
                .plugin(TabStopComponent)
                .plugin(RelatedGuideListComponent)
                .plugin(RelatedTagListComponent)
                .plugin(CopyrightComponent)
                .plugin(ContactLinkComponent)
                .plugin(CloseButtonComponent)
                .plugin(EmbeddedWidgetComponent)
                .plugin(ConversationComponent)
                .plugin(NotFoundComponent)
                .plugin(AreaComponent)
                .plugin(SettingsComponent)
                .plugin(ImageLinkComponent)
                .plugin('auto-scroll', AutoScrollPlugin)
                .plugin('misc-behavior', MiscBehaviorPlugin);
        });
    });
})();
