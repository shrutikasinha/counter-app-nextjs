export function setCookie(name: string, value: string): void {
  document.cookie = `${name}=${encodeURIComponent(value)}`  
  }
  
  export function getCookie(name: string): string {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
  }