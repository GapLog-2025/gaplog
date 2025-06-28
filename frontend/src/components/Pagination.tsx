// components/CustomPagination.tsx
import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPagination = styled(Pagination)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '20px',
  gap: '6px',
  height: '60px',

  '& .MuiPagination-ul': {
    gap: '6px',
  },

  '& .MuiPaginationItem-root': {
    width: 50,
    height: 50,
    borderRadius: '100px',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '143%',
    letterSpacing: '0.17px',
    color: '#4B5563',
  },

  '& .Mui-selected': {
    backgroundColor: '#F3E8FF',
    color: '#4B5563',
    fontWeight: 400,
  },

  '& .MuiPaginationItem-previousNext, & .MuiPaginationItem-firstLast': {
    borderRadius: '4px',
    width: 40,
    height: 40,
    '& svg': {
      width: 22,
      height: 22,
      color: '#4B5563',
    },
  },
}));

export default StyledPagination;
