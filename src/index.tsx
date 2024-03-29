import { onMount } from "solid-js"

/**
 * @component
 * @property {string} feedId Behold feed ID. Can be found in the [Behold dashboard](https://app.behold.so) by opening a widget feed and clicking on "Embed Code"
 * @property {function} [onLoad] Function to run after initial render
 */
function BeholdWidget(props: { feedId: string; onLoad?: Function }) {
  onMount(() => {
    const existingScriptEl = document.querySelector(
      '[src="https://w.behold.so/widget.js"]'
    )
    if (existingScriptEl || customElements.get("behold-widget")) return

    const scriptEl = document.createElement("script")
    scriptEl.src = "https://w.behold.so/widget.js"
    scriptEl.type = "module"
    document.body.appendChild(scriptEl)
  })

  return (
    <behold-widget
      onLoad={props.onLoad}
      attr:feed-id={props.feedId}
    ></behold-widget>
  )
}

export default BeholdWidget

declare module "solid-js/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": {
        "attr:feed-id": string
        onLoad?: Function
      }
    }
  }
}
