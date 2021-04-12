import 'whatwg-fetch'

class Settings {
  apiUrl = ''
  encodings = [
    {
      label: 'UTF-8',
      value: 'UTF-8',
    },
    {
      label: 'ISO-8859-1',
      value: 'ISO-8859-1',
    },
  ]
  projections = [
    {
      label: 'WGS84',
      value: 'EPSG:4326',
    },
    {
      label: 'Lambert 93',
      value: 'EPSG:2154',
    },
    {
      label: 'Web Mercator',
      value: 'EPSG:3857',
    },
  ]

  init() {
    return fetch('assets/settings.json')
      .then((response) => response.json())
      .then((json) => {
        Object.assign(this, json)
      })
  }
}

const SETTINGS = new Settings()
export default SETTINGS
