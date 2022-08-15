import { Directive } from 'vue'

export const vColor: Directive = (el, binding) => {
  el.style.color = binding.value
}
