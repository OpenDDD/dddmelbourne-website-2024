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

export const logPageView = (): void => {
  //   TODO
  if (window.appInsights) {
    window.appInsights.trackPageView()
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logEvent = (category: string, action: string, data: any, measurements?: any): void => {
  if (category && action && logEvent) {
    if (window.appInsights && window.appInsights.trackEvent) {
      window.appInsights.trackEvent(
        category + ':' + action,
        {
          action,
          category,
          ...data,
        },
        measurements,
      )
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logException = (description: string, exception: Error, data: any): void => {
  if (description) {
    //   TODO
    if (window.appInsights && window.appInsights.trackException) {
      window.appInsights.trackException(exception, 'unhandled', {
        description,
        ...data,
      })
    }
  }
}
