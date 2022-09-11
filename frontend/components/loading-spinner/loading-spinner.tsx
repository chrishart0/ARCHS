import CircularProgress from '@mui/material/CircularProgress';

export const LoadingGlobal = () => (
  <div className="fixed z-20 top-1/2 left-1/2">
    <div className="loading-spinner" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export function LoadingInline() {
  return (
    <CircularProgress sx={{padding: "3px"}}/>
  );
}
