import { InfinitySpin } from 'react-loader-spinner';
import { LoadMessage, LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <LoadMessage>Loading...</LoadMessage>
      <InfinitySpin
        visible={true}
        height="50"
        width="400"
        ariaLabel="infinity-spin-loading"
        wrapperStyle={{}}
        wrapperClass=""
        color="#353538"
      />
    </LoaderWrap>
  );
};
