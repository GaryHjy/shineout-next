import { Tooltip } from 'shineout';

interface CopyProps {
  onCopy: () => void;
}

const Copy = (props: CopyProps) => {
  return (
    <div className='iconbox'>
      <Tooltip tip='复制代码' trigger='hover' position='top'>
        <div className='icon' onClick={props.onCopy}>
          <svg
            fill='none'
            stroke='currentColor'
            strokeWidth='4'
            viewBox='0 0 48 48'
            aria-hidden='true'
            focusable='false'
          >
            <path d='M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z'></path>
          </svg>
        </div>
      </Tooltip>
    </div>
  );
};

export default Copy;
