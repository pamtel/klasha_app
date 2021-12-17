import React from 'react'
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export const SearchInput = () => {
  return (
    <div className="searchInput">
      <Input placeholder="Search" style={{color: 'white'}} inputProps={{ 'aria-label': 'description' }}
      startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{color: '#6f6f6f'}} />
            </InputAdornment>
          }
       />
    </div>
    )

}
