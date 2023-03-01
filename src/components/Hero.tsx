import Link from 'next/link';
import style from '../assets/css/landing.module.css'


const Hero = () => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center justify-content-lg-start  ${style.hero_wrapper}`}
    >
      <div
        className={`d-flex  flex-column justify-content-center align-items-start  ${style.hero_content}`}
      >
        <h2>powerful simple business banking</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          harum!
        </p>
        <span className="d-flex">
          <button className="btn">get started</button>
          <Link href={"/login"}>
            <button className="btn">login</button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Hero