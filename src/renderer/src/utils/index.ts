import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
// Will be used when we have custom class name or tailwind calss name
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
