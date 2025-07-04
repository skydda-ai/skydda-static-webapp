import Button from '@/components/button';

const Home = () => {
  return (
    <div className='relative min-h-screen p-0 md:p-5 bg-[#0D0D0D] overflow-hidden flex'>
      <div className="flex-1 bg-[url('/images/home_bg.png')] bg-no-repeat bg-cover bg-center rounded-3xl px-[30px] md:px-[70px] lg:px-[90px] xl:px-[110px] py-[50px] md:py-[90px] lg:py-[110px] xl:py-[130px]">
        <header className='relative z-10'>
          <div className='flex items-center justify-center md:justify-start gap-3'>
            <img src='/logo/skydda_logo.svg' alt='Skydda Logo' />
          </div>
        </header>

        <main className='relative z-10 flex items-center flex-col gap-[60px] md:flex-row md:gap-[80px] mt-[60px]'>
          <div className='flex flex-col justify-center gap-[58px]'>
            <h1 className='flex flex-col justify-center font-jakarta text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white w-fit'>
              REIMAGINING THE SOC
              <br />
              <span className='font-normal'>FROM THE GROUND UP</span>
            </h1>

            <div className='flex flex-col md:flex-row gap-4'>
              <Button>Apply for early access</Button>
              <Button variant='outline'>Join our team</Button>
            </div>
          </div>

          <div className='flex flex-1 justify-center items-center'>
            <div className='relative w-[230px] md:w-[460px]'>
              <div className='absolute inset-0 w-[230px] md:w-[460px] bg-[linear-gradient(127.9deg,_rgba(148,_62,_250,_0.7)_1.58%,_rgba(210,_77,_228,_0.7)_98.42%)] mix-blend-color pointer-events-none z-0'></div>
              <video
                src='/gif/skydda_icon.mp4'
                autoPlay
                loop
                muted
                className='w-[230px] md:w-[460px]'
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
