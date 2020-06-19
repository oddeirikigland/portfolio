import React from 'react'
import useForm from 'react-hook-form'

import './form.css'

const Form = () => {
  const { handleSubmit, register, errors, watch } = useForm({
    defaultValues: {
      exercise: '11'
    }
  })
  const onSubmit = values => {
    console.log(values)
  }

  const ExerciseType = ({ item }) => (
    <div className='form-group row' key={item.name}>
      <label className='control-label col-sm-2' htmlFor={item.name}>
        {item.name}
      </label>
      <div className='col-sm-10'>
        <input
          type='text'
          className='form-control'
          name={item}
          ref={register}
        />
      </div>
      {errors.item && errors.item.message}
    </div>
  )

  const Exercise = ({ list }) =>
    list.map(item => <ExerciseType item={item} key={item.name} />)

  const exercises = {
    11: [{ name: 'squat' }, { name: 'curl' }],
    12: [{ name: 'deadlift' }, { name: 'dance' }],
    13: [{ name: 'asd' }]
  }

  return (
    <form className='form-horizontal' onSubmit={handleSubmit(onSubmit)}>
      <fieldset className='form-group'>
        <div className='row'>
          <legend className='col-form-label col-sm-2 pt-0'>Exercise</legend>
          <div className='col-sm-10'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='exercise'
                id='11'
                value='11'
                ref={register}
                defaultChecked
              />
              <label className='form-check-label' htmlFor='11'>
                11
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='exercise'
                id='12'
                value='12'
                ref={register}
              />
              <label className='form-check-label' htmlFor='12'>
                12
              </label>
            </div>
            <div className='form-check disabled'>
              <input
                className='form-check-input'
                type='radio'
                name='exercise'
                id='13'
                value='13'
                ref={register}
              />
              <label className='form-check-label' htmlFor='13'>
                13
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <Exercise list={exercises[watch('exercise')]} />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
