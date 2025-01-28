declare global {
  interface Window {
    appInsights: any
  }
}

export const init = (_googleAnalyticsId: string): void => {
  //   TODO
}

export const getSessionId = (): string | null => {
  return window.appInsights && window.appInsights && window.appInsights.context && window.appInsights.context.user
    ? window.appInsights.context.user.id
    : null
}
