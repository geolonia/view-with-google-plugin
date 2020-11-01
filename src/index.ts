import * as Geolonia from '@geolonia/embed'

type Anchor = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
const defaltAnchors: Anchor[] = ['top-left', 'top-right', 'bottom-right', 'bottom-left']

const isAnchor = (text: any): text is Anchor => {
  return typeof text === 'string' && (defaltAnchors as string[]).includes(text)
}

type Options = {
  lng?: number;
  lat?: number;
  lang?: string;
}

class VieWithGoogleControl {
  _container: HTMLDivElement
  constructor(options: Options = {}) {
    this._container = document.createElement("div")
    this._container.style.display = "flex";
    this._container.className = "mapboxgl-ctrl mapboxgl-ctrl-group geolonia-ctrl-view-with-google";
    this._container.style.padding = ".3em 1em .2em"

    const lang = options.lang || 'ja'
    const { lng, lat } = options
    const url = `https://www.google.com/maps/@${lat},${lng}?q=${lat},${lng}`

    const texts: { [lang: string]: string } = {
      'ja': 'Google Maps で見る',
      'en': 'View with Google Maps',
    }
    this._container.innerHTML = `<a href="${url}">${texts[lang] || texts.ja}</a>`
  }

  onAdd(map: mapboxgl.Map) {
    return this._container;
  }

  onRemove() {
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
  }
}

const ViewWithGoogleGeoloniaPlugin: Geolonia.EmbedPlugin = (map, target, atts) => {
  const anchor = isAnchor(atts.anchor) ? atts.anchor : defaltAnchors[0]
  const lng = parseFloat(atts.lng)
  const lat = parseFloat(atts.lat)
  if (!Number.isNaN(lng) && !Number.isNaN(lat)) {
    map.addControl(new VieWithGoogleControl({
      lang: atts.lang,
      lng,
      lat,
    }), anchor)
  }
}
window.geolonia.registerPlugin(ViewWithGoogleGeoloniaPlugin)
