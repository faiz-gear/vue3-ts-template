import { App } from 'vue'
import SvgIcon from '@/base-ui/svg-icon'

const myComponents = [SvgIcon]
// 加载svg
const requireContext = require.context('../assets/icons', false, /\.svg$/)
requireContext.keys().forEach(requireContext)

export default function registerComponents(app: App): void {
  for (const myComponent of myComponents) {
    app.component(myComponent.__name!, myComponent) // eslint-disable-line
  }
}
