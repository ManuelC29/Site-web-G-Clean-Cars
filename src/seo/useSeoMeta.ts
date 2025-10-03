import { onMounted } from 'vue'

export default function useSeoMeta(options: {
  title?: string,
  description?: string,
  image?: string,
  url?: string,
  schema?: object
}) {
  const setMeta = () => {
    if (options.title) document.title = options.title
    if (options.description) {
      let d = document.querySelector('meta[name="description"]')
      if (!d) {
        d = document.createElement('meta')
        d.setAttribute('name','description')
        document.head.appendChild(d)
      }
      d.setAttribute('content', options.description)
    }
    if (options.image) {
      let ogImage = document.querySelector('meta[property="og:image"]')
      if (!ogImage) {
        ogImage = document.createElement('meta')
        ogImage.setAttribute('property','og:image')
        document.head.appendChild(ogImage)
      }
      ogImage.setAttribute('content', options.image)
    }
    if (options.url) {
      let ogUrl = document.querySelector('meta[property="og:url"]')
      if (!ogUrl) {
        ogUrl = document.createElement('meta')
        ogUrl.setAttribute('property','og:url')
        document.head.appendChild(ogUrl)
      }
      ogUrl.setAttribute('content', options.url)
    }
    if (options.schema) {
      let el = document.getElementById('page-schema')
      if (el) el.remove()
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-schema'
      script.text = JSON.stringify(options.schema)
      document.head.appendChild(script)
    }
  }

  onMounted(() => setMeta())
}
