import { useState } from "react"
import { API_URL } from "../enviroment";
import { Endpoint, FetchDataProps } from "../types";

const useFetch = (endpoint: Endpoint) => {
  const [fetchData, setFetchData] = useState<FetchDataProps>({
    isLoading: false,
    error: null,
    data: null
  });

  const callApi = async () => {
    //set loading to true
    //return error to null
    setFetchData(prev => ({
      ...prev,
      error: null,
      isLoading: true
    }))

    await fetch(`${API_URL}${endpoint}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      setFetchData(prev => ({
        ...prev,
        data: result
      }))
    })
    .catch(e => {
      setFetchData(prev => ({
        ...prev,
        error: e
      }))
    })
    .finally(() => {
      setFetchData(prev => ({
        ...prev,
        isLoading: false
      }))
    })
  }

  return {
    callApi,
    ...fetchData
  }
}

export default useFetch;