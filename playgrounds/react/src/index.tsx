import React from "react"
import ReactDOM from "react-dom"

import { Margin, Text } from "@ar.e/react"
import "@ar.e/scss/lib/Utilities.css"
import "@ar.e/scss/lib/Text.css"
import "@ar.e/scss/lib/Margin.css"
import "@ar.e/scss/lib/global.css"

ReactDOM.render(
  <div>
    <Margin>
      <Text size="xxl">This is some text</Text>
    </Margin>
  </div>,
  document.querySelector("#root")
)
