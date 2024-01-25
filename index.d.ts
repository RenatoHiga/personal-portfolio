import emailjs from './node_modules/@emailjs/browser/dist/email.min.js'

declare module 'emailjs' {
  export function emailjs(): emailjs
}
