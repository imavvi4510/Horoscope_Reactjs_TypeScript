import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux"
import { fetchHoroscope } from '../slices/DailyHoroSlice';
import { selectHoroscope, useAppDispatch } from '../slices/store';
import { Params } from '../type/HoroscopeParam';
export default function Details() {
  const value = useSelector(selectHoroscope)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHoroscope(location.state as Params))
  }, [])
  const location = useLocation();
  return (
    <div>
      Welcome To Details Page
      <div>{JSON.stringify(location.state)}</div>
      <div>{JSON.stringify(value)}</div>
    </div>
  )
}


