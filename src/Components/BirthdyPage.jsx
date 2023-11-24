import React from 'react';
import videoBg from '../Assets/file.gif'
import birthdaySong from '../Assets/happy_birthday.mp3'
import Song2 from '../Assets/happy_birthday_song.mp3'

const BirthdyPage = () => {
    

    return (
        <div className="min-h-screen flex flex-col justify-center space-x-0 bg-gray-700 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
           <div className='flex items-center justify-center'> 
            <div className='mt-[120px] '>
                <h1 className='text-8xl hover:animate-spin font-freckle-face animate__animated animate__rubberBand'>Happy Birthday...</h1>
                <p>__________________________________________________________________________________________________</p>
            </div>
            <img className=' w-[400px] h-[600px] bg-cover' src={videoBg} alt='' />
            </div>
            <div className='m-5 p-10'>
            <div className='p-4'>
                <p>1st:</p>
                <audio controls>
                    <source src={birthdaySong} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className='p-4'>
                <p>2nd:</p>
                <audio controls>
                    <source src={Song2} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            </div>
        </div>
    );
};

export default BirthdyPage;
