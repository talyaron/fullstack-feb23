// Function to get a specific cookie by name
export function getCookie(cookieName: string) {
  const cookieString = document.cookie
  const cookieArray = cookieString.split("; ")

  for (const cookie of cookieArray) {
    const [name, value] = cookie.split("=")
    if (name === cookieName) {
      return decodeURIComponent(value)
    }
  }

  // Return null if the cookie is not found
  return null
}
