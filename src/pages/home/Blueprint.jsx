
import React from 'react';
import Orders3 from './Orders3';
import Container from '../../components/Container';

const Blueprint = () => {
          return (
           
          <Container>
           <div className="mx-auto w-full bg-black">
          <div className="mx-auto flex w-full flex-col gap-16 bg-black   pt-6  sm:rounded-3xl lg:flex-row lg:items-center">
          <div className="w-full mx-auto flex-auto">
            <div className='mt-0 w-full'>
          <img className='w-full  rounded-sm ' src="https://i.ibb.co/wNy6wTZ/Screenshot-2024-05-30-164124.png"  />
                </div>
          </div>
          
        </div>
          <Orders3></Orders3>
          </div>
          </Container>
          ); 
};

export default Blueprint;