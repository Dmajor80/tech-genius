import { Button } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt'


const FilterButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
    //   color="primary"
      startIcon={<FilterAltIcon />}
      onClick={onClick}
      className='text-black'
    >
      Filter
    </Button>
  )
};

export default FilterButton;