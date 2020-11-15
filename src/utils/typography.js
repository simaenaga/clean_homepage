import Typography from "typography"

const typography = new Typography({
  baseLineHeight: 1.666,
  headerColor: "#34303F",
  bodyColor: "#34303F",
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
