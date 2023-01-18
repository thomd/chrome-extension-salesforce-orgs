
const SALESFORCE_HOST = /.+\.my\.salesforce\.com$/
const FORCE_HOST = /.+\.lightning\.force\.com$/

const sanitizeUrl = url => {
    url = url.replace(/\/$/, '')
    if (url.match(/^https:\/\//)) {
        return url
    }
    if (url.match(/^http:\/\//)) {
        return url.replace(/^http:/, 'https:')
    }
    return 'https://' + url
}

const extractHost = url => {
    return sanitizeUrl(url).replace(/https:\/\//, '')
}

const extractInstanceName = url => {
    url = sanitizeUrl(url)
    name = ''
    if (url.match(FORCE_HOST)) {
        name = url.replace(/https:\/\/(.+?)\.lightning\.force\.com$/, '$1')
    }
    if (url.match(SALESFORCE_HOST)) {
        name = url.replace(/https:\/\/(.+?)\.my\.salesforce\.com$/, '$1')
    }
    return name
}

const extractName = url => {
    name = extractInstanceName(url)
    return name.replace(/\.sandbox/, '')
}

function open(url) {
    url = 'https://' + url
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let tab = tabs[0]
        if (tab.url === 'chrome://newtab/') {
            window.close()
            chrome.tabs.update(tab.id, { url })
        } else {
            chrome.tabs.create({ url })
        }
    })
}

function getSetupUrl(url) {
    return extractHost(url) + '/lightning/setup/SetupOneHome/home'
}

function getDeveloperConsoleUrl(url) {
    return extractHost(url) + '/_ui/common/apex/debug/ApexCSIPage'
}

function getStoreUrl(url) {
    return extractInstanceName(url) + '.my.site.com/'
}

function getExperienceBuilderUrl(url) {
    return extractInstanceName(url) + '.builder.salesforce-experience.com/sfsites/picasso/core/config/commeditor.jsp'
}

export {
    SALESFORCE_HOST,
    FORCE_HOST,
    sanitizeUrl,
    extractHost,
    extractName,
    open,
    getSetupUrl,
    getDeveloperConsoleUrl,
    getStoreUrl,
    getExperienceBuilderUrl,
}

