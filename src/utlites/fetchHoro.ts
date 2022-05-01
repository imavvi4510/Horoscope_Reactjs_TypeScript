import axios, { AxiosResponse } from "axios"
import { api_key, BASE_URL, EndPoints } from "../constant/api";
import { DailyHoroscopeResponse } from "../type/Horolist";
import { Params } from "../type/HoroscopeParam";

export function fetchHoroscopeByDate(data: Params): Promise<DailyHoroscopeResponse> {
  const encodedParams = new URLSearchParams();
  encodedParams.append("sign", data.sign);
  encodedParams.append("date", data.date);
  encodedParams.append("api_key", api_key);
  encodedParams.append("timezone", "5.5");
  const options = {
    method: 'POST',
    url: `${BASE_URL}${EndPoints.daily}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'daily-horoscope3.p.rapidapi.com',
      'X-RapidAPI-Key': '1181bcfc62msh8dd08a657325146p14873bjsn9b79af7b4413'
    },
    data: encodedParams
  }

  return axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
}