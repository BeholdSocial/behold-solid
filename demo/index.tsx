import { render } from "solid-js/web"
import BeholdWidget from "../dist/index.js"

const rootElement = document.getElementById("root")

render(
  () => (
    <BeholdWidget
      onLoad={() => console.log("Loaded!")}
      feedId="L7mnQCHvZeMZLbNXmJll"
    />
  ),
  rootElement!
)
