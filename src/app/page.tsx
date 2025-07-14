'use client';

import { useState } from 'react';

import { useCreateLeadMutation } from './api';
import Button from '@/components/button';
import Loader from '@/components/loader';
import Modal from '@/components/modal';
import { event } from '@/lib/gtag';

const SUCCESS_MESSAGE = 'OK';

const Home = () => {
  const [isEmailRequestModalOpen, setIsEmailRequestModalOpen] =
    useState<boolean>(false);
  const [isJoinTeamModalOpen, setIsJoinTeamModalOpen] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [resMessage, setResMessage] = useState<{
    message: string;
    success: boolean | null;
  }>({
    message: '',
    success: null
  });

  const [createLead, { isLoading }] = useCreateLeadMutation();

  const resetEmailForm = () => {
    setEmail('');
    setEmailError('');
    setResMessage({ message: '', success: null });
  };

  const handleEarlyAccessClick = () => {
    event({
      action: 'click_early_access',
      category: 'engagement',
      label: 'Apply Early Access',
      value: 1
    });
    setIsEmailRequestModalOpen(true);
  };

  const handleJoinTeamClick = () => {
    event({
      action: 'click_join_team',
      category: 'engagement',
      label: 'Join Team',
      value: 1
    });
    setIsJoinTeamModalOpen(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    event({
      action: 'click_email_submit',
      category: 'engagement',
      label: 'Submit Email',
      value: 1
    });

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    try {
      const res = await createLead({ email }).unwrap();
      const isSuccess = res.message === SUCCESS_MESSAGE;

      setResMessage({
        message: isSuccess
          ? 'Request submitted successfully!'
          : 'Something went wrong, please try again later.',
        success: isSuccess
      });

      setTimeout(() => {
        setIsEmailRequestModalOpen(false);
        resetEmailForm();
      }, 1500);
    } catch {
      setResMessage({
        message: 'Network error. Please try again later.',
        success: false
      });
    }
  };

  const renderEmailModal = () => (
    <Modal
      isOpen={isEmailRequestModalOpen}
      onClose={() => {
        setIsEmailRequestModalOpen(false);
        resetEmailForm();
      }}
    >
      <div>
        <h2 className='text-2xl font-semibold mb-2'>Request Early Access</h2>
        <p className='text-sm text-white/60 mb-6'>
          Enter your email to be notified by our team.
        </p>

        <form className='space-y-4' noValidate onSubmit={handleEmailSubmit}>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            className={`w-full px-4 py-3 bg-black/40 border ${
              emailError ? 'border-red-400' : 'border-white/10'
            } rounded-lg text-white placeholder:text-white/40 focus:outline-none ${
              !emailError ? 'focus:ring-2 focus:ring-[#45266A]' : ''
            }`}
          />
          {emailError && <p className='text-red-400 text-sm'>{emailError}</p>}
          {resMessage.message ? (
            <p
              className={`text-sm ${
                resMessage.success ? 'text-emerald-500' : 'text-red-400'
              }`}
            >
              {resMessage.message}
            </p>
          ) : (
            <Button type='submit' className='w-full mt-4'>
              {isLoading ? <Loader size={6} /> : 'Submit'}
            </Button>
          )}
        </form>
      </div>
    </Modal>
  );

  const renderJoinTeamModal = () => (
    <Modal
      isOpen={isJoinTeamModalOpen}
      onClose={() => setIsJoinTeamModalOpen(false)}
      className='md:max-w-lg'
    >
      <div>
        <h2 className='text-2xl font-semibold mb-4'>Join Our Team</h2>
        <p className='text-sm text-white/80'>
          <span className='font-semibold text-white'>
            To apply, please email us @{' '}
          </span>
          <a
            href='mailto:jobs@legionsecurity.ai'
            className='underline text-white/70 hover:text-white'
          >
            jobs@skydda.ai
          </a>
          <span className='font-semibold text-white'>
            {' '}
            with your LinkedIn/CV
          </span>
        </p>
      </div>
    </Modal>
  );

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
            <h1 className='font-jakarta text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white'>
              REIMAGINING THE SOC
              <br />
              <span className='font-normal'>FROM THE GROUND UP</span>
            </h1>
            <div className='flex flex-col md:flex-row gap-4'>
              <Button handleButtonClick={handleEarlyAccessClick}>
                Apply for early access
              </Button>
              <Button variant='outline' handleButtonClick={handleJoinTeamClick}>
                Join our team
              </Button>
            </div>
          </div>

          <div className='flex flex-1 justify-center items-center'>
            <div className='relative w-[230px] md:w-[460px]'>
              <div className='absolute inset-0 left-1 bottom-1 top-1 md:left-0 w-[220px] md:w-[460px] bg-[linear-gradient(127.9deg,_rgba(148,_62,_250,_0.7)_1.58%,_rgba(210,_77,_228,_0.7)_98.42%)] mix-blend-color pointer-events-none z-0'></div>
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

      {renderEmailModal()}
      {renderJoinTeamModal()}
    </div>
  );
};

export default Home;
