const PortfolioInfo = () => {
  return (
    <div className='folio-info'>
      <h3>Welcome to my World</h3>
      <h1>Hi, I'm Daniel</h1>
      <div className='text-animate'>
        <h2>Software Engineer</h2>
      </div>
      <p className='paragraph'>
        An AI-driven software engineer skilled in solving complex coding
        challenges and leveraging advanced technologies. With a degree in
        Software Engineering and experience across diverse tech stacks, I excel
        in problem-solving and delivering innovative solutions.
      </p>
      <div className='btn-box'>
        <a href='#' className='btn'>
          Hire me now !
        </a>
        <a href='#' className='btn d-resume'>
          Download Resume
        </a>
      </div>
      <div className='social-media'>
        <div className='bg-icon'>
          <a href='#'>
            <i className='lni lni-linkedin'></i>
          </a>
          <span></span>
        </div>
        <div className='bg-icon'>
          <a href='#'>
            <i className='lni lni-github'></i>
          </a>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
