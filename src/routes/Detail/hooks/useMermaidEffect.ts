import { useEffect } from "react"
import mermaid from "mermaid"

const useMermaidEffect = () => {
  useEffect(() => {
    const renderMermaid = async () => {
      mermaid.initialize({
        startOnLoad: false,
      })

      if (typeof document === "undefined") return

      const elements =
        document.getElementsByClassName("language-mermaid")

      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement

        const { svg } = await mermaid.render(
          "mermaid" + i,
          el.textContent || ""
        )

        el.innerHTML = svg
      }
    }

    renderMermaid()
  }, [])

  return
}

export default useMermaidEffect
