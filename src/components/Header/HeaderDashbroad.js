
import { ref } from 'vue'

export const showSearchBox = ref(true)

export function toggleSearchBox() {
  showSearchBox.value = !showSearchBox.value
}