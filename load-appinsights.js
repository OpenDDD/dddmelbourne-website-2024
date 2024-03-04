let appInsights = require('applicationinsights')
appInsights
  .setup(
    process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ||
      'InstrumentationKey=20f00374-7bc7-453b-b1f9-a9f69c6c688b;IngestionEndpoint=https://eastasia-0.in.applicationinsights.azure.com/;LiveEndpoint=https://eastasia.livediagnostics.monitor.azure.com/',
  )
  .setAutoCollectConsole(true)
  .setAutoCollectDependencies(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectHeartbeat(true)
  .setAutoCollectPerformance(true, true)
  .setAutoCollectRequests(true)
  .setAutoDependencyCorrelation(true)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  .setSendLiveMetrics(true)
  .setUseDiskRetryCaching(true)

appInsights.start()
