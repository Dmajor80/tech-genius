import React, { useState } from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableFooter,
  TableRow,
  TableContainer,
  // Pagination,
  Select,
  MenuItem,
  Input,
  InputAdornment,
} from '@mui/material'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'
import Pagenation from './pagination'
import  data  from './data';
import FilterButton from '../FilterButton'




export default function Department() {
  const [age, setAge] = useState('')

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = data.length 
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const visibleItems = data.slice(startIndex, endIndex) 

  function onPageChange(page) {
    setCurrentPage(page)
  }

  const handleFilterClick = () => {
    // Handle filter action
  }

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  
  return (
    <div>
      <div className=" md:-mt-70 xl:w-5/6 my- font-mono ">
        <h1>Department</h1>
        <section>
          <div className="border-4 border-black my-2 py-2 px-2">
            <div className="flex items-center justify-start py-4">
              <label htmlFor="name" className="w-1/4 text-black">
                *Status
              </label>
              <div className="w-2/4">
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className="border-2 border-black w-full h-10"
                >
                  <MenuItem value="Active only// All /Deactive only">
                    <em>Active only// All /Deactive only </em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
            </div>

            <div>
              <FilterButton onClick={handleFilterClick} />
            </div>
          </div>
        </section>
        <section>
          <div className="border-2 border-black my-4 ">
            <div className="flex justify-between py-2 mx-2">
              <div className="flex gap-2 items-center">
                <span>show per page</span>
                <div className="w-">
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    className="border-2 border-black w-full text-black ring-0 h-10"
                  >
                    <MenuItem value="10 /20 /50 /100 /All">
                      <em>10/ 20/ 50/ 100/ All</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="">
                <Input
                  placeholder="Search"
                  className="border-2 border-black outline-none"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </div>
            </div>

            <TableContainer className="mb-8 mx-2">
              <Table>
                <TableHead>
                  <tr>
                    <TableCell>Actions</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Telephone Number</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Manager</TableCell>
                    <TableCell>Status</TableCell>
                  </tr>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center text-sm gap-2 text-blue-500 ">
                        <p className="text- dark:text-gray-400">
                          <Link to="/#"> Edit</Link>
                        </p>
                        {''}
                        <span>
                          <Link to="/#">Deactivate</Link>{' '}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestName</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestSurName</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> 08112233678</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        <span className="text-sm"> TestName@gmail.com</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4"></div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> Active</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center text-sm gap-2 text-blue-500 ">
                        <p className="text- dark:text-gray-400">
                          <Link to="/#"> Edit</Link>
                        </p>
                        {''}
                        <span>
                          <Link to="/#">Deactivate</Link>{' '}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestName</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestSurName</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> 08112233678</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        <span className="text-sm"> TestName@gmail.com</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestName manager</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> Active</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center text-sm gap-2 text-blue-500 ">
                        <p className="text- dark:text-gray-400">
                          <Link to="/#"> Edit</Link>
                        </p>
                        {''}
                        <span>
                          <Link to="/#">Activate</Link>{' '}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestName</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestSurName</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> 08112233678</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        <span className="text-sm"> TestName@gmail.com</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> TestName manager</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm"> Inactive</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <TableFooter>
                {/* <Pagination
                // totalResults={totalResults}
                // resultsPerPage={resultsPerPage}
                // onChange={onPageChangeTable2}
                label="Table navigation"
              /> */}
                <div>
                  {/* {visibleItems.map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))} */}
                  <Pagenation
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                  />
                </div>
              </TableFooter>
            </TableContainer>
          </div>
        </section>
      </div>
    </div>
  )
}
