interface PostFeedbackParams<T> {
  formName: string
  feedbackUrl: string
  values: T
  deviceId: string
}

export async function postFeedback<T>({ feedbackUrl, values, deviceId }: PostFeedbackParams<T>): Promise<void> {
   
  return new Promise(async (resolve, reject) => {
    const response = await fetch(feedbackUrl, {
      body: JSON.stringify({ ...values, deviceId }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      reject()
    } else {
      resolve()
    }
  })
}
