import OneSignal from 'react-native-onesignal'

export function OneSignalEntry (): void {
  // OneSignal Init Code
  OneSignal.setLogLevel(6, 0)
  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
  OneSignal.setAppId('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX')
  // END OneSignal Init Code

  // Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse(() => {
  })

  // Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
    const notification = notificationReceivedEvent.getNotification()
    const data = notification.additionalData

    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification)
  })

  // Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler((notification) => {
  })
}
