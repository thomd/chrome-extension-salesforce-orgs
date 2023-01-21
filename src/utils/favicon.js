
const updateFavicon = () => {
    const hostname = window.location.hostname
    chrome.storage.local.get(['SalesforceOrgs'], (result) => {
        const orgs = result['SalesforceOrgs']
        orgs.forEach(org => {
            if (hostname.includes(org.name)) {

                // first remove all favicons
                const icon = document.querySelector("head > link[rel='icon']")
                icon && icon.remove()
                const shortcutIcon = document.querySelector("head > link[rel='shortcut icon']")
                shortcutIcon && shortcutIcon.remove()

                // then inject a colored SVG favicon
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid" viewBox="0 0 4000 2800"><path fill="${org.color}" d="M1666 307a702 702 0 0 1 1123 148 852 852 0 0 1 349-75c476 0 862 390 862 870s-386 870-862 870a849 849 0 0 1-170-17 630 630 0 0 1-550 323c-99 0-192-22-276-63a719 719 0 0 1-661 438 719 719 0 0 1-675-471 659 659 0 0 1-137 15A671 671 0 0 1 1 1670c0-250 135-468 334-584a775 775 0 0 1-64-309 776 776 0 0 1 1394-471"/></svg>`
                const faviconUrl = 'data:image/svg+xml;base64,' + btoa(svg)
                const link = document.createElement('link')
                link.type = 'image/svg+xml'
                link.rel = 'shortcut icon'
                link.href = faviconUrl
                document.querySelector('head').appendChild(link)
            }
        })
    })
}

export {
    updateFavicon,
}
