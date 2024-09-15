import React from 'react';

const ImageSlider = ({ image, message, description,title }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    height: '450px', 
    position: 'relative',
    color: '#fff', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    padding: '20px', 
  };

  return (
    <div className='w-full'>
      <div style={divStyle} className='bg-no-repeat bg-center bg-cover w-full font-extrabold relative'>
        <div>
          <p className="text-lg mb-4">{message}</p>
          <p>{description}</p>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-6">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-4">
            Feel free to explore, find your favorite films, and stay up-to-date with what’s new in the world of entertainment.
          </p>
          <p className="text-lg">
            Enjoy browsing and happy watching!
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;