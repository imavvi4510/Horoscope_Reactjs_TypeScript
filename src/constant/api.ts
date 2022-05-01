export interface Endpoint{
  daily:string
}


export const BASE_URL: string = "https://daily-horoscope3.p.rapidapi.com/api/1.0/"
export const EndPoints: Endpoint = {
  daily: "get_daily_horoscope.php"
}

export const api_key:string="0fcbc61acd0479dc77e3cccc0f5ffca7"