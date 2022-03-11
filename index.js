// polyfills
import '@babel/polyfill';
import { DefaultContactMethodsPlugin } from '@telia-ace/knowledge-widget-adapters';
import BreadcrumbsComponent from '@telia-ace/knowledge-widget-components-breadcrumbs';
import ContactLinkComponent from '@telia-ace/knowledge-widget-components-contact-link';
import ContactListComponent from '@telia-ace/knowledge-widget-components-contact-list';
import ContactMethodComponent from '@telia-ace/knowledge-widget-components-contact-method';
import GuideCategoryBrowserComponent from '@telia-ace/knowledge-widget-components-guide';
import GuideCategoryDropdownComponent from '@telia-ace/knowledge-widget-components-guide-category-browser';
import GuideCategoryListComponent from '@telia-ace/knowledge-widget-components-guide-category-dropdown';
import GuideCategoryTreeComponent from '@telia-ace/knowledge-widget-components-guide-category-list';
import GuideComponent from '@telia-ace/knowledge-widget-components-guide-category-tree';
import GuideListComponent from '@telia-ace/knowledge-widget-components-guide-list';
import NotificationListComponent from '@telia-ace/knowledge-widget-components-notification-list';
import NotificationRowComponent from '@telia-ace/knowledge-widget-components-notification-row';
import RelatedGuideListComponent from '@telia-ace/knowledge-widget-components-related-guide-list';
import RelatedTagListComponent from '@telia-ace/knowledge-widget-components-related-tag-list';
import SearchComponent from '@telia-ace/knowledge-widget-components-search';
import SettingsComponent from '@telia-ace/knowledge-widget-components-settings';
import TagListComponent from '@telia-ace/knowledge-widget-components-tag-list';
import { bootstrap, Humany, loadImplementation } from '@telia-ace/knowledge-widget-core';
import {
    FavoritePlugin,
    LegacyResourcesPlugin,
    MiscBehaviorPlugin,
} from '@telia-ace/knowledge-widget-plugins';
import AreaComponent from '@telia-ace/widget-components-area';
import BackLinkComponent from '@telia-ace/widget-components-back-link';
import CloseButtonComponent from '@telia-ace/widget-components-close-button';
import CopyrightComponent from '@telia-ace/widget-components-copyright';
import EmbeddedWidgetComponent from '@telia-ace/widget-components-embedded-widget';
import HeaderComponent from '@telia-ace/widget-components-header';
import ImageLinkComponent from '@telia-ace/widget-components-image-link';
import NotFoundComponent from '@telia-ace/widget-components-not-found';
import TabStopComponent from '@telia-ace/widget-components-tab-stop';
import WidgetHeaderComponent from '@telia-ace/widget-components-widget-header';
import { ConversationComponent } from '@telia-ace/widget-conversation';
import { AutoScrollPlugin, ModalPlugin, ObserverPlugin } from '@telia-ace/widget-plugins';
import { routingConfigurationApi } from '@telia-ace/widget-routing';
import { storagePolicyConfigurationApi } from '@telia-ace/widget-services';
import { GridWidget } from '@telia-ace/knowledge-widget-types-grid';
import { findAndActivateStoredWidgets } from '@telia-ace/widget-utilities';
import 'babel-regenerator-runtime';

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
            config.types.register('@humany/grid-widget', GridWidget);

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
