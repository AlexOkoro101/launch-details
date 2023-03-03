import { useState } from "react"
import { API_URL } from "../enviroment";
import { Endpoint, FetchDataProps, FetchProps } from "../types";

const useFetch = ({endpoint, method, body}: FetchProps) => {
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

    await fetch(`${API_URL}${endpoint}`, {
      method: method,
      body: body
    })
    .then(res => {
      if(res.status !== 200) {
        setFetchData(prev => ({
          ...prev,
          error: "Not found"
        }))
        return;
      }
      return res.json()
    })
    .then(result => {
      setFetchData(prev => ({
        ...prev,
        data: result
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