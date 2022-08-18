import { App } from 'vue'
import registerIcons from './register-icons'
import registerComponents from './register-components'

export default function registerApp(app: App): void {
  registerComponents(app)
  registerIcons(app)
}
