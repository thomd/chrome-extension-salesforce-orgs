const SALESFORCE_HOST = /.+\.my\.salesforce\.com$/
const FORCE_HOST = /.+\.lightning\.force\.com$/
const SITE_HOST = /.+\.my\.site\.com$/
const EXP_BUILDER_HOST = /.+\.builder\.salesforce-experience\.com$/

const sanitizeUrl = url => {
  url = url.replace(/^https?:\/\//, '')
  url = url.replace(/\/.*$/, '')
  return 'https://' + url
}

const isSalesforceUrl = url => {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  return SALESFORCE_HOST.test(host) || FORCE_HOST.test(host) || SITE_HOST.test(host) || EXP_BUILDER_HOST.test(host)
}

const extractHost = url => {
  return sanitizeUrl(url).replace(/https:\/\//, '')
}

const extractInstanceName = url => {
  url = sanitizeUrl(url)
  let name = ''
  if (url.match(FORCE_HOST)) {
    name = url.replace(/https:\/\/(.+?)\.lightning\.force\.com$/, '$1')
  }
  if (url.match(SALESFORCE_HOST)) {
    name = url.replace(/https:\/\/(.+?)\.my\.salesforce\.com$/, '$1')
  }
  if (url.match(SITE_HOST)) {
    name = url.replace(/https:\/\/(.+?)\.my\.site\.com$/, '$1')
  }
  if (url.match(EXP_BUILDER_HOST)) {
    name = url.replace(/https:\/\/(.+?)\.builder\.salesforce-experience\.com$/, '$1')
  }
  return name
}

const extractName = url => {
  let name = extractInstanceName(url)
  return name.replace(/\.sandbox/, '')
}

const currentUrl = async () => {
  let tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  let tab = tabs[0]
  return tab.url === 'chrome://newtab/' ? '' : isSalesforceUrl(tab.url) ? extractHost(tab.url) : ''
}

const open = url => {
  url = 'https://' + url
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let tab = tabs[0]
    if (tab.url === 'chrome://newtab/') {
      window.close()
      chrome.tabs.update(tab.id, { url })
    } else {
      chrome.tabs.create({ url })
    }
  })
}

const download = orgs => {
  let data = {
    orgs: orgs
  }
  let uri = 'data:application/json;base64,' + window.btoa(JSON.stringify(data))
  const a = document.createElement('a')
  a.href = uri
  a.download = 'salesforce-orgs.json'
  a.click()
}

const upload = (setOrgs) => {
  let input = document.createElement('input')
  input.type = 'file'
  input.hidden = true
  input.addEventListener('change', ev => {
    let files = ev.target.files
    if (!files || files.length === 0) {
      return
    }
    let file = files[0]
    let reader = new FileReader()
    reader.onload = ev => {
      let content = ev.target.result
      let data = JSON.parse(content)
      setOrgs(data.orgs)
    }
    reader.readAsText(file)
  })
  input.click()
}

const getSetupUrl = url => extractHost(url) + '/lightning/setup/SetupOneHome/home'

const getDeveloperConsoleUrl = url => extractHost(url) + '/_ui/common/apex/debug/ApexCSIPage'

const getStoreUrl = url => extractInstanceName(url) + '.my.site.com/'

const getObjectUrl = (url, id) => extractInstanceName(url) + '.lightning.force.com/lightning/r/' + id + '/view'

const getExperienceBuilderUrl = url => extractInstanceName(url) + '.builder.salesforce-experience.com/sfsites/picasso/core/config/commeditor.jsp'

export {
  SALESFORCE_HOST,
  FORCE_HOST,
  sanitizeUrl,
  extractHost,
  isSalesforceUrl,
  extractName,
  currentUrl,
  open,
  download,
  upload,
  getSetupUrl,
  getDeveloperConsoleUrl,
  getStoreUrl,
  getObjectUrl,
  getExperienceBuilderUrl,
}
