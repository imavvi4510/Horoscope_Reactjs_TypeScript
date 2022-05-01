import { useNavigate } from "react-router-dom"
import { FormikProps, Form, Field, Formik, } from 'formik';
import { Sign } from '../type/Horolist';
import moment from "moment"
import { useState } from 'react';
interface FormValues<T> {
  name: string,
  sign: T,
  date: string,
  email: string,
}

interface OtherProps {
  message: string;
}
const sign: Array<Sign> = [Sign.AQUARIUS, Sign.ARIES, Sign.CANCER, Sign.CAPRICORN, Sign.GEMINI, Sign.LEO, Sign.LIBRA, Sign.PISCES, Sign.SAGITTARIUS, Sign.SCORPIO, Sign.TAURUS, Sign.VIRGO]
const MyForm = (props: OtherProps & FormikProps<FormValues<Sign>>) => {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [signs, setSigns] = useState(Sign.AQUARIUS)
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{
        name: '',
        sign: signs,
        date: date,
        email: ''
      }}
      onSubmit={(
        values,

      ) => {
        console.log(values);
        const { name, email } = values
        const newValue = {
          name,
          email,
          date,
          signs
        }
        console.log(newValue , 'this is new value');

        navigate("/Horoscope", { state: newValue })

      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="name" name="name" />
        <label htmlFor="sign">Sign</label>
        <select name="sign"
          onChange={(event) => {
            setSigns(event.target.value as Sign)
          }}
          style={{ display: "block" }}>
          {sign.map((item) =>
            <option value={item}>
              {item}
            </option>
          )}
        </select>
        <label htmlFor="choseDate">Chose Date</label>
        <select name="date" form="dateform"
          onChange={(event) => {
            setDate(event.target.value)
          }}

          style={{ display: "block" }}
        >
          <option value={moment().format('YYYY-MM-DD')}>Today</option>
          <option value={moment().add(1, 'day').format('YYYY-MM-DD')}>Tomorrow</option>
          <option value={moment().add(-1, 'day').format('YYYY-MM-DD')}>Yesterday</option>
        </select>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};






export default MyForm












