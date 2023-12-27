import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/countSlice'
import { decrement } from '../redux/countSlice'
import { reset } from '../redux/countSlice'
import { incrementByAmt } from '../redux/countSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.count)
  const [amt, setAmt] = useState("")

  const handleIncrement = () => {
    if (amt == "") {
      alert("Please provide the amount properly")
    }
    else {
      dispatch(incrementByAmt(Number(amt)))
      setAmt("")
    }
  }

  return (
    <>
      <div style={{ width: '410px' }} className='border rounded text-center p-4 shadow'>
        <h5 className='fs-1 mb-3'>Counter App</h5>
        <span style={{ fontSize: '70px' }}>{count}</span>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button type="button" className="btn btn-warning" onClick={() => dispatch(decrement())}>Decrement</button>
          <button type="button" className="btn btn-danger" onClick={() => dispatch(reset())}>Reset</button>
          <button type="button" className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <input style={{ height: '60px' }} type="text" className='form-control' placeholder='Counter Increment Amount' name="" id="" onChange={e => setAmt(e.target.value)} value={amt} />
          <button type="button" className="btn btn-info ms-3" onClick={handleIncrement} >Increment by amount</button>
        </div>
      </div>
    </>
  )
}

export default Counter