export enum Sign {
  SAGITTARIUS = "SAGITTARIUS",
  AQUARIUS="AQUARIUS",
  CAPRICORN="CAPRICORN",
  ARIES="ARIES",
  LIBRA="LIBRA",
  VIRGO="VIRGO",
  SCORPIO="SCORPIO",
  TAURUS="TAURUS",
  PISCES="PISCES",
  GEMINI="GEMINI",
  LEO = "LEO",
  CANCER="CANCER"

}

export interface Prediction {
  personal: string;
  health: string;
  profession: string;
  emotions: string;
  travel: string;
  luck: string[];
}

export interface HoroscopeData {
  sign: Sign;
  prediction: Prediction;

}

/**
 * @interface WeeklyHoroscope
 */
export interface WeeklyHoroscopeData extends HoroscopeData{
  /**
   * @field week - provides the week prediction is valid for
   * @example 01 Aug 2021 to 07 Aug 2021
   */
  week: string;
}


export type DailyHoroscopeResponse = APIResponseData<HoroscopeData>

/**
 * @interface APIResponseData
 * @field success - can be 1 or 0
 * @field message - message returned by api
 * @field data - the data returned by api
 */
export interface APIResponseData<T> {
  success: 1 | 0;
  message: string;
  data: T;
}


