/*
By default, Klaro will load the config from a global 'klaroConfig' variable. You
can change this by specifying the 'data-config' attribute on your script:
<script src="klaro.js" data-config="myConfigVariableName" /> You can also
disable auto-loading of the consent notice by adding 'data-no-auto-load=true' to
the script tag.
*/
var klaroConfig = {

    /*
    If set to `true`, Klaro will render the texts given in the
    `consentModal.description` and `consentNotice.description` translations as HTML.
    This enables you to e.g. add custom links or interactive content.
    */
    htmlTexts: false,

    /*
    You can change the cookie domain for the consent manager itself. Use this if you
    want to get consent once for multiple matching domains. By default, Klaro will
    use the current domain. Only relevant if 'storageMethod' is set to 'cookie'.
    */
    // cookieDomain: '.about-orkan.de',

    /*
    You can also set a custom expiration time for the Klaro cookie. By default, it
    will expire after 30 days. Only relevant if 'storageMethod' is set to 'cookie'.
    */
    cookieExpiresAfterDays: 30,

    /*
    You can specify a link to your privacy policy here (relative or absolute), which
    will then be shown in the notice and modal. You can also specify an object with
    language-specific links and an optional fallback using the 'default' key:
    privacyPolicy : {de: "/#datenschutz", en: "/#privacy", default: "/#privacy" },
    */
    privacyPolicy: '/datenschutz',

    /*
    Defines the default state for applications in the consent modal (true=enabled by
    default). You can override this setting in each app.
    */
    default: false,

    /*
    If 'mustConsent' is set to 'true', Klaro will directly display the consent
    manager modal and not allow the user to close it before having actively
    consented or declined the use of third-party applications.
    */
    mustConsent: false,

    /*
    Setting 'acceptAll' to 'true' will show an "accept all" button in the notice and
    modal, which will enable all third-party apps if the user clicks on it. If set
    to 'false', there will be an "accept" button that will only enable the apps that
    are enabled in the consent modal.
    */
    acceptAll: true,

    /*
    Setting 'hideDeclineAll' to 'true' will hide the "decline" button in the consent
    modal and force the user to open the modal in order to change his/her consent or
    disable all third-party apps. We strongly advise you to not use this feature, as
    it opposes the "privacy by default" and "privacy by design" principles of the
    GDPR (but might be acceptable in other legislations such as under the CCPA)
    */
    hideDeclineAll: false,

    /*
    Setting 'hideLearnMore' to 'true' will hide the "learn more / customize" link in
    the consent notice. We strongly advise against using this under most
    circumstances, as it keeps the user from customizing his/her consent choices.
    */
    hideLearnMore: false,

    /*
    You can overwrite existing translations and add translations for your app
    descriptions and purposes. See `src/translations/` for a full list of
    translations that can be overwritten:
    https://github.com/KIProtect/klaro/tree/master/src/translations
    */
    translations: {
        de: {
            consentNotice: {
                extraHTML: "<p>test</p>",
            },
            consentModal: {
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie ' + 
                    'sammeln.',
            },
            inlineTracker: {
                description: 'Beispiel für ein Inline-Tracking Skript',
            },
            externalTracker: {
                description: 'Beispiel für ein externes Tracking Skript',
            },
            adsense: {
                description: 'Anzeigen von Werbeanzeigen (Beispiel)',
                title: 'Google AdSense Werbezeugs',
            },
            matomo: {
                description: 'Sammeln von Besucherstatistiken',
            },
            camera: {
                description:
                    'Eine Überwachungskamera (nur ein Beispiel zu IMG-Tags)',
            },
            cloudflare: {
                description: 'Schutz gegen DDoS-Angriffe',
            },
            intercom: {
                description:
                    'Chat Widget & Sammeln von Besucherstatistiken (nur ein Beispiel)',
            },
            mouseflow: {
                description: 'Echtzeit-Benutzeranalyse (nur ein Beispiel)',
            },
            googleFonts: {
                description: 'Web-Schriftarten von Google gehostet',
            },

            /*
            You should also define translations for every purpose you define in the 'apps'
            section.
            */
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Anzeigen von Werbung',
                styling: 'Styling',
            },
        },
        en: {
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you. ' + 
                    'Entries marked as "Example" are just for demonstration purposes and are not ' + 
                    'really used on this website.',
            },
            inlineTracker: {
                description: 'Example of an inline tracking script',
            },
            externalTracker: {
                description: 'Example of an external tracking script',
            },
            adsense: {
                description: 'Displaying of advertisements (just an example)',
                title: 'Google Adsense Advertisement',
            },
            matomo: {
                description: 'Collecting of visitor statistics',
            },
            camera: {
                description:
                    'A surveillance camera (just an example for an IMG tag)',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks',
            },
            intercom: {
                description:
                    'Chat widget & collecting of visitor statistics (just an example)',
            },
            mouseflow: {
                description: 'Real-Time user analytics (just an example)',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
            },
        },
    },

    /*
    Here you specify the third-party apps that Klaro will manage for you.
    */
    apps: [
        {

            /*
            Each app must have a unique name. Klaro will look for HTML elements with a
            matching 'data-name' attribute to identify elements that belong to this app.
            */
            name: 'matomo',

            /*
            If 'default' is set to 'true', the app will be enabled by default. This
            overrides the global 'default' setting.
            */
            default: true,

            /*
            The title of you app as listed in the consent modal. You can also specify
            translated app titles in the 'translations' section. In that case, you need to
            leave the title attribute here unspecified.
            */
            title: 'Matomo/Piwik',

            /*
            The purpose(s) of this app that will be listed on the consent notice. Do not
            forget to add translations for all purposes you list here.
            */
            purposes: ['analytics'],

            cookies: [
                /*
                you an either only provide a cookie name or regular expression (regex) or a list
                consisting of a name or regex, a path and a cookie domain. Providing a path and
                domain is necessary if you have apps that set cookies for a path that is not
                "/", or a domain that is not the current domain. If you do not set these values
                properly, the cookie can't be deleted by Klaro, as there is no way to access the
                path or domain of a cookie in JS. Notice that it is not possible to delete
                cookies that were set on a third-party domain, or cookies that have the HTTPOnly
                attribute: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#new-
                cookie_domain
                */

                /*
                This rule will match cookies that contain the string '_pk_' and that are set on
                the path '/' and the domain 'klaro.kiprotect.com'
                */
                [/^_pk_.*$/, '/', 'klaro.kiprotect.com'],

                /*
                Same as above, only for the 'localhost' domain
                */
                [/^_pk_.*$/, '/', 'localhost'],

                /*
                This rule will match all cookies named 'piwik_ignore' that are set on the path
                '/' on the current domain
                */
                'piwik_ignore',
            ],

            /*
            You can define an optional callback function that will be called each time the
            consent state for the given app changes. The consent value will be passed as the
            first parameter to the function (true=consented). The `app` config will be
            passed as the second parameter.
            */
            callback: function(consent, app) {
                console.log(
                    'User consent for app ' + app.name + ': consent=' + consent
                );
            },

            /*
            If 'required' is set to 'true', Klaro will not allow this app to be disabled by
            the user. Use this for apps that are always required for your website to
            function (e.g. shopping cart cookies).
            */
            required: false,

            /*
            If 'optOut' is set to 'true', Klaro will load this app even before the user has
            given explicit consent. We strongly advise against this.
            */
            optOut: false,

            /*
            If 'onlyOnce' is set to 'true', the app will only be executed once regardless
            how often the user toggles it on and off. This is relevant e.g. for tracking
            scripts that would generate new page view events every time Klaro disables and
            re-enables them due to a consent change by the user.
            */
            onlyOnce: true,
        }
    ],

    /*
    You can define an optional callback function that will be called each time the
    consent state for any given app changes. The consent value will be passed as the
    first parameter to the function (true=consented). The `app` config will be
    passed as the second parameter.
    */
    callback: function(consent, app) {

        /*
        You can define an optional callback function that will be called each time the
        consent state for any given app changes. The consent value will be passed as the
        first parameter to the function (true=consented). The `app` config will be
        passed as the second parameter.
        */
        console.log(
            'User consent for app ' + app.name + ': consent=' + consent
        );
    },

};