declare global {
  interface Window {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    appInsights: any
  }
}

export const getSessionId = (): string | null => {
  return window.appInsights && window.appInsights && window.appInsights.context && window.appInsights.context.user
    ? window.appInsights.context.user.id
    : null
}
