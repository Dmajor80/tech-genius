import { MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

export default function Create_department() {
    const [age, setAge] = useState('')

    const handleChange = (event) => {
      setAge(event.target.value)
    }

  return (
    <div>
      <section className=" md:-mt-80 xl:w-5/6 my- font-mono ">
        <h1 className="font-semibold text-2xl ">Create/ Edit Department</h1>
        <div className=" w-[70%]">
          <form action="">
            <div className="flex items-center justify-start py-4">
              <label htmlFor="name" className="w-1/4 text-black">
                *Name
              </label>
              <div className="w-3/4">
                <input className="border-2 border-black w-full" />
              </div>
            </div>
            <div className="flex items-center justify-start py-4">
              <label htmlFor="name" className="w-1/4 text-black">
                *Manager
              </label>
              <div className="w-3/4">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className="border-2 border-black w-full ring-0 h-10"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-start py-4">
              <label htmlFor="name" className="w-1/4 text-black">
                *Status
              </label>
              <div className="w-3/4">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className="border-2 border-black w-full h-10"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <button className="border-2 border-black px-4">save</button>
              <button className="border-2 border-black px-4">cancel</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
