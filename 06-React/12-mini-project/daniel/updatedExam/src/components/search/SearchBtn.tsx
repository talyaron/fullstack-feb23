import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '16px',
  border: '1px solid black',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#DCDCDC',
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const SearchBtn = () => {
    return ( 
         <Box sx={{mb:4}}>
              <Search >
                <SearchIconWrapper>
                  <SearchIcon sx={{color: 'gray'}} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="What are you looking for?"
                />
              </Search> 
         </Box>
       
      );
}

export default SearchBtn
