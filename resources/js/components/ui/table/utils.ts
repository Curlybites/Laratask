type Updater<T> = T | ((old: T) => T)
const isFunction = (value: any): value is Function => typeof value === 'function'
import type { Ref } from "vue"

export function valueUpdater<T>(updaterOrValue: Updater<T>, ref: Ref<T>) {
  ref.value = isFunction(updaterOrValue)
    ? updaterOrValue(ref.value)
    : updaterOrValue
}
