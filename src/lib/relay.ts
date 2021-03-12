import { useMemo } from 'react'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

let relayEnvironment


const api = `${process.env.NEXT_PUBLIC_API_HOST}/graphql`


async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  let requestVariables = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      "websiteToken": process.env.NEXT_PUBLIC_WEBSITE_TOKEN
    },

  }

  let body
  if (uploadables) {
    if (!window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.')
    }

    const formData = new FormData()
    formData.append('query', operation.text)
    formData.append('variables', JSON.stringify(variables))
    Object.keys(uploadables).forEach(key => {

      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        uploadables[key].map((uploadable) => {
          formData.append(`${key}[]`, uploadable)
        })

      }
    })

    body = formData
  } else {
    requestVariables.headers['Content-Type'] = 'application/json'
    body = JSON.stringify({
      query: operation.text,
      variables
    })
  }
  return fetch(api, {
    ...requestVariables,
    body
  }).then((response) => response.json())
}


function createEnvironment(initialRecords) {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
}

export function initEnvironment(initialRecords) {
  const environment = relayEnvironment ?? createEnvironment(initialRecords)

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords))
  }
  if (typeof window === 'undefined') return environment
  if (!relayEnvironment) relayEnvironment = environment

  return relayEnvironment
}

export function useEnvironment(initialRecords) {
  const store = useMemo(() => initEnvironment(initialRecords), [initialRecords])
  return store
}
