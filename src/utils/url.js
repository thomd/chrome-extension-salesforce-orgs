
const SALESFORCE_HOST = /.+\.my\.salesforce\.com$/

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

const extractName = url => {
    return sanitizeUrl(url).replace(/https:\/\/(.+?)(\.sandbox)?\.my\.salesforce\.com$/, '$1')
}

export { SALESFORCE_HOST, sanitizeUrl, extractHost, extractName }
