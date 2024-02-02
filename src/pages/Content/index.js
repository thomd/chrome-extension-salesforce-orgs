import { updateFavicon } from '../../utils/favicon'

if (document.readyState === 'complete') {
  updateFavicon()
} else {
  window['onload'] = function () {
    updateFavicon()
  }
}
