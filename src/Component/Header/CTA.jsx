import CV from '../../assets/cv.pdf';
const CTA = () => {
  return (
    <div className="CTA">
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};
export default CTA;
